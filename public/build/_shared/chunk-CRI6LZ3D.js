import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-E2CO66ZG.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/authentication/AuthProvider.tsx
var import_react2 = __toESM(require_react(), 1);

// app/components/authentication/useAuth.tsx
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/authentication/useAuth.tsx"
  );
  import.meta.hot.lastModified = "1708356365263.8694";
}
var useAuth = () => {
  const [isSignedIn, setIsSignedIn] = (0, import_react.useState)(false);
  const [user, setUser] = (0, import_react.useState)(void 0);
  const signIn = async (userInfo) => {
    if (!isSignedIn && userInfo.user) {
      setIsSignedIn(true);
      setUser(userInfo.user);
    }
  };
  const signUp = async (data) => {
  };
  const signOut = () => {
    setIsSignedIn(false);
    setUser(void 0);
  };
  const getUser = () => {
    return user;
  };
  return { getUser, signIn, signUp, signOut };
};

// app/components/authentication/AuthProvider.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/authentication/AuthProvider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/authentication/AuthProvider.tsx"
  );
  import.meta.hot.lastModified = "1708356365263.776";
}
var AuthContext = (0, import_react2.createContext)({
  getUser: () => void 0,
  signIn: () => {
  },
  signUp: () => {
  },
  signOut: () => {
  }
});
var useAuthContext = () => {
  _s();
  return (0, import_react2.useContext)(AuthContext);
};
_s(useAuthContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var AuthProvider = ({
  children,
  user
}) => {
  _s2();
  const auth = useAuth();
  auth.signIn({
    user
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthContext.Provider, { value: auth, children }, void 0, false, {
    fileName: "app/components/authentication/AuthProvider.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
};
_s2(AuthProvider, "YuJWYXaKIY31b1y7U6yy3IXSxQA=", false, function() {
  return [useAuth];
});
_c = AuthProvider;
var _c;
$RefreshReg$(_c, "AuthProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  useAuthContext,
  AuthProvider
};
//# sourceMappingURL=/build/_shared/chunk-CRI6LZ3D.js.map
