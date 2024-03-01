import {
  ChevronRightIcon_default
} from "/build/_shared/chunk-JOSSDIFY.js";
import {
  PlusIcon_default
} from "/build/_shared/chunk-VCPG374B.js";
import {
  useNavigate
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

// app/components/policies/PolicyConfiguration.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/policies/PolicyConfiguration.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/policies/PolicyConfiguration.tsx"
  );
  import.meta.hot.lastModified = "1708356365266.6082";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var PolicyConfiguration = ({
  configuration = [],
  kind
}) => {
  _s();
  const navigate = useNavigate();
  const [filter, setFilter] = (0, import_react2.useState)("");
  const filterUpdate = (e) => {
    setFilter(e.target.value);
  };
  const filteredConfiguration = configuration.filter((config) => config.isConfigured).filter((config) => config.name.toLowerCase().includes(filter.toLowerCase()));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-base font-semibold leading-6 text-gray-900", children: [
      "Policy Configuration for ",
      kind
    ] }, void 0, true, {
      fileName: "app/components/policies/PolicyConfiguration.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/policies/PolicyConfiguration.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/policies/PolicyConfiguration.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: filterUpdate, type: "text", name: "search-filter", id: "search-filter", className: "block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", placeholder: "Find a policy" }, void 0, false, {
      fileName: "app/components/policies/PolicyConfiguration.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/policies/PolicyConfiguration.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5", children: filteredConfiguration.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "mx-auto h-12 w-12 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { vectorEffect: "non-scaling-stroke", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" }, void 0, false, {
        fileName: "app/components/policies/PolicyConfiguration.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/policies/PolicyConfiguration.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-2 text-sm font-semibold text-gray-900", children: "No Policies Configured" }, void 0, false, {
        fileName: "app/components/policies/PolicyConfiguration.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "Get started by adding a policy." }, void 0, false, {
        fileName: "app/components/policies/PolicyConfiguration.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusIcon_default, { className: "-ml-0.5 mr-1.5 h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/policies/PolicyConfiguration.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this),
        "Add Policy"
      ] }, void 0, true, {
        fileName: "app/components/policies/PolicyConfiguration.tsx",
        lineNumber: 57,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/policies/PolicyConfiguration.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/policies/PolicyConfiguration.tsx",
      lineNumber: 50,
      columnNumber: 47
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl", children: filteredConfiguration.map((config) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold leading-6 text-gray-900", children: config.name }, void 0, false, {
            fileName: "app/components/policies/PolicyConfiguration.tsx",
            lineNumber: 66,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: classNames(config.isEnabled ? "text-green-700 bg-green-50 ring-green-600/20" : "text-yellow-800 bg-yellow-50 ring-yellow-600/20", "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"), children: config.isEnabled ? "Enabled" : "Disabled" }, void 0, false, {
            fileName: "app/components/policies/PolicyConfiguration.tsx",
            lineNumber: 67,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/policies/PolicyConfiguration.tsx",
          lineNumber: 65,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "whitespace-nowrap truncate", children: config.description }, void 0, false, {
          fileName: "app/components/policies/PolicyConfiguration.tsx",
          lineNumber: 72,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/policies/PolicyConfiguration.tsx",
          lineNumber: 71,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "whitespace-nowrap", children: [
          "Created on ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", { dateTime: config.createdAt.toISOString(), children: config.createdAt.toDateString() }, void 0, false, {
            fileName: "app/components/policies/PolicyConfiguration.tsx",
            lineNumber: 78,
            columnNumber: 34
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/policies/PolicyConfiguration.tsx",
          lineNumber: 77,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/policies/PolicyConfiguration.tsx",
          lineNumber: 76,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/policies/PolicyConfiguration.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex shrink-0 items-center gap-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:flex sm:flex-col sm:items-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm leading-6 text-gray-900", children: "Priority:" }, void 0, false, {
          fileName: "app/components/policies/PolicyConfiguration.tsx",
          lineNumber: 84,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/policies/PolicyConfiguration.tsx",
          lineNumber: 83,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:flex sm:flex-col sm:items-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm leading-6 text-gray-900", children: config.priority }, void 0, false, {
          fileName: "app/components/policies/PolicyConfiguration.tsx",
          lineNumber: 87,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/policies/PolicyConfiguration.tsx",
          lineNumber: 86,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRightIcon_default, { className: "h-5 w-5 flex-none text-gray-400", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/policies/PolicyConfiguration.tsx",
          lineNumber: 89,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/policies/PolicyConfiguration.tsx",
        lineNumber: 82,
        columnNumber: 17
      }, this)
    ] }, `${config.name}::${config.version}`, true, {
      fileName: "app/components/policies/PolicyConfiguration.tsx",
      lineNumber: 63,
      columnNumber: 50
    }, this)) }, void 0, false, {
      fileName: "app/components/policies/PolicyConfiguration.tsx",
      lineNumber: 62,
      columnNumber: 20
    }, this) }, void 0, false, {
      fileName: "app/components/policies/PolicyConfiguration.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/policies/PolicyConfiguration.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s(PolicyConfiguration, "RFRfQyW8+FfZ/m6Mj4Ft9QDfNJc=", false, function() {
  return [useNavigate];
});
_c = PolicyConfiguration;
var PolicyConfiguration_default = PolicyConfiguration;
var _c;
$RefreshReg$(_c, "PolicyConfiguration");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  PolicyConfiguration_default
};
//# sourceMappingURL=/build/_shared/chunk-3QZ6HRQ4.js.map
