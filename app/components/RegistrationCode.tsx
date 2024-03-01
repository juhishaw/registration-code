import { useEffect, useRef, useState } from 'react';
import { type LinksFunction, type MetaFunction } from '@remix-run/cloudflare';
import { useLocation, useNavigate, useParams } from '@remix-run/react';

import ButtonPage from '~/components/Button';
import PasswordPage from '~/components/Password';

import LogoImage from '../assets/logo-dark.svg';
import RegistrationStyles from "../styles/dist/registration.css";
import ButtonStyles from "../styles/dist/Button.css";

export default function RegistrationCodePage({ setShowRegistrationCodeComponent, togglePassword,
  setTogglePasswordCallback }: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRefs = Array.from({ length: 6 }, () => useRef<HTMLInputElement | null>(null));
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [regenerateCodeClicked, setRegenerateCodeClicked] = useState(false);
  const isInputsFilled = verificationCode.every((code) => code !== '');
  const { orgId } = useParams();
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');
  const navigate = useNavigate();

  const handleInputChange = (index: number, value: string) => {
    // Validate the input - allow only numbers (0-9)
    const sanitizedValue = value.replace(/[^0-9]/g, '');

    // Update the state with the sanitized value
    setVerificationCode((prevCodes) => {
      const newCodes = [...prevCodes];

      for (let i = 0; i < sanitizedValue.length && index + i < newCodes.length; i++) {
        newCodes[index + i] = sanitizedValue[i];
      }

      // Move focus to the end of the current input
      inputRefs[index + sanitizedValue.length - 1]?.current?.focus();

      // Move focus to the next empty input if available
      if (index + sanitizedValue.length < newCodes.length && sanitizedValue !== '') {
        inputRefs[index + sanitizedValue.length]?.current?.focus();
      }

      return newCodes;
    });
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && index > 0) {
      // Check if the current input is empty
      if (!e.currentTarget.value) {
        // Allow deletion to the previous input if the current input is empty
        setVerificationCode((prevCodes) => {
          const newCodes = [...prevCodes];
          newCodes[index - 1] = ''; // Clear the value in the previous input

          // Move focus to the previous input
          const prevIndex = index - 1;
          inputRefs[prevIndex]?.current?.focus();

          return newCodes;
        });
      } else {
        // Handle deleting the value at the current input when it's not empty
        setVerificationCode((prevCodes) => {
          const newCodes = [...prevCodes];
          newCodes[index] = ''; // Clear the value in the current input

          // Move focus to the current input
          inputRefs[index]?.current?.focus();

          return newCodes;
        });
      }

      // Prevent the default Backspace behavior (navigation)
      e.preventDefault();
    }
  };

  const handlePaste = (index: number, e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain');
    const sanitizedValue = pastedData.replace(/[^0-9]/g, '');

    setVerificationCode((prevCodes) => {
      const newCodes = [...prevCodes];

      for (let i = 0; i < sanitizedValue.length && index + i < newCodes.length; i++) {
        newCodes[index + i] = sanitizedValue[i];
      }

      // Move focus to the end of the current input
      inputRefs[index + sanitizedValue.length - 1]?.current?.focus();

      // Move focus to the next empty input if the current input is filled
      if (index + sanitizedValue.length < newCodes.length && sanitizedValue.length > 0) {
        inputRefs[index + sanitizedValue.length]?.current?.focus();
      }

      return newCodes;
    });
  };

  const handleRegenerateCodeClick = async () => {
    setRegenerateCodeClicked(true);
    // Empty the verificationCode inputs
    setVerificationCode(['', '', '', '', '', '']);
    setTimeout(() => {
      setRegenerateCodeClicked(false);
    }, 30000);
  };

  const goBackToRegistration = () => {
    setShowRegistrationCodeComponent((prevValue: boolean) => !prevValue);
    navigate(`/${orgId}/registration`);
  }

  useEffect(() => {
    // Check if registration was successful and togglePassword is true
    if (togglePassword) {
      setTogglePasswordCallback(true)
      // Do something when togglePassword is true, e.g., setTogglePasswordCallback(false);
    }
  }, [togglePassword, setTogglePasswordCallback]);

  useEffect(() => {
    // Find the first empty input and focus on it
    const firstEmptyIndex = verificationCode.findIndex((code) => code === '');
    const firstEmptyInputRef = inputRefs[firstEmptyIndex];

    if (firstEmptyIndex !== -1 && firstEmptyInputRef && firstEmptyInputRef.current) {
      firstEmptyInputRef.current.focus();
    }
  }, [verificationCode, inputRefs]);
console.log(togglePassword)
  return (
    <>
      <div className="registration-wrapper">
        <div className="registration-box reg-code">
          <div className="logo">
            <img src={LogoImage} alt="Web3Firewall Logo" />
          </div>
          <h1>Welcome to Web3Firewall!</h1>
          <h6>
            {togglePassword ? `Set Password for ${username}` : 'To begin this journey, please register your account.'}
          </h6>
          {
            !togglePassword &&
            <>
              <h3>A verification code was sent to {username}.</h3>
              <form method='POST'>
                <div className="form-control">
                  <h6>Enter your Code here</h6>
                  <div className="input-group">
                    {verificationCode.map((code, index) => (
                      <input
                        className='code-input'
                        key={index}
                        type="text"
                        id="username"
                        name="verificationCode"
                        maxLength={1}
                        disabled={regenerateCodeClicked}
                        value={code}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={(e) => handlePaste(index, e)}
                        ref={inputRefs[index]}
                      />
                    ))}
                  </div>
                  {regenerateCodeClicked ? (
                    <p className='text-16-500'>A new code has been sent.</p>
                  ) : (
                    <span className='link' onClick={handleRegenerateCodeClick}>
                      Regenerate code
                    </span>
                  )}
                </div>
                <ButtonPage
                  type="submit"
                  className={`primary ${!isInputsFilled && 'disabled'}`}
                  icon={true}
                  label="Next"
                  disabled={!isInputsFilled || regenerateCodeClicked}
                />
                <div className="bottom-link">
                  <button type="button" className="link" onClick={goBackToRegistration}>
                    This is not me
                  </button>
                </div>
              </form>
            </>
          }
          {togglePassword && <PasswordPage />}
        </div>
      </div>
    </>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Web3Firewall - Registration' },
    { name: 'description', content: 'Welcome to Web3Firewall!' },
  ]
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: RegistrationStyles },
  { rel: "stylesheet", href: ButtonStyles }
];