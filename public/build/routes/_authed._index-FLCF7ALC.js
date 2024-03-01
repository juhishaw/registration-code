import {
  useAuthContext
} from "/build/_shared/chunk-CRI6LZ3D.js";
import {
  BigDecimal
} from "/build/_shared/chunk-S5R57KEM.js";
import {
  require_activity
} from "/build/_shared/chunk-55ACYIBN.js";
import {
  it
} from "/build/_shared/chunk-FTOHGMTO.js";
import {
  tt
} from "/build/_shared/chunk-ILHJGIBO.js";
import {
  ArrowDownIcon_default,
  ArrowUpIcon_default,
  EllipsisHorizontalIcon_default
} from "/build/_shared/chunk-VCPG374B.js";
import {
  require_session
} from "/build/_shared/chunk-4Q4G4ORE.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  Link,
  useLoaderData,
  useNavigate,
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_authed._index.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_activity = __toESM(require_activity(), 1);
var import_session = __toESM(require_session(), 1);
var import_react2 = __toESM(require_react(), 1);

// app/components/dashboard/stats.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/stats.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/stats.tsx"
  );
  import.meta.hot.lastModified = "1708356365265.9893";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Stats({
  stats = []
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-5 sm:p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-base font-normal text-gray-900", children: item.name }, void 0, false, {
      fileName: "app/components/dashboard/stats.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex items-baseline justify-between md:block lg:flex", children: item.type === "Stat" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-baseline text-2xl font-semibold text-indigo-600", children: [
        item.stat,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-sm font-medium text-gray-500", children: [
          "from ",
          item.previousStat
        ] }, void 0, true, {
          fileName: "app/components/dashboard/stats.tsx",
          lineNumber: 36,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/stats.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classNames(item.changeType === "increase" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"), children: [
        item.changeType === "increase" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpIcon_default, { className: "-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/dashboard/stats.tsx",
          lineNumber: 40,
          columnNumber: 53
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowDownIcon_default, { className: "-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/dashboard/stats.tsx",
          lineNumber: 40,
          columnNumber: 164
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: [
          " ",
          item.changeType === "increase" ? "Increased" : "Decreased",
          " by "
        ] }, void 0, true, {
          fileName: "app/components/dashboard/stats.tsx",
          lineNumber: 42,
          columnNumber: 19
        }, this),
        item.change
      ] }, void 0, true, {
        fileName: "app/components/dashboard/stats.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/stats.tsx",
      lineNumber: 33,
      columnNumber: 39
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-baseline text-2xl font-semibold text-green-600", children: [
      item.total,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-sm font-medium text-gray-500", children: [
        " ",
        item.currency
      ] }, void 0, true, {
        fileName: "app/components/dashboard/stats.tsx",
        lineNumber: 48,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/stats.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/dashboard/stats.tsx",
      lineNumber: 45,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/dashboard/stats.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, item.name, true, {
    fileName: "app/components/dashboard/stats.tsx",
    lineNumber: 30,
    columnNumber: 28
  }, this)) }, void 0, false, {
    fileName: "app/components/dashboard/stats.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/dashboard/stats.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = Stats;
var _c;
$RefreshReg$(_c, "Stats");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_authed._index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_authed._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_authed._index.tsx"
  );
  import.meta.hot.lastModified = "1708356365267.5088";
}
var meta = () => {
  return [{
    title: "Web3Firewall"
  }, {
    name: "description",
    content: "AI Powered Compliance: Transact with Confidence"
  }];
};
var secondaryNavigation = [{
  name: "Last 24 hours",
  id: "24h"
}, {
  name: "Last 7 days",
  id: "7d"
}, {
  name: "Last 14 days",
  id: "14d"
}];
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
  return events.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()).slice(0, 5).reduce((all, item) => {
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
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
var weiToEth = new BigDecimal("1000000000000000000");
var getStats = (events) => {
  const now = /* @__PURE__ */ new Date();
  const oneDay = 1e3 * 60 * 60 * 24;
  const sevenDays = oneDay * 7;
  const fourteenDays = oneDay * 14;
  const past1Day = events.filter((event) => new Date(event.datetime).getTime() >= now.getTime() - oneDay);
  const prev1Day = events.filter((event) => new Date(event.datetime).getTime() >= now.getTime() - oneDay * 2 && new Date(event.datetime).getTime() <= now.getTime() - oneDay);
  const past7Days = events.filter((event) => new Date(event.datetime).getTime() >= now.getTime() - sevenDays);
  const prev7Days = events.filter((event) => new Date(event.datetime).getTime() >= now.getTime() - sevenDays * 2 && new Date(event.datetime).getTime() <= now.getTime() - sevenDays);
  const past14Days = events.filter((event) => new Date(event.datetime).getTime() >= now.getTime() - fourteenDays);
  const prev14Days = events.filter((event) => new Date(event.datetime).getTime() >= now.getTime() - fourteenDays * 2 && new Date(event.datetime).getTime() <= now.getTime() - fourteenDays);
  const past1DayBlocked = past1Day.filter((event) => event.status === "Denied");
  const prev1DayBlocked = prev1Day.filter((event) => event.status === "Denied");
  const past7DaysBlocked = past7Days.filter((event) => event.status === "Denied");
  const prev7DaysBlocked = prev7Days.filter((event) => event.status === "Denied");
  const past14DaysBlocked = past14Days.filter((event) => event.status === "Denied");
  const prev14DaysBlocked = prev14Days.filter((event) => event.status === "Denied");
  const etheriumToUsd = new BigDecimal(1539.35);
  const appendZeros = (value) => {
    const parts = value.split(".");
    if (parts.length === 1 || parts[1].length === 0) {
      return `${parts[0]}.00`;
    } else if (parts[1].length === 1) {
      return `${parts[0]}.${parts[1]}0`;
    }
    return `${parts[0]}.${parts[1].slice(0, 2)}`;
  };
  const toCurrency = (value) => {
    return "$" + appendZeros(Number(value).toLocaleString("en"));
  };
  const toPercentage = (value) => {
    const parts = value.split(".");
    if (parts.length === 1) {
      return `${value}%`;
    }
    return `${parts[0]}.${parts[1].slice(0, 2)}%`;
  };
  const percentageChange = (newValue, oldValue) => {
    return toPercentage(((newValue - oldValue) * 100 / (oldValue || 1)).toLocaleString("en"));
  };
  return [{
    type: "Total",
    name: "Losses Avoided",
    totals: {
      "24h": {
        total: toCurrency(past1Day.filter((event) => event.status === "Denied").reduce((sum, event) => {
          return sum.add(new BigDecimal(event.data.value || "0").divide(weiToEth).multiply(etheriumToUsd));
        }, new BigDecimal(0)).toString()),
        currency: "USD"
      },
      "7d": {
        total: toCurrency(past7Days.filter((event) => event.status === "Denied").reduce((sum, event) => {
          return sum.add(new BigDecimal(event.data.value || "0").divide(weiToEth).multiply(etheriumToUsd));
        }, new BigDecimal(0)).toString()),
        currency: "USD"
      },
      "14d": {
        total: toCurrency(past14Days.filter((event) => event.status === "Denied").reduce((sum, event) => {
          return sum.add(new BigDecimal(event.data.value || "0").divide(weiToEth).multiply(etheriumToUsd));
        }, new BigDecimal(0)).toString()),
        currency: "USD"
      }
    }
  }, {
    type: "Stat",
    name: "Transactions",
    stats: {
      "24h": {
        stat: past1Day.length.toString(),
        previousStat: prev1Day.length.toString(),
        change: percentageChange(past1Day.length, prev1Day.length),
        changeType: past1Day.length >= prev1Day.length ? "increase" : "decrease"
      },
      "7d": {
        stat: past7Days.length.toString(),
        previousStat: prev7Days.length.toString(),
        change: percentageChange(past7Days.length, prev7Days.length),
        changeType: past7Days.length >= prev7Days.length ? "increase" : "decrease"
      },
      "14d": {
        stat: past14Days.length.toString(),
        previousStat: prev14Days.length.toString(),
        change: percentageChange(past14Days.length, prev14Days.length),
        changeType: past14Days.length >= prev14Days.length ? "increase" : "decrease"
      }
    }
  }, {
    type: "Stat",
    name: "Blocked Transactions",
    stats: {
      "24h": {
        stat: past1DayBlocked.length.toString(),
        previousStat: prev1DayBlocked.length.toString(),
        change: percentageChange(past1DayBlocked.length, prev1DayBlocked.length),
        changeType: past1DayBlocked.length >= prev1DayBlocked.length ? "increase" : "decrease"
      },
      "7d": {
        stat: past7DaysBlocked.length.toString(),
        previousStat: prev7DaysBlocked.length.toString(),
        change: percentageChange(past7DaysBlocked.length, prev7DaysBlocked.length),
        changeType: past7DaysBlocked.length >= prev7DaysBlocked.length ? "increase" : "decrease"
      },
      "14d": {
        stat: past14DaysBlocked.length.toString(),
        previousStat: prev14DaysBlocked.length.toString(),
        change: percentageChange(past14DaysBlocked.length, prev14DaysBlocked.length),
        changeType: past14DaysBlocked.length >= prev14DaysBlocked.length ? "increase" : "decrease"
      }
    }
  }];
};
var statuses = {
  Approved: "text-green-700 bg-green-50 ring-green-600/20",
  Denied: "text-red-600 bg-red-50 ring-red-500/10",
  "Needs Approval": "text-yellow-700 bg-yellow-50 ring-yellow-600/10"
};
function Index() {
  _s();
  const activity = useLoaderData();
  const navigate = useNavigate();
  const {
    getUser
  } = useAuthContext();
  const user = getUser();
  const submit = useSubmit();
  const [period, setPeriod] = (0, import_react2.useState)("24h");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "pb-4 pt-6 sm:pb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-base font-semibold leading-7 text-gray-900", children: "Asset Protection" }, void 0, false, {
          fileName: "app/routes/_authed._index.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7", children: secondaryNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => setPeriod(item.id), className: period === item.id ? "text-indigo-600" : "text-gray-700", children: item.name }, item.id, false, {
          fileName: "app/routes/_authed._index.tsx",
          lineNumber: 237,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/_authed._index.tsx",
          lineNumber: 236,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed._index.tsx",
        lineNumber: 234,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed._index.tsx",
        lineNumber: 233,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Stats, { stats: getStats(activity).reduce((all, cur) => {
        if (cur.type === "Total") {
          all.push({
            type: "Total",
            name: cur.name,
            total: cur.totals[period].total,
            currency: cur.totals[period].currency
          });
        } else {
          all.push({
            type: "Stat",
            name: cur.name,
            ...cur.stats[period]
          });
        }
        return all;
      }, []) }, void 0, false, {
        fileName: "app/routes/_authed._index.tsx",
        lineNumber: 244,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_authed._index.tsx",
      lineNumber: 231,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-16 py-16 xl:space-y-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-gray-900", children: "Recent activity" }, void 0, false, {
            fileName: "app/routes/_authed._index.tsx",
            lineNumber: 267,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => navigate("policy/activity", {
            relative: "path"
          }), className: "text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500", children: [
            "View all",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: ", activity" }, void 0, false, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 271,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_authed._index.tsx",
            lineNumber: 268,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_authed._index.tsx",
          lineNumber: 266,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6 overflow-hidden border-t border-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0 lg:max-w-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("table", { className: "w-full text-left", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("thead", { className: "sr-only", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: "Amount" }, void 0, false, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 280,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "hidden sm:table-cell", children: "Destination" }, void 0, false, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 281,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: "More details" }, void 0, false, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 282,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_authed._index.tsx",
            lineNumber: 279,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/_authed._index.tsx",
            lineNumber: 278,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tbody", { children: getMostRecent(activity).map((day) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { className: "text-sm leading-6 text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { scope: "colgroup", colSpan: 3, className: "relative isolate py-2 font-semibold", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("time", { dateTime: day.dateTime, children: day.date }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 289,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 290,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 291,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 288,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 287,
              columnNumber: 25
            }, this),
            day.transactions.map((transaction) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "relative py-5 pr-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-x-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-auto", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-start gap-x-3", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-sm font-medium leading-6 text-gray-900", children: [
                      new BigDecimal(transaction.value).divide(weiToEth).toString(),
                      " ",
                      transaction.network
                    ] }, void 0, true, {
                      fileName: "app/routes/_authed._index.tsx",
                      lineNumber: 299,
                      columnNumber: 37
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: classNames2(statuses[transaction.status], "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"), children: transaction.status }, void 0, false, {
                      fileName: "app/routes/_authed._index.tsx",
                      lineNumber: 302,
                      columnNumber: 37
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/_authed._index.tsx",
                    lineNumber: 298,
                    columnNumber: 35
                  }, this),
                  transaction.gas ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-1 text-xs leading-5 text-gray-500", children: [
                    "Gas: ",
                    transaction.gas,
                    " Units"
                  ] }, void 0, true, {
                    fileName: "app/routes/_authed._index.tsx",
                    lineNumber: 306,
                    columnNumber: 54
                  }, this) : null
                ] }, void 0, true, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 297,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 296,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute bottom-0 right-full h-px w-screen bg-gray-100" }, void 0, false, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 309,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute bottom-0 left-0 h-px w-screen bg-gray-100" }, void 0, false, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 310,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 295,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "hidden py-5 pr-6 sm:table-cell", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-sm leading-6 text-gray-900", children: transaction.to }, void 0, false, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 313,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-1 text-xs leading-5 text-gray-500", children: [
                  transaction.initiator,
                  " (",
                  transaction.from,
                  ")"
                ] }, void 0, true, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 314,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 312,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "py-5 text-right", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => navigate(`policy/activity/${transaction.id}`, {
                  relative: "path"
                }), className: "text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500", children: [
                  "View",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "hidden sm:inline", children: " transaction" }, void 0, false, {
                    fileName: "app/routes/_authed._index.tsx",
                    lineNumber: 321,
                    columnNumber: 39
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: [
                    ", transaction #",
                    transaction.id,
                    ", ",
                    transaction.to
                  ] }, void 0, true, {
                    fileName: "app/routes/_authed._index.tsx",
                    lineNumber: 322,
                    columnNumber: 35
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 318,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 317,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-1 text-xs leading-5 text-gray-500", children: transaction.status !== "Needs Approval" && transaction.approvals.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
                  "Auto-",
                  transaction.status
                ] }, void 0, true, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 328,
                  columnNumber: 114
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
                  "Approvers: ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-gray-900", children: transaction.approvals.length }, void 0, false, {
                    fileName: "app/routes/_authed._index.tsx",
                    lineNumber: 328,
                    columnNumber: 160
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 328,
                  columnNumber: 147
                }, this) }, void 0, false, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 327,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 316,
                columnNumber: 29
              }, this)
            ] }, transaction.id, true, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 294,
              columnNumber: 62
            }, this))
          ] }, day.date, true, {
            fileName: "app/routes/_authed._index.tsx",
            lineNumber: 286,
            columnNumber: 57
          }, this)) }, void 0, false, {
            fileName: "app/routes/_authed._index.tsx",
            lineNumber: 285,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_authed._index.tsx",
          lineNumber: 277,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_authed._index.tsx",
          lineNumber: 276,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_authed._index.tsx",
          lineNumber: 275,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_authed._index.tsx",
          lineNumber: 274,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed._index.tsx",
        lineNumber: 265,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0 lg:max-w-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-gray-900", children: "Actions Needing Approval" }, void 0, false, {
            fileName: "app/routes/_authed._index.tsx",
            lineNumber: 345,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "policy/approvals", relative: "path", className: "text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500", children: [
            "View all",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: ", clients" }, void 0, false, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 347,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_authed._index.tsx",
            lineNumber: 346,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_authed._index.tsx",
          lineNumber: 344,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8", children: activity.filter((event) => event.status === "Needs Approval" && event.approvals && event.approvals.missing.approvers.find((approver) => approver === user.userId)).map((event, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "overflow-hidden rounded-xl border border-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10", enableBackground: "new 0 0 1920 1920", viewBox: "0 0 1920 1920", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m959.8 730.9-539.8 245.4 539.8 319.1 539.9-319.1z", opacity: ".6" }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 354,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m420.2 976.3 539.8 319.1v-564.5-650.3z", opacity: ".45" }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 355,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m960 80.6v650.3 564.5l539.8-319.1z", opacity: ".8" }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 356,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m420 1078.7 539.8 760.7v-441.8z", opacity: ".45" }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 357,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m959.8 1397.6v441.8l540.2-760.7z", opacity: ".8" }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 358,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 353,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-sm font-medium leading-6 text-gray-900", children: event.kind === "transaction:transfer" ? `Transfer to ${event.data.to.slice(2, 7)} (${event.data.network})` : "Unknown event" }, void 0, false, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 360,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it, { as: "div", className: "relative ml-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Button, { className: "-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open options" }, void 0, false, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 363,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EllipsisHorizontalIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 364,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 362,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(tt, { as: import_react2.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Items, { className: "absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Item, { children: ({
                  active
                }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `policy/activity/${event.id}`, relative: "path", className: classNames2(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900"), children: [
                  "View",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: [
                    ", ",
                    event.id
                  ] }, void 0, true, {
                    fileName: "app/routes/_authed._index.tsx",
                    lineNumber: 372,
                    columnNumber: 37
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 371,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 368,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Item, { children: ({
                  active
                }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => {
                  const formData = {
                    decision: "deny",
                    eventKind: event.kind,
                    eventId: event.id || ""
                  };
                  submit(formData, {
                    method: "post",
                    action: `/policy/activity/${event.id}`
                  });
                }, className: classNames2(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900 w-full text-left"), children: [
                  "Deny",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: [
                    ", ",
                    event.id
                  ] }, void 0, true, {
                    fileName: "app/routes/_authed._index.tsx",
                    lineNumber: 389,
                    columnNumber: 37
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 378,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/_authed._index.tsx",
                  lineNumber: 375,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 367,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 366,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 361,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_authed._index.tsx",
            lineNumber: 352,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dl", { className: "-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between gap-x-4 py-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "text-gray-500", children: "Date" }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 398,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("time", { dateTime: event.datetime, children: new Date(event.datetime).toLocaleDateString() }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 400,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 399,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 397,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between gap-x-4 py-3", children: event.data.amount !== void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "text-gray-500", children: "Amount" }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 405,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "flex items-start gap-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-medium text-gray-900", children: event.data.amount }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 407,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 406,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 404,
              columnNumber: 58
            }, this) : event.data.policyName !== void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "text-gray-500", children: "Policy" }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 410,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "flex items-start gap-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-medium text-gray-900", children: event.data.policyName }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 412,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 411,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 409,
              columnNumber: 67
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {}, void 0, false, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 414,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 403,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between gap-x-4 py-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "text-gray-500", children: "Missing Approvals" }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 418,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "flex items-start gap-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: classNames2(statuses["Needs Approval"], "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"), children: event.approvals?.missing.minimumNeeded }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 420,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 419,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 417,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between gap-x-4 py-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "text-gray-500", children: "Already Approved" }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 426,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "flex items-start gap-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: classNames2(statuses["Approved"], "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"), children: event.approvals?.given.length }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 428,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/_authed._index.tsx",
                lineNumber: 427,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_authed._index.tsx",
              lineNumber: 425,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_authed._index.tsx",
            lineNumber: 396,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "app/routes/_authed._index.tsx",
          lineNumber: 351,
          columnNumber: 197
        }, this)) }, void 0, false, {
          fileName: "app/routes/_authed._index.tsx",
          lineNumber: 350,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed._index.tsx",
        lineNumber: 343,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed._index.tsx",
        lineNumber: 342,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_authed._index.tsx",
      lineNumber: 263,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_authed._index.tsx",
    lineNumber: 230,
    columnNumber: 10
  }, this);
}
_s(Index, "ihgY0fJJpG0qMuaZQTWSudqnn/s=", false, function() {
  return [useLoaderData, useNavigate, useAuthContext, useSubmit];
});
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_authed._index-FLCF7ALC.js.map
