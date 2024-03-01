import {
  require_activity
} from "/build/_shared/chunk-55ACYIBN.js";
import {
  require_session
} from "/build/_shared/chunk-4Q4G4ORE.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-SVACFKTP.js";
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

// app/routes/_authed.policy._log.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_activity = __toESM(require_activity(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_authed.policy._log.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_authed.policy._log.tsx"
  );
  import.meta.hot.lastModified = "1708356365268.2678";
}
var meta = () => {
  return [{
    title: "Web3Firewall"
  }, {
    name: "description",
    content: "AI Powered Compliance: Transact with Confidence"
  }];
};
var TransferActivityContext = (0, import_react2.createContext)([]);
function PolicyActivityLoader() {
  _s();
  const activity = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TransferActivityContext.Provider, { value: activity, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/_authed.policy._log.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_authed.policy._log.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(PolicyActivityLoader, "8zvyPABiFbxXB4oLRBgwtrSz/BI=", false, function() {
  return [useLoaderData];
});
_c = PolicyActivityLoader;
var _c;
$RefreshReg$(_c, "PolicyActivityLoader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  meta,
  TransferActivityContext,
  PolicyActivityLoader
};
//# sourceMappingURL=/build/_shared/chunk-7MY3H2VW.js.map
