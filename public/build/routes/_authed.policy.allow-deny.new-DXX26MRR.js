import {
  require_account
} from "/build/_shared/chunk-DI7SSFAV.js";
import {
  _t
} from "/build/_shared/chunk-2IYZNM4F.js";
import {
  it
} from "/build/_shared/chunk-FTOHGMTO.js";
import {
  tt
} from "/build/_shared/chunk-ILHJGIBO.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  XMarkIcon_default
} from "/build/_shared/chunk-JOSSDIFY.js";
import {
  EllipsisVerticalIcon_default
} from "/build/_shared/chunk-VCPG374B.js";
import {
  require_session
} from "/build/_shared/chunk-4Q4G4ORE.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  useActionData,
  useNavigate,
  useNavigation,
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

// app/routes/_authed.policy.allow-deny.new.tsx
var import_react = __toESM(require_react(), 1);
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_session = __toESM(require_session(), 1);
var import_account = __toESM(require_account(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_authed.policy.allow-deny.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_authed.policy.allow-deny.new.tsx"
  );
  import.meta.hot.lastModified = "1708356365268.411";
}
var rules = {
  Allow: "text-green-700 bg-green-50 ring-green-600/20",
  Deny: "text-red-600 bg-red-50 ring-red-500/10"
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function AddAllowDenyAddresses() {
  _s();
  const [addresses, setAddresses] = (0, import_react.useState)([]);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const submit = useSubmit();
  const data = useActionData();
  const [show, setShow] = (0, import_react.useState)(true);
  if (data && data.success) {
    if (navigation.state === "idle" && show) {
      navigate(-1);
      setShow(false);
    }
  }
  const importHandler = (event) => {
    const fileList = event.target.files;
    if (!fileList || fileList.length === 0) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const str = String(fileReader.result);
      try {
        const lines = str.split("\n");
        const originalAddresses = addresses.map((addr) => ({
          address: addr.name,
          allow: addr.rule === "Allow",
          category: addr.category
        }));
        const newAddresses = lines.reduce((all, line) => {
          let parts = [];
          if (line.includes(",")) {
            parts = line.split(",");
          } else if (line.includes("	")) {
            parts = line.split("	");
          }
          if (parts.length < 2 || all.find((addr) => addr.address === parts[0])) {
            return all;
          }
          if (parts.length === 2) {
            all.push({
              address: parts[0],
              allow: parts[1] === "allow",
              category: "None"
            });
          } else if (parts.length === 3) {
            all.push({
              address: parts[0],
              allow: parts[1] === "allow",
              category: parts[2] === "none" ? "None" : parts[2] === "fraud" ? "Fraud" : parts[2] === "laundering" ? "Laundering" : "Phishing"
            });
          }
          return all;
        }, originalAddresses);
        setAddresses(newAddresses.map((address) => {
          return {
            name: address.address,
            rule: address.allow ? "Allow" : "Deny",
            category: address.category,
            href: "#",
            id: address.address
          };
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fileReader.readAsBinaryString(fileList[0]);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tt.Root, { show, as: import_react.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", className: "relative z-10", onClose: () => navigate(-1), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0" }, void 0, false, {
      fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
      lineNumber: 140,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tt.Child, { as: import_react.Fragment, enter: "transform transition ease-in-out duration-500 sm:duration-700", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in-out duration-500 sm:duration-700", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "pointer-events-auto w-screen max-w-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full flex-col overflow-y-scroll bg-white shadow-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 px-4 py-6 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between space-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Title, { className: "text-base font-semibold leading-6 text-gray-900", children: "Configure Wallets" }, void 0, false, {
              fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
              lineNumber: 153,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Add addresses manually or select a file to import many addresses at one time." }, void 0, false, {
              fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
              lineNumber: 156,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
            lineNumber: 152,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-7 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "relative text-gray-400 hover:text-gray-500", onClick: () => navigate(-1), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -inset-2.5" }, void 0, false, {
              fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
              lineNumber: 162,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, false, {
              fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
              lineNumber: 163,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
              lineNumber: 164,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
            lineNumber: 161,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
            lineNumber: 160,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
          lineNumber: 151,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
          lineNumber: 150,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 px-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "dropzone-file", className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "mx-auto h-12 w-12 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { vectorEffect: "non-scaling-stroke", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" }, void 0, false, {
                fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                lineNumber: 178,
                columnNumber: 35
              }, this) }, void 0, false, {
                fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                lineNumber: 177,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 block text-sm text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Click to upload" }, void 0, false, {
                  fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                  lineNumber: 180,
                  columnNumber: 81
                }, this),
                " or drag and drop"
              ] }, void 0, true, {
                fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                lineNumber: 180,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500", children: "CSV or TSV" }, void 0, false, {
                fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                lineNumber: 181,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500" }, void 0, false, {
                fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                lineNumber: 182,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500", children: `Format: <address>,<allow or deny>,<fraud or phishing or laundering or none>` }, void 0, false, {
                fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                lineNumber: 183,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
              lineNumber: 176,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "dropzone-file", accept: ".csv,.tsv", type: "file", className: "sr-only", onChange: importHandler }, void 0, false, {
              fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
              lineNumber: 185,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
            lineNumber: 175,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
            lineNumber: 174,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex border-t border-gray-100 pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "+" }, void 0, false, {
              fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
              lineNumber: 190,
              columnNumber: 31
            }, this),
            " Add another address"
          ] }, void 0, true, {
            fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
            lineNumber: 189,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
            lineNumber: 188,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "divide-y divide-gray-100", children: addresses.map((address) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center justify-between gap-x-6 py-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold leading-6 text-gray-900", children: address.name }, void 0, false, {
                  fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                  lineNumber: 197,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: classNames(rules[address.rule], "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"), children: address.rule }, void 0, false, {
                  fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                  lineNumber: 198,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                lineNumber: 196,
                columnNumber: 35
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "truncate", children: address.category }, void 0, false, {
                fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                lineNumber: 203,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                lineNumber: 202,
                columnNumber: 35
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
              lineNumber: 195,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-none items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it, { as: "div", className: "relative flex-none", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Button, { className: "-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open options" }, void 0, false, {
                  fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                  lineNumber: 209,
                  columnNumber: 39
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EllipsisVerticalIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                  lineNumber: 210,
                  columnNumber: 39
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                lineNumber: 208,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tt, { as: import_react.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Items, { className: "absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({
                  active
                }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => {
                }, className: classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900"), children: [
                  "Edit",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: [
                    ", ",
                    address.name
                  ] }, void 0, true, {
                    fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                    lineNumber: 218,
                    columnNumber: 51
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                  lineNumber: 217,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                  lineNumber: 214,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({
                  active
                }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => {
                  setAddresses(addresses.filter((addr) => addr.id !== address.id));
                }, className: classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900"), children: [
                  "Delete",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: [
                    ", ",
                    address.name
                  ] }, void 0, true, {
                    fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                    lineNumber: 227,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                  lineNumber: 224,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                  lineNumber: 221,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                lineNumber: 213,
                columnNumber: 39
              }, this) }, void 0, false, {
                fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
                lineNumber: 212,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
              lineNumber: 207,
              columnNumber: 35
            }, this) }, void 0, false, {
              fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
              lineNumber: 206,
              columnNumber: 33
            }, this)
          ] }, address.id, true, {
            fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
            lineNumber: 194,
            columnNumber: 55
          }, this)) }, void 0, false, {
            fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
            lineNumber: 193,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
          lineNumber: 173,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
          lineNumber: 171,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
        lineNumber: 148,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end space-x-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50", onClick: () => navigate(-1), children: "Cancel" }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
          lineNumber: 243,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", onClick: () => submit({
          items: JSON.stringify(addresses)
        }, {
          method: "post"
        }), className: "inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", disabled: addresses.length === 0, children: "Add Wallets" }, void 0, false, {
          fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
          lineNumber: 246,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
        lineNumber: 242,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
        lineNumber: 241,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
      lineNumber: 147,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
      lineNumber: 146,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
      lineNumber: 145,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
      lineNumber: 144,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
      lineNumber: 143,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
      lineNumber: 142,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
    lineNumber: 139,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_authed.policy.allow-deny.new.tsx",
    lineNumber: 138,
    columnNumber: 10
  }, this);
}
_s(AddAllowDenyAddresses, "10i09fRH+k5HyMbVHOsYBETVvO0=", false, function() {
  return [useNavigate, useNavigation, useSubmit, useActionData];
});
_c = AddAllowDenyAddresses;
var _c;
$RefreshReg$(_c, "AddAllowDenyAddresses");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddAllowDenyAddresses as default
};
//# sourceMappingURL=/build/routes/_authed.policy.allow-deny.new-DXX26MRR.js.map
