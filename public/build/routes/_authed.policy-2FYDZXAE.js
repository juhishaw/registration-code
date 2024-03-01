import {
  BellIcon_default,
  CreditCardIcon_default,
  CubeIcon_default,
  UserCircleIcon_default,
  UsersIcon_default
} from "/build/_shared/chunk-HTCIKTYC.js";
import {
  Outlet,
  useMatch,
  useNavigate,
  useResolvedPath
} from "/build/_shared/chunk-SVACFKTP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-E2CO66ZG.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_authed.policy.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_authed.policy.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_authed.policy.tsx"
  );
  import.meta.hot.lastModified = "1708356365268.999";
}
var meta = () => {
  return [{
    title: "Web3Firewall - Policies"
  }];
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var secondaryNavigation = [{
  name: "Getting Started",
  href: "",
  icon: UserCircleIcon_default,
  current: true
}, {
  name: "Policy",
  isDivider: true
}, {
  name: "Policies",
  href: "list",
  icon: UserCircleIcon_default,
  current: false
}, {
  name: "Policy Configuration",
  isDivider: true
}, {
  name: "Transaction Actions",
  href: "transaction",
  icon: BellIcon_default,
  current: false
}, {
  name: "Policy Actions",
  href: "policy",
  icon: CubeIcon_default,
  current: false
}, {
  name: "Permission Actions",
  href: "permission",
  icon: CreditCardIcon_default,
  current: false
}, {
  name: "Policy Settings",
  isDivider: true
}, {
  name: "Allow-Deny List",
  href: "allow-deny",
  icon: UsersIcon_default,
  current: false
}, {
  name: "Activity",
  isDivider: true
}, {
  name: "Activity Log",
  href: "activity",
  icon: UsersIcon_default,
  current: false
}, {
  name: "Policy Approvals",
  href: "approvals",
  icon: UsersIcon_default,
  current: false
}];
function PolicyPage() {
  _s2();
  var _s = $RefreshSig$();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-2 lg:pt-6 lg:py-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "flex overflow-x-auto border-b border-gray-900/5 lg:block lg:w-64 lg:flex-none lg:border-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex-none px-4 sm:px-6 lg:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col", children: _s(secondaryNavigation.map(_s((item) => {
      _s();
      return !item.isDivider ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => navigate(item.href, {
        relative: "route"
      }), className: classNames(!!useMatch(useResolvedPath(item.href).pathname) ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50", "group w-full flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: classNames(!!useMatch(useResolvedPath(item.href).pathname) ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600", "h-6 w-6 shrink-0"), "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/_authed.policy.tsx",
          lineNumber: 99,
          columnNumber: 19
        }, this),
        item.name
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this) }, item.name, false, {
        fileName: "app/routes/_authed.policy.tsx",
        lineNumber: 95,
        columnNumber: 38
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold leading-6 text-gray-400", children: item.name }, void 0, false, {
        fileName: "app/routes/_authed.policy.tsx",
        lineNumber: 103,
        columnNumber: 17
      }, this) }, item.name, false, {
        fileName: "app/routes/_authed.policy.tsx",
        lineNumber: 102,
        columnNumber: 23
      }, this);
    }, "NzR6sMZ/497GwSFoL2kXyczeo9o=", false, function() {
      return [useMatch, useResolvedPath, useMatch, useResolvedPath];
    })), "NzR6sMZ/497GwSFoL2kXyczeo9o=", false, function() {
      return [useMatch, useResolvedPath, useMatch, useResolvedPath];
    }) }, void 0, false, {
      fileName: "app/routes/_authed.policy.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 sm:px-6 lg:flex-auto lg:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_authed.policy.tsx",
      lineNumber: 116,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_authed.policy.tsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_s2(PolicyPage, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c = PolicyPage;
var _c;
$RefreshReg$(_c, "PolicyPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PolicyPage as default,
  meta
};
//# sourceMappingURL=/build/routes/_authed.policy-2FYDZXAE.js.map
