import {
  require_session
} from "/build/_shared/chunk-67IAOM7B.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  init_dist,
  useLocation,
  useNavigate,
  useParams
} from "/build/_shared/chunk-SVACFKTP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-E2CO66ZG.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:app/utils/backend/fetch.server
var require_fetch = __commonJS({
  "empty-module:app/utils/backend/fetch.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/$orgId.registration.tsx
var import_react5 = __toESM(require_react(), 1);
init_dist();

// app/components/Button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Button.tsx"
  );
  import.meta.hot.lastModified = "1709178113825.867";
}
function ButtonPage({
  type,
  className,
  icon,
  label,
  disabled,
  onClick,
  url
}) {
  _s();
  const combinedClassName = `${className} common-cta`;
  const navigate = useNavigate();
  const handleClick = async () => {
    if (onClick) {
      await onClick();
    }
    if (url) {
      navigate(`${url}`);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type, className: combinedClassName, disabled, onClick: handleClick, children: [
    label,
    " ",
    icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon-arrow-right" }, void 0, false, {
      fileName: "app/components/Button.tsx",
      lineNumber: 44,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Button.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_s(ButtonPage, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c = ButtonPage;
var _c;
$RefreshReg$(_c, "ButtonPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/assets/logo-dark.svg
var logo_dark_default = "/build/_assets/logo-dark-LQX5MYXA.svg";

// app/styles/dist/registration.css
var registration_default = "/build/_assets/registration-FHCLTN2H.css";

// app/styles/dist/Button.css
var Button_default = "/build/_assets/Button-RJSH3AMH.css";

// app/components/RegistrationCode.tsx
var import_react3 = __toESM(require_react(), 1);

// app/components/Password.tsx
var import_react2 = __toESM(require_react(), 1);
var import_fetch = __toESM(require_fetch(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Password.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Password.tsx"
  );
  import.meta.hot.lastModified = "1709229093233.608";
}
function PasswordPage() {
  _s2();
  const [showPassword, setShowPassword] = (0, import_react2.useState)(false);
  const [showConfirmPassword, setShowConfirmPassword] = (0, import_react2.useState)(false);
  const [password, setPassword] = (0, import_react2.useState)("");
  const [confirmPassword, setConfirmPassword] = (0, import_react2.useState)("");
  const [passwordError, setPasswordError] = (0, import_react2.useState)([]);
  const [confirmPasswordError, setConfirmPasswordError] = (0, import_react2.useState)("");
  const [isFormValid, setIsFormValid] = (0, import_react2.useState)(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const validatePassword = (value) => {
    const errors = [];
    if (value.length < 14 || value.length > 128) {
      errors.push("Password must have a minimum of 14 characters and a maximum of 128 characters.");
    }
    if (!/[a-z]/.test(value)) {
      errors.push("Password must include at least one lowercase letter.");
    }
    if (!/[A-Z]/.test(value)) {
      errors.push("Password must include at least one uppercase letter.");
    }
    if (!/[0-9]/.test(value)) {
      errors.push("Password must include at least one numeric character.");
    }
    return errors;
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const newPasswordErrors = validatePassword(newPassword);
    setPasswordError(newPasswordErrors);
    const newConfirmPasswordError = confirmPassword && newPassword !== confirmPassword ? "Password doesn't match" : "";
    setConfirmPasswordError(newConfirmPasswordError);
    updateFormValidity(newPasswordErrors, [newConfirmPasswordError]);
  };
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordError(newConfirmPassword === password ? "" : "Password doesn't match");
    updateFormValidity(passwordError, []);
  };
  const updateFormValidity = (newPasswordErrors, newConfirmPasswordErrors) => {
    const passwordErrorString = Array.isArray(newPasswordErrors) ? newPasswordErrors.join("\n") : newPasswordErrors;
    const confirmPasswordErrorString = Array.isArray(newConfirmPasswordErrors) ? newConfirmPasswordErrors.join("\n") : newConfirmPasswordErrors;
    setIsFormValid(!passwordErrorString && !confirmPasswordErrorString && password !== "" && confirmPassword !== "");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log(password, confirmPassword, "******* password ******");
      const response = await (0, import_fetch.fetchFromBackend)({
        path: `/api/v1/account/user/registration`,
        method: "POST",
        body: JSON.stringify({
          password
        })
      });
      if (response.result) {
        console.log(response);
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "password-control", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "form-control", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: showPassword ? "text" : "password", className: `input-control ${passwordError.length ? "error" : ""}`, value: password, placeholder: "Enter your password", onChange: handlePasswordChange }, void 0, false, {
          fileName: "app/components/Password.tsx",
          lineNumber: 118,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: `icon-eye ${showPassword ? "visible" : ""}`, onClick: togglePasswordVisibility }, void 0, false, {
          fileName: "app/components/Password.tsx",
          lineNumber: 119,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Password.tsx",
        lineNumber: 117,
        columnNumber: 21
      }, this),
      passwordError && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "info-txt", children: passwordError }, void 0, false, {
        fileName: "app/components/Password.tsx",
        lineNumber: 121,
        columnNumber: 39
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Password.tsx",
      lineNumber: 116,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "password-control last", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "form-control", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: showConfirmPassword ? "text" : "password", className: `input-control ${confirmPasswordError ? "error" : ""}`, value: confirmPassword, placeholder: "Re-enter your password", onChange: handleConfirmPasswordChange }, void 0, false, {
          fileName: "app/components/Password.tsx",
          lineNumber: 125,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: `icon-eye ${showConfirmPassword ? "visible" : ""}`, onClick: toggleConfirmPasswordVisibility }, void 0, false, {
          fileName: "app/components/Password.tsx",
          lineNumber: 126,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Password.tsx",
        lineNumber: 124,
        columnNumber: 21
      }, this),
      confirmPasswordError && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "error-txt", children: confirmPasswordError }, void 0, false, {
        fileName: "app/components/Password.tsx",
        lineNumber: 128,
        columnNumber: 46
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Password.tsx",
      lineNumber: 123,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ButtonPage, { type: "submit", className: `primary`, icon: true, label: "Register", disabled: !isFormValid }, void 0, false, {
      fileName: "app/components/Password.tsx",
      lineNumber: 130,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Password.tsx",
    lineNumber: 115,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/Password.tsx",
    lineNumber: 114,
    columnNumber: 10
  }, this);
}
_s2(PasswordPage, "ZaMYTb7kN6RgaxXdZ6p1yjaAjwQ=");
_c2 = PasswordPage;
var _c2;
$RefreshReg$(_c2, "PasswordPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/RegistrationCode.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/RegistrationCode.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/RegistrationCode.tsx"
  );
}
function RegistrationCodePage({
  setShowRegistrationCodeComponent,
  togglePassword: togglePassword2,
  setTogglePasswordCallback: setTogglePasswordCallback2
}) {
  _s22();
  var _s4 = $RefreshSig$();
  const inputRefs = _s4(Array.from({
    length: 6
  }, _s4(() => {
    _s4();
    return (0, import_react3.useRef)(null);
  }, "J9pzIsEOVEZ74gjFtMkCj+5Po7s=")), "J9pzIsEOVEZ74gjFtMkCj+5Po7s=");
  const [verificationCode, setVerificationCode] = (0, import_react3.useState)(["", "", "", "", "", ""]);
  const [regenerateCodeClicked, setRegenerateCodeClicked] = (0, import_react3.useState)(false);
  const isInputsFilled = verificationCode.every((code) => code !== "");
  const {
    orgId
  } = useParams();
  const location = useLocation();
  const username = new URLSearchParams(location.search).get("username");
  const navigate = useNavigate();
  const handleInputChange = (index, value) => {
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    setVerificationCode((prevCodes) => {
      const newCodes = [...prevCodes];
      for (let i = 0; i < sanitizedValue.length && index + i < newCodes.length; i++) {
        newCodes[index + i] = sanitizedValue[i];
      }
      inputRefs[index + sanitizedValue.length - 1]?.current?.focus();
      if (index + sanitizedValue.length < newCodes.length && sanitizedValue !== "") {
        inputRefs[index + sanitizedValue.length]?.current?.focus();
      }
      return newCodes;
    });
  };
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0) {
      if (!e.currentTarget.value) {
        setVerificationCode((prevCodes) => {
          const newCodes = [...prevCodes];
          newCodes[index - 1] = "";
          const prevIndex = index - 1;
          inputRefs[prevIndex]?.current?.focus();
          return newCodes;
        });
      } else {
        setVerificationCode((prevCodes) => {
          const newCodes = [...prevCodes];
          newCodes[index] = "";
          inputRefs[index]?.current?.focus();
          return newCodes;
        });
      }
      e.preventDefault();
    }
  };
  const handlePaste = (index, e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain");
    const sanitizedValue = pastedData.replace(/[^0-9]/g, "");
    setVerificationCode((prevCodes) => {
      const newCodes = [...prevCodes];
      for (let i = 0; i < sanitizedValue.length && index + i < newCodes.length; i++) {
        newCodes[index + i] = sanitizedValue[i];
      }
      inputRefs[index + sanitizedValue.length - 1]?.current?.focus();
      if (index + sanitizedValue.length < newCodes.length && sanitizedValue.length > 0) {
        inputRefs[index + sanitizedValue.length]?.current?.focus();
      }
      return newCodes;
    });
  };
  const handleRegenerateCodeClick = async () => {
    setRegenerateCodeClicked(true);
    setVerificationCode(["", "", "", "", "", ""]);
    setTimeout(() => {
      setRegenerateCodeClicked(false);
    }, 3e4);
  };
  const goBackToRegistration = () => {
    setShowRegistrationCodeComponent((prevValue) => !prevValue);
    navigate(`/${orgId}/registration`);
  };
  (0, import_react3.useEffect)(() => {
    if (togglePassword2) {
      setTogglePasswordCallback2(true);
    }
  }, [togglePassword2, setTogglePasswordCallback2]);
  (0, import_react3.useEffect)(() => {
    const firstEmptyIndex = verificationCode.findIndex((code) => code === "");
    const firstEmptyInputRef = inputRefs[firstEmptyIndex];
    if (firstEmptyIndex !== -1 && firstEmptyInputRef && firstEmptyInputRef.current) {
      firstEmptyInputRef.current.focus();
    }
  }, [verificationCode, inputRefs]);
  console.log(togglePassword2);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "registration-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "registration-box reg-code", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: logo_dark_default, alt: "Web3Firewall Logo" }, void 0, false, {
      fileName: "app/components/RegistrationCode.tsx",
      lineNumber: 154,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/RegistrationCode.tsx",
      lineNumber: 153,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Welcome to Web3Firewall!" }, void 0, false, {
      fileName: "app/components/RegistrationCode.tsx",
      lineNumber: 156,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { children: togglePassword2 ? `Set Password for ${username}` : "To begin this journey, please register your account." }, void 0, false, {
      fileName: "app/components/RegistrationCode.tsx",
      lineNumber: 157,
      columnNumber: 11
    }, this),
    !togglePassword2 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: [
        "A verification code was sent to ",
        username,
        "."
      ] }, void 0, true, {
        fileName: "app/components/RegistrationCode.tsx",
        lineNumber: 161,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { children: "Enter your Code here" }, void 0, false, {
            fileName: "app/components/RegistrationCode.tsx",
            lineNumber: 164,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "input-group", children: verificationCode.map((code, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { className: "code-input", type: "text", id: "username", name: "verificationCode", maxLength: 1, disabled: regenerateCodeClicked, value: code, onChange: (e) => handleInputChange(index, e.target.value), onKeyDown: (e) => handleKeyDown(index, e), onPaste: (e) => handlePaste(index, e), ref: inputRefs[index] }, index, false, {
            fileName: "app/components/RegistrationCode.tsx",
            lineNumber: 166,
            columnNumber: 60
          }, this)) }, void 0, false, {
            fileName: "app/components/RegistrationCode.tsx",
            lineNumber: 165,
            columnNumber: 19
          }, this),
          regenerateCodeClicked ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-16-500", children: "A new code has been sent." }, void 0, false, {
            fileName: "app/components/RegistrationCode.tsx",
            lineNumber: 168,
            columnNumber: 44
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "link", onClick: handleRegenerateCodeClick, children: "Regenerate code" }, void 0, false, {
            fileName: "app/components/RegistrationCode.tsx",
            lineNumber: 168,
            columnNumber: 103
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/RegistrationCode.tsx",
          lineNumber: 163,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ButtonPage, { type: "submit", className: `primary ${!isInputsFilled && "disabled"}`, icon: true, label: "Next", disabled: !isInputsFilled || regenerateCodeClicked }, void 0, false, {
          fileName: "app/components/RegistrationCode.tsx",
          lineNumber: 173,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bottom-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", className: "link", onClick: goBackToRegistration, children: "This is not me" }, void 0, false, {
          fileName: "app/components/RegistrationCode.tsx",
          lineNumber: 176,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/RegistrationCode.tsx",
          lineNumber: 175,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/RegistrationCode.tsx",
        lineNumber: 162,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/RegistrationCode.tsx",
      lineNumber: 160,
      columnNumber: 31
    }, this),
    togglePassword2 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PasswordPage, {}, void 0, false, {
      fileName: "app/components/RegistrationCode.tsx",
      lineNumber: 183,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/RegistrationCode.tsx",
    lineNumber: 152,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/RegistrationCode.tsx",
    lineNumber: 151,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/RegistrationCode.tsx",
    lineNumber: 150,
    columnNumber: 10
  }, this);
}
_s22(RegistrationCodePage, "5qdbM4ymUPY+1uul7mGbvsGpXjQ=", false, function() {
  return [useParams, useLocation, useNavigate];
});
_c3 = RegistrationCodePage;
var _c3;
$RefreshReg$(_c3, "RegistrationCodePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/$orgId.registration.tsx
var import_session = __toESM(require_session(), 1);
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/$orgId.registration.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$orgId.registration.tsx"
  );
}
var [togglePassword, setTogglePassword] = (0, import_react5.useState)(false);
function RegistrationPage() {
  _s3();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get("username");
  const {
    orgId
  } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = (0, import_react5.useState)("");
  const [isValid, setValid] = (0, import_react5.useState)(true);
  const [showRegistrationCodeComponent, setShowRegistrationCodeComponent] = (0, import_react5.useState)(false);
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setValid(isValidEmail(newEmail));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid) {
      setShowRegistrationCodeComponent(true);
      navigate(`/${orgId}/registration?username=${email}`);
    }
  };
  (0, import_react5.useEffect)(() => {
    if (!orgId) {
      navigate("/login");
    }
  }, [orgId, navigate]);
  (0, import_react5.useEffect)(() => {
    if (username) {
      setShowRegistrationCodeComponent(true);
      navigate(`/${orgId}/registration?username=${username}`);
    }
  }, [username, orgId, navigate]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    !showRegistrationCodeComponent && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "registration-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "registration-box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: logo_dark_default, alt: "Web3Firewall Logo" }, void 0, false, {
        fileName: "app/routes/$orgId.registration.tsx",
        lineNumber: 79,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/$orgId.registration.tsx",
        lineNumber: 78,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Welcome to Web3Firewall!" }, void 0, false, {
        fileName: "app/routes/$orgId.registration.tsx",
        lineNumber: 81,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h6", { children: "To begin this journey, please register your account. " }, void 0, false, {
        fileName: "app/routes/$orgId.registration.tsx",
        lineNumber: 82,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { className: `input-control ${isValid ? "" : "invalid"}`, type: "email", name: "email", value: email, onChange: handleEmailChange, required: true }, void 0, false, {
            fileName: "app/routes/$orgId.registration.tsx",
            lineNumber: 85,
            columnNumber: 33
          }, this),
          !isValid && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "error-txt", children: "Invalid email format" }, void 0, false, {
            fileName: "app/routes/$orgId.registration.tsx",
            lineNumber: 87,
            columnNumber: 46
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/$orgId.registration.tsx",
          lineNumber: 84,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ButtonPage, { type: "submit", className: "primary", icon: true, label: "Next", disabled: !isValid || !email.trim(), url: `/${orgId}/registration?username=${email}` }, void 0, false, {
          fileName: "app/routes/$orgId.registration.tsx",
          lineNumber: 89,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/$orgId.registration.tsx",
        lineNumber: 83,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/$orgId.registration.tsx",
      lineNumber: 77,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/$orgId.registration.tsx",
      lineNumber: 76,
      columnNumber: 48
    }, this),
    showRegistrationCodeComponent && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RegistrationCodePage, { setShowRegistrationCodeComponent, togglePassword, setTogglePasswordCallback }, void 0, false, {
      fileName: "app/routes/$orgId.registration.tsx",
      lineNumber: 95,
      columnNumber: 47
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$orgId.registration.tsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
}
_s3(RegistrationPage, "RkogJ8CONPW/BoKpWa1uzd7WYos=", false, function() {
  return [useLocation, useParams, useNavigate];
});
_c4 = RegistrationPage;
var links = () => [{
  rel: "stylesheet",
  href: registration_default
}, {
  rel: "stylesheet",
  href: Button_default
}];
function isValidEmail(email) {
  const emailRegex = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
  return emailRegex.test(email);
}
var _c4;
$RefreshReg$(_c4, "RegistrationPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RegistrationPage as default,
  links
};
//# sourceMappingURL=/build/routes/$orgId.registration-G3KCF6XA.js.map
