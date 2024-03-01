import React, { useState } from "react";
import ButtonPage from "./Button";
import { fetchFromBackend } from 'app/utils/backend/fetch.server';

export default function PasswordPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState<string | string[]>([]);
    const [confirmPasswordError, setConfirmPasswordError] = useState<"" | "Password doesn't match">('');
    const [isFormValid, setIsFormValid] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const validatePassword = (value: string) => {
        const errors: string[] = [];

        // Minimum length of 14 characters and maximum length of 128 characters
        if (value.length < 14 || value.length > 128) {
            errors.push('Password must have a minimum of 14 characters and a maximum of 128 characters.');
        }

        // At least one lowercase letter
        if (!/[a-z]/.test(value)) {
            errors.push('Password must include at least one lowercase letter.');
        }

        // At least one uppercase letter
        if (!/[A-Z]/.test(value)) {
            errors.push('Password must include at least one uppercase letter.');
        }

        // At least one numeric character
        if (!/[0-9]/.test(value)) {
            errors.push('Password must include at least one numeric character.');
        }

        return errors;
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        // Validate password and get an array of errors
        const newPasswordErrors = validatePassword(newPassword);

        // Set the errors in the state
        setPasswordError(newPasswordErrors);

        const newConfirmPasswordError = confirmPassword && newPassword !== confirmPassword
            ? "Password doesn't match"
            : '';

        // Set the errors in the state for confirmation password
        setConfirmPasswordError(newConfirmPasswordError);

        // Update form validity based on password and confirmation errors
        updateFormValidity(newPasswordErrors, [newConfirmPasswordError]);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);

        // Validate confirm password
        setConfirmPasswordError(newConfirmPassword === password ? '' : "Password doesn't match");

        // Update form validity based on password and confirmation errors
        updateFormValidity(passwordError, []);
    };

    const updateFormValidity = (
        newPasswordErrors: string | string[],
        newConfirmPasswordErrors: string | string[]
    ) => {
        const passwordErrorString =
            Array.isArray(newPasswordErrors) ? newPasswordErrors.join('\n') : newPasswordErrors;
        const confirmPasswordErrorString =
            Array.isArray(newConfirmPasswordErrors)
                ? newConfirmPasswordErrors.join('\n')
                : newConfirmPasswordErrors;

        setIsFormValid(
            !passwordErrorString &&
            !confirmPasswordErrorString &&
            password !== '' &&
            confirmPassword !== ''
        );
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isFormValid) {
            console.log(password, confirmPassword, '******* password ******');

            // Make a fetch request to the Remix backend with the form data
            const response = await fetchFromBackend({
                path: `/api/v1/account/user/registration`,
                method: 'POST',
                body: JSON.stringify({ password }),
            })

            if (response.result) {
                console.log(response)
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="password-control">
                    <div className="form-control">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className={`input-control ${passwordError.length ? 'error' : ''}`}
                            value={password}
                            placeholder="Enter your password"
                            onChange={handlePasswordChange}
                        />
                        <span className={`icon-eye ${showPassword ? 'visible' : ''}`} onClick={togglePasswordVisibility}></span>
                    </div>
                    {passwordError && <p className="info-txt">{passwordError}</p>}
                </div>
                <div className="password-control last">
                    <div className="form-control">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            className={`input-control ${confirmPasswordError ? 'error' : ''}`}
                            value={confirmPassword}
                            placeholder="Re-enter your password"
                            onChange={handleConfirmPasswordChange}
                        />
                        <span className={`icon-eye ${showConfirmPassword ? 'visible' : ''}`} onClick={toggleConfirmPasswordVisibility}></span>
                    </div>
                    {confirmPasswordError && <p className="error-txt">{confirmPasswordError}</p>}
                </div>
                <ButtonPage
                    type="submit"
                    className={`primary`}
                    icon={true}
                    label="Register"
                    disabled={!isFormValid}
                />
            </form>
        </>
    );
}
