import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from '@remix-run/react';

import ButtonPage from '~/components/Button';

import LogoImage from '../assets/logo-dark.svg';
import RegistrationStyles from '../styles/dist/registration.css';
import ButtonStyles from '../styles/dist/Button.css';
import RegistrationCodePage from '../components/RegistrationCode';
import { registrationCodeVerify } from '~/utils/authentication/session.server';
import type { LinksFunction, ActionFunctionArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';

const [togglePassword, setTogglePassword] = useState(false);

export default function RegistrationPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const username = searchParams.get('username');
    const { orgId } = useParams();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isValid, setValid] = useState(true);
    const [showRegistrationCodeComponent, setShowRegistrationCodeComponent] = useState(false);
    

    const handleEmailChange = (e: { target: { value: any; }; }) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setValid(isValidEmail(newEmail));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isValid) {
            setShowRegistrationCodeComponent(true);

            // Use Remix's navigate function for client-side navigation
            navigate(`/${orgId}/registration?username=${email}`);
        }
    };

    // Check if orgId is present in the URL
    useEffect(() => {
        if (!orgId) {
            // Redirect to an error page or home page if orgId is not present
            navigate('/login'); // Adjust the URL as needed
        }
    }, [orgId, navigate]);

    // Check if username is present in the URL
    useEffect(() => {
        if (username) {
            setShowRegistrationCodeComponent(true);
            // Redirect to the Registration Code Input Screen
            navigate(`/${orgId}/registration?username=${username}`);
        }
    }, [username, orgId, navigate]);

    return (
        <>
            {!showRegistrationCodeComponent && (
                <div className="registration-wrapper">
                    <div className="registration-box">
                        <div className="logo">
                            <img src={LogoImage} alt="Web3Firewall Logo" />
                        </div>
                        <h1>Welcome to Web3Firewall!</h1>
                        <h6>To begin this journey, please register your account. </h6>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <input
                                    className={`input-control ${isValid ? '' : 'invalid'}`}
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {!isValid && <p className="error-txt">Invalid email format</p>}
                            </div>
                            <ButtonPage
                                type="submit"
                                className="primary"
                                icon={true}
                                label="Next"
                                disabled={!isValid || !email.trim()}
                                url={`/${orgId}/registration?username=${email}`}
                            />
                        </form>
                    </div>
                </div>
            )}
            {showRegistrationCodeComponent && (
                <RegistrationCodePage
                    setShowRegistrationCodeComponent={setShowRegistrationCodeComponent}
                    togglePassword={togglePassword}
                    setTogglePasswordCallback={setTogglePasswordCallback}
                />
            )}
        </>
    );
}

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: RegistrationStyles },
    { rel: 'stylesheet', href: ButtonStyles },
];

function isValidEmail(email: string) {
    const emailRegex = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    return emailRegex.test(email);
}

export const action = async ({ request, context }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const verificationCode = Array.from(formData.getAll('verificationCode'));

    // Extract orgId and username from the URL parameters
    const url = new URL(request.url);
    const orgId = url.pathname.split('/')[1]; // Extract the first segment of the path
    const username = url.searchParams.get('username') ?? '';

    try {
        const verificationCodeResponse = await registrationCodeVerify({ orgId, username, code: verificationCode.join(''), context });
        if (!verificationCodeResponse) {
            setTogglePassword(true)
            return json({ success: false, message: 'Verification code is wrong' }, 401);
        }
        setTogglePassword(true)
        return json({ success: true }, 200);
    } catch (error) {
        // For testing purposes only, set togglePassword to true even on failure
        setTogglePassword(true)
        console.error('Error during registration:', error);
        return json({ success: false, message: 'Registration failed.' }, 500);
    }
};
