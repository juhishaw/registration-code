import {
  require_session
} from "/build/_shared/chunk-67IAOM7B.js";
import {
  useAuthContext
} from "/build/_shared/chunk-CRI6LZ3D.js";
import {
  classNames
} from "/build/_shared/chunk-EVNJ2YJ4.js";
import {
  TransferActivityContext
} from "/build/_shared/chunk-7MY3H2VW.js";
import {
  BigDecimal
} from "/build/_shared/chunk-S5R57KEM.js";
import "/build/_shared/chunk-55ACYIBN.js";
import {
  ChevronLeftIcon_default,
  ChevronRightIcon_default
} from "/build/_shared/chunk-VCPG374B.js";
import "/build/_shared/chunk-4Q4G4ORE.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  useActionData,
  useNavigate,
  useParams,
  useSubmit
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

// empty-module:~/utils/policies/policies.server
var require_policies = __commonJS({
  "empty-module:~/utils/policies/policies.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_authed.policy._log.activity.$activityId._index.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_react2 = __toESM(require_react(), 1);

// app/components/Chip.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Chip.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Chip.tsx"
  );
  import.meta.hot.lastModified = "1708356365260.182";
}
var colorsClasses = {
  "indigo": "bg-indigo-50 text-indigo-700 ring-indigo-700/10",
  "red": "bg-red-50 text-red-700 ring-red-600/10",
  "green": "bg-green-50 text-green-700 ring-green-600/10",
  "blue": "bg-blue-50 text-blue-700 ring-blue-700/10",
  "purple": "bg-purple-50 text-purple-700 ring-purple-700/10",
  "pink": "bg-pink-50 text-pink-700 ring-pink-700/10",
  "yellow": "bg-yellow-50 text-yellow-800 ring-yellow-600/10"
};
var closeColorClasses = {
  "indigo": "stroke-indigo-600/50 group-hover:stroke-indigo-600/75",
  "red": "stroke-red-600/50 group-hover:stroke-red-600/75",
  "green": "stroke-green-600/50 group-hover:stroke-green-600/75",
  "blue": "stroke-blue-600/50 group-hover:stroke-blue-600/75",
  "purple": "stroke-purple-600/50 group-hover:stroke-purple-600/75",
  "pink": "stroke-pink-600/50 group-hover:stroke-pink-600/75",
  "yellow": "stroke-yellow-600/50 group-hover:stroke-yellow-600/75"
};
var closeButtonClasses = {
  "indigo": "hover:bg-indigo-600/20",
  "red": "hover:bg-red-600/20",
  "green": "hover:bg-green-700/20",
  "blue": "hover:bg-blue-700/20",
  "purple": "hover:bg-purple-600/20",
  "pink": "hover:bg-pink-700/20",
  "yellow": "hover:bg-yellow-700/20"
};
var Chip = ({
  children,
  color = "indigo",
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: classNames(className || "", colorsClasses[color] || "", "inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset"), ...props, children: [
    children,
    props.onClose && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: props.onClose, type: "button", className: classNames(closeButtonClasses[color] || "", "group relative -mr-1 h-5 w-5 rounded-sm"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Remove" }, void 0, false, {
        fileName: "app/components/Chip.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 14 14", className: classNames(closeColorClasses[color] || "", "h-5 w-5"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M4 4l6 6m0-6l-6 6" }, void 0, false, {
        fileName: "app/components/Chip.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Chip.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -inset-1" }, void 0, false, {
        fileName: "app/components/Chip.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Chip.tsx",
      lineNumber: 58,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Chip.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
};
_c = Chip;
var _c;
$RefreshReg$(_c, "Chip");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_authed.policy._log.activity.$activityId._index.tsx
var import_session = __toESM(require_session(), 1);
var import_policies = __toESM(require_policies(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_authed.policy._log.activity.$activityId._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_authed.policy._log.activity.$activityId._index.tsx"
  );
  import.meta.hot.lastModified = "1708356365267.9143";
}
var colors = {
  Approved: "green",
  Denied: "red",
  Error: "red",
  "Needs Approval": "yellow"
};
function ActionPage() {
  _s();
  const {
    getUser
  } = useAuthContext();
  const navigate = useNavigate();
  const submit = useSubmit();
  const params = useParams();
  const activityContext = (0, import_react2.useContext)(TransferActivityContext).find((entry) => entry.id === params.activityId);
  const approvalState = useActionData();
  const user = getUser();
  if (!activityContext) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: "Not Found!" }, void 0, false, {
      fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
      lineNumber: 91,
      columnNumber: 12
    }, this);
  }
  const activity = {
    ...activityContext,
    ...!approvalState || approvalState.errors ? {} : approvalState
  };
  const status = {
    "Needs Approval": "Needs Approval",
    "Denied": "Denied",
    "Submitted": "Approved",
    "Error": "Error"
  }[activity.status] || "Needs Approval";
  const convertToEth = (wei) => {
    const weiToEth = new BigDecimal("1000000000000000000");
    return `${new BigDecimal(wei).divide(weiToEth).toString()} ETH`;
  };
  const onPolicyApproval = (decision) => {
    const formData = {
      decision,
      eventKind: activity.kind,
      eventId: params.activityId || ""
    };
    submit(formData, {
      method: "post"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "sm:hidden", "aria-label": "Back", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "flex items-center text-sm font-medium text-gray-500 hover:text-gray-700", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronLeftIcon_default, { className: "-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        "Back"
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "hidden sm:flex", "aria-label": "Breadcrumb", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { role: "list", className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => navigate(-1), className: "text-sm font-medium text-gray-500 hover:text-gray-700", children: "Activity Log" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 129,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 128,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRightIcon_default, { className: "h-5 w-5 flex-shrink-0 text-gray-400", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
            lineNumber: 136,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700", children: activity.id }, void 0, false, {
            fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
            lineNumber: 137,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 135,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 126,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 md:flex md:items-center md:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight", children: "Transaction Details" }, void 0, false, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 flex flex-shrink-0 md:ml-4 md:mt-0", children: activity.status === "Needs Approval" && activity.approvals && activity.approvals.missing.approvers.find((approver) => approver === user.userId) ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => onPolicyApproval("deny"), className: "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50", children: "Deny" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 153,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => onPolicyApproval("approve"), className: "ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Approve" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 156,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 152,
        columnNumber: 156
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {}, void 0, false, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 159,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6 border-t border-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dl", { className: "divide-y divide-gray-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "text-sm font-medium leading-6 text-gray-900", children: "Status" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Chip, { color: colors[status], children: status }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 164,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "text-sm font-medium leading-6 text-gray-900", children: "Source Address" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0", children: activity.data.from }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "text-sm font-medium leading-6 text-gray-900", children: "Destination Address" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 177,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0", children: activity.data.to }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 176,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "text-sm font-medium leading-6 text-gray-900", children: "Value" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 181,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0", children: convertToEth(activity.data.value) }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 182,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 180,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "text-sm font-medium leading-6 text-gray-900", children: "Max Priority Fee Per Gas" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0", children: convertToEth(activity.data.maxPriorityFeePerGas) }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 188,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "text-sm font-medium leading-6 text-gray-900", children: "Max Fee Per Gas" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 193,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0", children: convertToEth(activity.data.maxFeePerGas) }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 194,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 192,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "text-sm font-medium leading-6 text-gray-900", children: "Gas Limit" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 199,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0", children: [
          activity.data.gasLimit,
          " Units"
        ] }, void 0, true, {
          fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
          lineNumber: 200,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
        lineNumber: 198,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
      lineNumber: 163,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
      lineNumber: 162,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_authed.policy._log.activity.$activityId._index.tsx",
    lineNumber: 117,
    columnNumber: 10
  }, this);
}
_s(ActionPage, "rYu/RsT46m7meIcv2B/Wh9OhsXc=", false, function() {
  return [useAuthContext, useNavigate, useSubmit, useParams, useActionData];
});
_c2 = ActionPage;
var _c2;
$RefreshReg$(_c2, "ActionPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ActionPage as default
};
//# sourceMappingURL=/build/routes/_authed.policy._log.activity.$activityId._index-24NFIJLO.js.map
