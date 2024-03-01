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
import "/build/_shared/chunk-4Q4G4ORE.js";
import "/build/_shared/chunk-NFYMXIMP.js";
import {
  Link,
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

// app/routes/_authed.policy._log.approvals.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_authed.policy._log.approvals.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_authed.policy._log.approvals.tsx"
  );
  import.meta.hot.lastModified = "1708356365268.1765";
}
var meta = () => {
  return [{
    title: "Web3Firewall"
  }, {
    name: "description",
    content: "AI Powered Compliance: Transact with Confidence"
  }];
};
var getMostRecent = (events) => {
  const now = /* @__PURE__ */ new Date();
  const oneDay = 1e3 * 60 * 60 * 24;
  const dateSummary = (date) => {
    const today = /* @__PURE__ */ new Date(now.toISOString().slice(0, 10) + "T00:00:00.000Z");
    const yesterday = /* @__PURE__ */ new Date(new Date(now.getTime() - oneDay).toISOString().slice(0, 10) + "T00:00:00.000Z");
    if (date.getTime() >= today.getTime()) {
      return "Today";
    } else if (date.getTime() >= yesterday.getTime()) {
      return "Yesterday";
    }
    return date.toDateString();
  };
  return events.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()).reduce((all, item) => {
    const date = dateSummary(new Date(item.datetime));
    let match = all.findIndex((item2) => date === item2.date);
    if (match === -1) {
      match = all.length;
      all.push({
        date,
        dateTime: new Date(item.datetime).toISOString().slice(0, 10),
        transactions: []
      });
    }
    all[match].transactions.push({
      id: item.id,
      network: item.data.network,
      to: item.data.to,
      from: item.data.from,
      value: item.data.value || "0",
      gas: item.data.gasLimit || "0",
      initiator: "unknown",
      status: item.status === "Submitted" ? "Approved" : item.status === "Needs Approval" ? "Needs Approval" : "Denied",
      approvals: !item.approvals ? [] : item.approvals.given.map((approval) => ({
        approver: approval.approver,
        datetime: approval.datetime,
        action: approval.decision === "approve" ? "Approve" : "Deny"
      }))
    });
    return all;
  }, []);
};
function PolicyApprovalsPage() {
  _s();
  const {
    getUser
  } = useAuthContext();
  const user = getUser();
  const activity = (0, import_react2.useContext)(TransferActivityContext);
  const navigate = useNavigate();
  const [filter, setFilter] = (0, import_react2.useState)("");
  const filterUpdate = (e) => {
    setFilter(e.target.value);
  };
  const statuses = {
    Approved: "text-green-700 bg-green-50 ring-green-600/20",
    Denied: "text-red-600 bg-red-50 ring-red-500/10",
    "Needs Approval": "text-yellow-700 bg-yellow-50 ring-yellow-600/10"
  };
  const weiToEth = new BigDecimal("1000000000000000000");
  const filteredActivity = activity.filter((event) => event.status === "Needs Approval" && event.approvals && event.approvals.missing.approvers.find((approver) => approver === user.userId)).filter((entry) => entry.data.from.toLowerCase().includes(filter.toLowerCase()));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-base font-semibold leading-6 text-gray-900", children: "Activity Log" }, void 0, false, {
      fileName: "app/routes/_authed.policy._log.approvals.tsx",
      lineNumber: 100,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy._log.approvals.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy._log.approvals.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { onChange: filterUpdate, type: "text", name: "search-filter", id: "search-filter", className: "block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", placeholder: "Search for an event" }, void 0, false, {
      fileName: "app/routes/_authed.policy._log.approvals.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy._log.approvals.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 overflow-hidden border-t border-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0 lg:max-w-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full text-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "sr-only", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Amount" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.approvals.tsx",
          lineNumber: 112,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "hidden sm:table-cell", children: "Destination" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.approvals.tsx",
          lineNumber: 113,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "More details" }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.approvals.tsx",
          lineNumber: 114,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy._log.approvals.tsx",
        lineNumber: 111,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed.policy._log.approvals.tsx",
        lineNumber: 110,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: getMostRecent(filteredActivity).map((day) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "text-sm leading-6 text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "colgroup", colSpan: 3, className: "relative isolate py-2 font-semibold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", { dateTime: day.dateTime, children: day.date }, void 0, false, {
            fileName: "app/routes/_authed.policy._log.approvals.tsx",
            lineNumber: 121,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" }, void 0, false, {
            fileName: "app/routes/_authed.policy._log.approvals.tsx",
            lineNumber: 122,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" }, void 0, false, {
            fileName: "app/routes/_authed.policy._log.approvals.tsx",
            lineNumber: 123,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_authed.policy._log.approvals.tsx",
          lineNumber: 120,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/_authed.policy._log.approvals.tsx",
          lineNumber: 119,
          columnNumber: 21
        }, this),
        day.transactions.map((transaction) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "relative py-5 pr-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium leading-6 text-gray-900", children: [
                  new BigDecimal(transaction.value).divide(weiToEth).toString(),
                  " ",
                  transaction.network
                ] }, void 0, true, {
                  fileName: "app/routes/_authed.policy._log.approvals.tsx",
                  lineNumber: 131,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classNames(statuses[transaction.status], "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"), children: transaction.status }, void 0, false, {
                  fileName: "app/routes/_authed.policy._log.approvals.tsx",
                  lineNumber: 134,
                  columnNumber: 33
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_authed.policy._log.approvals.tsx",
                lineNumber: 130,
                columnNumber: 31
              }, this),
              transaction.gas ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-xs leading-5 text-gray-500", children: [
                "Gas: ",
                transaction.gas,
                " ",
                transaction.network
              ] }, void 0, true, {
                fileName: "app/routes/_authed.policy._log.approvals.tsx",
                lineNumber: 138,
                columnNumber: 50
              }, this) : null
            ] }, void 0, true, {
              fileName: "app/routes/_authed.policy._log.approvals.tsx",
              lineNumber: 129,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/_authed.policy._log.approvals.tsx",
              lineNumber: 128,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-0 right-full h-px w-screen bg-gray-100" }, void 0, false, {
              fileName: "app/routes/_authed.policy._log.approvals.tsx",
              lineNumber: 141,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-0 left-0 h-px w-screen bg-gray-100" }, void 0, false, {
              fileName: "app/routes/_authed.policy._log.approvals.tsx",
              lineNumber: 142,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_authed.policy._log.approvals.tsx",
            lineNumber: 127,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "hidden py-5 pr-6 sm:table-cell", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm leading-6 text-gray-900", children: transaction.to }, void 0, false, {
              fileName: "app/routes/_authed.policy._log.approvals.tsx",
              lineNumber: 145,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-xs leading-5 text-gray-500", children: [
              transaction.initiator,
              " (",
              transaction.from,
              ")"
            ] }, void 0, true, {
              fileName: "app/routes/_authed.policy._log.approvals.tsx",
              lineNumber: 146,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_authed.policy._log.approvals.tsx",
            lineNumber: 144,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-5 text-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `../activity/${transaction.id}`, relative: "path", className: "text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500", children: [
              "View",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden sm:inline", children: " transaction" }, void 0, false, {
                fileName: "app/routes/_authed.policy._log.approvals.tsx",
                lineNumber: 151,
                columnNumber: 35
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: [
                ", transaction #",
                transaction.id,
                ", ",
                transaction.to
              ] }, void 0, true, {
                fileName: "app/routes/_authed.policy._log.approvals.tsx",
                lineNumber: 152,
                columnNumber: 31
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_authed.policy._log.approvals.tsx",
              lineNumber: 150,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/_authed.policy._log.approvals.tsx",
              lineNumber: 149,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 text-xs leading-5 text-gray-500", children: transaction.status !== "Needs Approval" && transaction.approvals.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
              "Auto-",
              transaction.status
            ] }, void 0, true, {
              fileName: "app/routes/_authed.policy._log.approvals.tsx",
              lineNumber: 158,
              columnNumber: 110
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
              "Approvers: ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-900", children: transaction.approvals.length }, void 0, false, {
                fileName: "app/routes/_authed.policy._log.approvals.tsx",
                lineNumber: 158,
                columnNumber: 156
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_authed.policy._log.approvals.tsx",
              lineNumber: 158,
              columnNumber: 143
            }, this) }, void 0, false, {
              fileName: "app/routes/_authed.policy._log.approvals.tsx",
              lineNumber: 157,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_authed.policy._log.approvals.tsx",
            lineNumber: 148,
            columnNumber: 25
          }, this)
        ] }, transaction.id, true, {
          fileName: "app/routes/_authed.policy._log.approvals.tsx",
          lineNumber: 126,
          columnNumber: 58
        }, this))
      ] }, day.date, true, {
        fileName: "app/routes/_authed.policy._log.approvals.tsx",
        lineNumber: 118,
        columnNumber: 61
      }, this)) }, void 0, false, {
        fileName: "app/routes/_authed.policy._log.approvals.tsx",
        lineNumber: 117,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_authed.policy._log.approvals.tsx",
      lineNumber: 109,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy._log.approvals.tsx",
      lineNumber: 108,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy._log.approvals.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy._log.approvals.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_authed.policy._log.approvals.tsx",
    lineNumber: 97,
    columnNumber: 10
  }, this);
}
_s(PolicyApprovalsPage, "3lquNvXAUhsv22riA69quReErys=", false, function() {
  return [useAuthContext, useNavigate];
});
_c = PolicyApprovalsPage;
var _c;
$RefreshReg$(_c, "PolicyApprovalsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PolicyApprovalsPage as default,
  meta
};
//# sourceMappingURL=/build/routes/_authed.policy._log.approvals-DBMXC4UD.js.map
