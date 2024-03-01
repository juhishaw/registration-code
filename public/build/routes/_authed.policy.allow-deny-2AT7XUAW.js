import {
  require_account
} from "/build/_shared/chunk-DI7SSFAV.js";
import {
  require_session
} from "/build/_shared/chunk-4Q4G4ORE.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  Outlet,
  useLoaderData,
  useNavigate
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_authed.policy.allow-deny.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_session = __toESM(require_session(), 1);
var import_account = __toESM(require_account(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_authed.policy.allow-deny.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_authed.policy.allow-deny.tsx"
  );
  import.meta.hot.lastModified = "1708356365268.503";
}
var meta = () => {
  return [{
    title: "Web3Firewall - Allow Deny List"
  }];
};
function AllowDenyListPage() {
  _s();
  const {
    addresses
  } = useLoaderData();
  const [filter, setFilter] = (0, import_react2.useState)("");
  const navigate = useNavigate();
  const filterUpdate = (e) => {
    setFilter(e.target.value);
  };
  const filteredPolicies = addresses.filter((address) => {
    const foundMatch = {
      allow: void 0,
      deny: void 0,
      category: void 0,
      notCategory: void 0,
      address: void 0
    };
    const lowerFilter = filter.toLowerCase();
    const filterParts = lowerFilter.split(" ");
    filterParts.forEach((part) => {
      if (part === "rule:".substring(0, part.length) || part.length > 2 && part === "category:".substring(0, part.length)) {
      } else if (part.startsWith("rule:a")) {
        foundMatch.allow = address.allowed;
      } else if (part.startsWith("rule:d")) {
        foundMatch.deny = !address.allowed;
      } else if (part.startsWith("category:")) {
        foundMatch.category = foundMatch.category || !!address.category.toLowerCase().startsWith(part.substring("category:".length));
      } else if (part.startsWith("-category:")) {
        foundMatch.notCategory = foundMatch.notCategory || !!address.category.toLowerCase().startsWith(part.substring("-category:".length));
      } else {
        foundMatch.address = foundMatch.address || address.address.toLowerCase().includes(part);
      }
    });
    return (foundMatch.allow === true || foundMatch.deny === true || foundMatch.allow === void 0 && foundMatch.deny === void 0) && foundMatch.address !== false && foundMatch.category !== false && foundMatch.notCategory !== true;
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex sm:items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-base font-semibold leading-6 text-gray-900", children: "Allowed and Denied Addresses" }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "The list of addresses that are configured for the account." }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy.allow-deny.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => navigate("new", {
        relative: "route"
      }), className: "block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Add New Address" }, void 0, false, {
        fileName: "app/routes/_authed.policy.allow-deny.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed.policy.allow-deny.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_authed.policy.allow-deny.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: filterUpdate, type: "text", name: "search-filter", id: "search-filter", className: "block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", placeholder: "Find an address" }, void 0, false, {
      fileName: "app/routes/_authed.policy.allow-deny.tsx",
      lineNumber: 116,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy.allow-deny.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0", children: "Address" }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.tsx",
          lineNumber: 124,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900", children: "Rule" }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.tsx",
          lineNumber: 127,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900", children: "Category" }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.tsx",
          lineNumber: 130,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "relative py-3.5 pl-3 pr-4 sm:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Remove" }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.tsx",
          lineNumber: 134,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.tsx",
          lineNumber: 133,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy.allow-deny.tsx",
        lineNumber: 123,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed.policy.allow-deny.tsx",
        lineNumber: 122,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: filteredPolicies.map((address, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0", children: address.address }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.tsx",
          lineNumber: 140,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: address.allowed ? "Allow" : "Deny" }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.tsx",
          lineNumber: 143,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: address.category }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.tsx",
          lineNumber: 144,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-indigo-600 hover:text-indigo-900", children: [
          "Remove",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: [
            ", ",
            address.address
          ] }, void 0, true, {
            fileName: "app/routes/_authed.policy.allow-deny.tsx",
            lineNumber: 147,
            columnNumber: 31
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_authed.policy.allow-deny.tsx",
          lineNumber: 146,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.tsx",
          lineNumber: 145,
          columnNumber: 21
        }, this)
      ] }, index, true, {
        fileName: "app/routes/_authed.policy.allow-deny.tsx",
        lineNumber: 139,
        columnNumber: 59
      }, this)) }, void 0, false, {
        fileName: "app/routes/_authed.policy.allow-deny.tsx",
        lineNumber: 138,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_authed.policy.allow-deny.tsx",
      lineNumber: 121,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy.allow-deny.tsx",
      lineNumber: 120,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy.allow-deny.tsx",
      lineNumber: 119,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy.allow-deny.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_authed.policy.allow-deny.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_authed.policy.allow-deny.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_s(AllowDenyListPage, "uVkaTzmTWFJw9tk5NalYQ8KpLek=", false, function() {
  return [useLoaderData, useNavigate];
});
_c = AllowDenyListPage;
var _c;
$RefreshReg$(_c, "AllowDenyListPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AllowDenyListPage as default,
  meta
};
//# sourceMappingURL=/build/routes/_authed.policy.allow-deny-2AT7XUAW.js.map
