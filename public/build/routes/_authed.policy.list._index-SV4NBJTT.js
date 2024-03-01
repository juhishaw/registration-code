import {
  require_policies
} from "/build/_shared/chunk-MSCT6M3L.js";
import {
  PlusSmallIcon_default
} from "/build/_shared/chunk-VCPG374B.js";
import {
  require_session
} from "/build/_shared/chunk-4Q4G4ORE.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
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

// app/routes/_authed.policy.list._index.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);

// app/components/policies/PolicyList.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/policies/PolicyList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/policies/PolicyList.tsx"
  );
  import.meta.hot.lastModified = "1708356365266.7603";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var PolicyList = ({
  policies = []
}) => {
  _s();
  const navigate = useNavigate();
  const [filter, setFilter] = (0, import_react2.useState)("");
  const filterUpdate = (e) => {
    setFilter(e.target.value);
  };
  const filteredPolicies = policies.filter((policy) => policy.name.toLowerCase().includes(filter.toLowerCase()));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex sm:items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-base font-semibold leading-6 text-gray-900", children: "Policies" }, void 0, false, {
        fileName: "app/components/policies/PolicyList.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/policies/PolicyList.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", onClick: () => {
        navigate("/policy/builder");
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusSmallIcon_default, { className: "-ml-1.5 h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        "Create New Policy"
      ] }, void 0, true, {
        fileName: "app/components/policies/PolicyList.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/policies/PolicyList.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/policies/PolicyList.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: filterUpdate, type: "text", name: "search-filter", id: "search-filter", className: "block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", placeholder: "Find a policy" }, void 0, false, {
      fileName: "app/components/policies/PolicyList.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/policies/PolicyList.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mx-4 -my-2 sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full border-separate border-spacing-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8", children: "Name" }, void 0, false, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 61,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell", children: "Latest Version" }, void 0, false, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 64,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell", children: "Category" }, void 0, false, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 67,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter", children: "Is Configured" }, void 0, false, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 70,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Edit" }, void 0, false, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 74,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 73,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/policies/PolicyList.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/policies/PolicyList.tsx",
        lineNumber: 59,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: filteredPolicies.map((policy, policyIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classNames(policyIndex !== filteredPolicies.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"), children: policy.name }, void 0, false, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classNames(policyIndex !== filteredPolicies.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex shrink-0 items-center gap-x-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:flex sm:flex-col sm:items-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm leading-6 text-gray-500", children: policy.latestVersion.version }, void 0, false, {
            fileName: "app/components/policies/PolicyList.tsx",
            lineNumber: 86,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-xs leading-5 text-gray-400", children: [
            "Created on ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", { dateTime: policy.latestVersion.createdAt.toISOString(), children: policy.latestVersion.createdAt.toDateString() }, void 0, false, {
              fileName: "app/components/policies/PolicyList.tsx",
              lineNumber: 88,
              columnNumber: 40
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/policies/PolicyList.tsx",
            lineNumber: 87,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 85,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 84,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 83,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classNames(policyIndex !== filteredPolicies.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"), children: policy.category }, void 0, false, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 93,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classNames(policyIndex !== filteredPolicies.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap px-3 py-4 text-sm text-gray-500"), children: policy.isConfigured ? "Yes" : "No" }, void 0, false, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 96,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classNames(policyIndex !== filteredPolicies.length - 1 ? "border-b border-gray-200" : "", "relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-indigo-600 hover:text-indigo-900", children: [
          "Edit",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: [
            ", ",
            policy.name
          ] }, void 0, true, {
            fileName: "app/components/policies/PolicyList.tsx",
            lineNumber: 101,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 100,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/components/policies/PolicyList.tsx",
          lineNumber: 99,
          columnNumber: 21
        }, this)
      ] }, policy.id, true, {
        fileName: "app/components/policies/PolicyList.tsx",
        lineNumber: 79,
        columnNumber: 64
      }, this)) }, void 0, false, {
        fileName: "app/components/policies/PolicyList.tsx",
        lineNumber: 78,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/policies/PolicyList.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/policies/PolicyList.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/policies/PolicyList.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/policies/PolicyList.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/policies/PolicyList.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_s(PolicyList, "RFRfQyW8+FfZ/m6Mj4Ft9QDfNJc=", false, function() {
  return [useNavigate];
});
_c = PolicyList;
var PolicyList_default = PolicyList;
var _c;
$RefreshReg$(_c, "PolicyList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_authed.policy.list._index.tsx
var import_session = __toESM(require_session(), 1);
var import_policies = __toESM(require_policies(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_authed.policy.list._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_authed.policy.list._index.tsx"
  );
  import.meta.hot.lastModified = "1708356365268.6062";
}
function PolicyListPage() {
  _s2();
  const policies = useLoaderData().items.reduce((all, cur) => {
    all.push({
      ...cur,
      latestVersion: {
        version: cur.latestVersion.version,
        createdAt: new Date(cur.latestVersion.createdAt)
      }
    });
    return all;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PolicyList_default, { policies }, void 0, false, {
    fileName: "app/routes/_authed.policy.list._index.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s2(PolicyListPage, "UGd6Srho9ZIz3WBO/oX8v/JIOKQ=", false, function() {
  return [useLoaderData];
});
_c2 = PolicyListPage;
var _c2;
$RefreshReg$(_c2, "PolicyListPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PolicyListPage as default
};
//# sourceMappingURL=/build/routes/_authed.policy.list._index-SV4NBJTT.js.map
