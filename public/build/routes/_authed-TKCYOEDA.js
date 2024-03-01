import {
  Bars3Icon_default,
  BellIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-HTCIKTYC.js";
import {
  useAuthContext
} from "/build/_shared/chunk-CRI6LZ3D.js";
import {
  it
} from "/build/_shared/chunk-FTOHGMTO.js";
import {
  C,
  D2 as D,
  I,
  S,
  T2 as T,
  X,
  c,
  d,
  e,
  o2 as o,
  o3 as o2,
  r,
  s4 as s,
  tt,
  u,
  y2 as y
} from "/build/_shared/chunk-ILHJGIBO.js";
import {
  MagnifyingGlassIcon_default
} from "/build/_shared/chunk-VCPG374B.js";
import {
  require_session
} from "/build/_shared/chunk-4Q4G4ORE.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_authed.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);

// app/components/FullLayout.tsx
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react = __toESM(require_react(), 1);
var t;
var a = (t = import_react.default.startTransition) != null ? t : function(i) {
  i();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var q = ((o3) => (o3[o3.Open = 0] = "Open", o3[o3.Closed = 1] = "Closed", o3))(q || {});
var z = ((t2) => (t2[t2.ToggleDisclosure = 0] = "ToggleDisclosure", t2[t2.CloseDisclosure = 1] = "CloseDisclosure", t2[t2.SetButtonId = 2] = "SetButtonId", t2[t2.SetPanelId = 3] = "SetPanelId", t2[t2.LinkPanel = 4] = "LinkPanel", t2[t2.UnlinkPanel = 5] = "UnlinkPanel", t2))(z || {});
var Q = { [0]: (e2) => ({ ...e2, disclosureState: u(e2.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e2) => e2.disclosureState === 1 ? e2 : { ...e2, disclosureState: 1 }, [4](e2) {
  return e2.linkedPanel === true ? e2 : { ...e2, linkedPanel: true };
}, [5](e2) {
  return e2.linkedPanel === false ? e2 : { ...e2, linkedPanel: false };
}, [2](e2, n) {
  return e2.buttonId === n.buttonId ? e2 : { ...e2, buttonId: n.buttonId };
}, [3](e2, n) {
  return e2.panelId === n.panelId ? e2 : { ...e2, panelId: n.panelId };
} };
var k = (0, import_react2.createContext)(null);
k.displayName = "DisclosureContext";
function M(e2) {
  let n = (0, import_react2.useContext)(k);
  if (n === null) {
    let o3 = new Error(`<${e2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o3, M), o3;
  }
  return n;
}
var v = (0, import_react2.createContext)(null);
v.displayName = "DisclosureAPIContext";
function w(e2) {
  let n = (0, import_react2.useContext)(v);
  if (n === null) {
    let o3 = new Error(`<${e2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o3, w), o3;
  }
  return n;
}
var H = (0, import_react2.createContext)(null);
H.displayName = "DisclosurePanelContext";
function V() {
  return (0, import_react2.useContext)(H);
}
function Y(e2, n) {
  return u(n.type, Q, e2, n);
}
var Z = import_react2.Fragment;
function ee(e2, n) {
  let { defaultOpen: o3 = false, ...u2 } = e2, T2 = (0, import_react2.useRef)(null), l = y(n, T((a2) => {
    T2.current = a2;
  }, e2.as === void 0 || e2.as === import_react2.Fragment)), t2 = (0, import_react2.useRef)(null), f = (0, import_react2.useRef)(null), s2 = (0, import_react2.useReducer)(Y, { disclosureState: o3 ? 0 : 1, linkedPanel: false, buttonRef: f, panelRef: t2, buttonId: null, panelId: null }), [{ disclosureState: i, buttonId: c2 }, D2] = s2, d2 = o((a2) => {
    D2({ type: 1 });
    let r3 = e(T2);
    if (!r3 || !c2)
      return;
    let p = (() => a2 ? a2 instanceof HTMLElement ? a2 : a2.current instanceof HTMLElement ? a2.current : r3.getElementById(c2) : r3.getElementById(c2))();
    p == null || p.focus();
  }), P = (0, import_react2.useMemo)(() => ({ close: d2 }), [d2]), b = (0, import_react2.useMemo)(() => ({ open: i === 0, close: d2 }), [i, d2]), y2 = { ref: l };
  return import_react2.default.createElement(k.Provider, { value: s2 }, import_react2.default.createElement(v.Provider, { value: P }, import_react2.default.createElement(c, { value: u(i, { [0]: d.Open, [1]: d.Closed }) }, X({ ourProps: y2, theirProps: u2, slot: b, defaultTag: Z, name: "Disclosure" }))));
}
var te = "button";
function ne(e2, n) {
  let o3 = I(), { id: u2 = `headlessui-disclosure-button-${o3}`, ...T2 } = e2, [l, t2] = M("Disclosure.Button"), f = V(), s2 = f === null ? false : f === l.panelId, i = (0, import_react2.useRef)(null), c2 = y(i, n, s2 ? null : l.buttonRef);
  (0, import_react2.useEffect)(() => {
    if (!s2)
      return t2({ type: 2, buttonId: u2 }), () => {
        t2({ type: 2, buttonId: null });
      };
  }, [u2, t2, s2]);
  let D2 = o((r3) => {
    var p;
    if (s2) {
      if (l.disclosureState === 1)
        return;
      switch (r3.key) {
        case o2.Space:
        case o2.Enter:
          r3.preventDefault(), r3.stopPropagation(), t2({ type: 0 }), (p = l.buttonRef.current) == null || p.focus();
          break;
      }
    } else
      switch (r3.key) {
        case o2.Space:
        case o2.Enter:
          r3.preventDefault(), r3.stopPropagation(), t2({ type: 0 });
          break;
      }
  }), d2 = o((r3) => {
    switch (r3.key) {
      case o2.Space:
        r3.preventDefault();
        break;
    }
  }), P = o((r3) => {
    var p;
    r(r3.currentTarget) || e2.disabled || (s2 ? (t2({ type: 0 }), (p = l.buttonRef.current) == null || p.focus()) : t2({ type: 0 }));
  }), b = (0, import_react2.useMemo)(() => ({ open: l.disclosureState === 0 }), [l]), y2 = s(e2, i), a2 = s2 ? { ref: c2, type: y2, onKeyDown: D2, onClick: P } : { ref: c2, id: u2, type: y2, "aria-expanded": l.disclosureState === 0, "aria-controls": l.linkedPanel ? l.panelId : void 0, onKeyDown: D2, onKeyUp: d2, onClick: P };
  return X({ ourProps: a2, theirProps: T2, slot: b, defaultTag: te, name: "Disclosure.Button" });
}
var le = "div";
var oe = S.RenderStrategy | S.Static;
function re(e2, n) {
  let o3 = I(), { id: u2 = `headlessui-disclosure-panel-${o3}`, ...T2 } = e2, [l, t2] = M("Disclosure.Panel"), { close: f } = w("Disclosure.Panel"), s2 = y(n, l.panelRef, (P) => {
    a(() => t2({ type: P ? 4 : 5 }));
  });
  (0, import_react2.useEffect)(() => (t2({ type: 3, panelId: u2 }), () => {
    t2({ type: 3, panelId: null });
  }), [u2, t2]);
  let i = C(), c2 = (() => i !== null ? (i & d.Open) === d.Open : l.disclosureState === 0)(), D2 = (0, import_react2.useMemo)(() => ({ open: l.disclosureState === 0, close: f }), [l, f]), d2 = { ref: s2, id: u2 };
  return import_react2.default.createElement(H.Provider, { value: l.panelId }, X({ ourProps: d2, theirProps: T2, slot: D2, defaultTag: le, features: oe, visible: c2, name: "Disclosure.Panel" }));
}
var se = D(ee);
var ue = D(ne);
var ie = D(re);
var ve = Object.assign(se, { Button: ue, Panel: ie });

// app/components/logos/KnotLogo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/logos/KnotLogo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/logos/KnotLogo.tsx"
  );
  import.meta.hot.lastModified = "1708356365266.339";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var KnotLogo = ({
  className = "block h-10 w-10",
  color = "dark"
} = {}) => {
  const textColor = color === "dark" ? `text-gray-100` : `text-indigo-600`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classNames(className || "", "flex align-middle items-center justify-center"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "block h-8 w-auto", src: "/images/logo.png", alt: "Web3Firewall" }, void 0, false, {
      fileName: "app/components/logos/KnotLogo.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: classNames(`pl-2 inline-block font-['monospace'] uppercase font-bold`, textColor), children: "Web3Firewall" }, void 0, false, {
      fileName: "app/components/logos/KnotLogo.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/logos/KnotLogo.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c = KnotLogo;
var KnotLogo_default = KnotLogo;
var _c;
$RefreshReg$(_c, "KnotLogo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/FullLayout.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/FullLayout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/FullLayout.tsx"
  );
  import.meta.hot.lastModified = "1708356365260.4377";
}
var navigation = [{
  name: "Dashboard",
  href: "/"
}, {
  name: "Policies",
  href: "/policy"
}];
var userNavigation = [{
  name: "Sign out",
  href: "#"
}];
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function FullLayout({
  children
}) {
  _s3();
  const {
    getUser
  } = useAuthContext();
  const user = getUser();
  const navigate = useNavigate();
  const background = "bg-gradient-to-r from-indigo-950 to-blue-950";
  const buttonBackground = "text-gray-100 bg-gradient-to-r from-indigo-800 to-blue-800  bg-opacity-75";
  const buttonHoveredBackground = "text-gray-100 hover:bg-gradient-to-r from-indigo-800 to-blue-800 hover:bg-opacity-75";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: classNames2(background, "pb-32"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ve, { as: "nav", className: classNames2(background, "border-b border-gray-300 border-opacity-25 lg:border-none"), children: ({
        open
      }) => {
        var _s = $RefreshSig$(), _s2 = $RefreshSig$();
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-7xl px-2 sm:px-4 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex h-16 items-center justify-between lg:border-b lg:border-gray-600 lg:border-opacity-25", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center px-2 lg:px-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(KnotLogo_default, { className: "h-auto w-40" }, void 0, false, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 68,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:ml-10 lg:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-4", children: _s(navigation.map(_s((item) => {
                _s();
                return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: classNames2(useMatch(useResolvedPath(item.href).pathname) ? buttonBackground : buttonHoveredBackground, "rounded-md py-2 px-3 text-sm font-medium"), "aria-current": useMatch(useResolvedPath(item.href).pathname) ? "page" : void 0, children: item.name }, item.name, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 73,
                  columnNumber: 34
                }, this);
              }, "NzR6sMZ/497GwSFoL2kXyczeo9o=", false, function() {
                return [useMatch, useResolvedPath, useMatch, useResolvedPath];
              })), "NzR6sMZ/497GwSFoL2kXyczeo9o=", false, function() {
                return [useMatch, useResolvedPath, useMatch, useResolvedPath];
              }) }, void 0, false, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 70,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 69,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/FullLayout.tsx",
              lineNumber: 67,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-lg lg:max-w-xs", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "search", className: "sr-only", children: "Search" }, void 0, false, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 86,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative text-gray-600 focus-within:text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MagnifyingGlassIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 91,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 90,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: "search", className: "block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-cyan-950 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-950 sm:text-sm sm:leading-6", placeholder: "Search", type: "search", name: "search" }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 93,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 89,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/FullLayout.tsx",
              lineNumber: 85,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/FullLayout.tsx",
              lineNumber: 84,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ve.Button, { className: classNames2(background, buttonHoveredBackground, "relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-950"), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "absolute -inset-0.5" }, void 0, false, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 100,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 101,
                columnNumber: 25
              }, this),
              open ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XMarkIcon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 102,
                columnNumber: 33
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Bars3Icon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 102,
                columnNumber: 94
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/FullLayout.tsx",
              lineNumber: 99,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/FullLayout.tsx",
              lineNumber: 97,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:ml-4 lg:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: classNames2(background, "relative flex-shrink-0 rounded-full p-1 text-gray-200 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-950"), children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "absolute -inset-1.5" }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 108,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 109,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BellIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 110,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 107,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it, { as: "div", className: "relative ml-3 flex-shrink-0", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Button, { className: classNames2(background, "relative flex rounded-full text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-950"), children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "absolute -inset-1.5" }, void 0, false, {
                    fileName: "app/components/FullLayout.tsx",
                    lineNumber: 117,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, false, {
                    fileName: "app/components/FullLayout.tsx",
                    lineNumber: 118,
                    columnNumber: 31
                  }, this),
                  user.profilePicture ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "h-8 w-8 rounded-full", src: user.profilePicture, alt: "" }, void 0, false, {
                    fileName: "app/components/FullLayout.tsx",
                    lineNumber: 119,
                    columnNumber: 54
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs font-medium leading-none text-gray-100", children: "CN" }, void 0, false, {
                    fileName: "app/components/FullLayout.tsx",
                    lineNumber: 120,
                    columnNumber: 35
                  }, this) }, void 0, false, {
                    fileName: "app/components/FullLayout.tsx",
                    lineNumber: 119,
                    columnNumber: 130
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 116,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 115,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(tt, { as: import_react3.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Items, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: userNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Item, { children: ({
                  active
                }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => navigate("/logout"), className: classNames2(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"), children: item.name }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 129,
                  columnNumber: 37
                }, this) }, item.name, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 126,
                  columnNumber: 59
                }, this)) }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 125,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 124,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 114,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/FullLayout.tsx",
              lineNumber: 106,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/FullLayout.tsx",
              lineNumber: 105,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/FullLayout.tsx",
            lineNumber: 66,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/FullLayout.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ve.Panel, { className: "lg:hidden", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1 px-2 pb-3 pt-2", children: _s2(navigation.map(_s2((item) => {
              _s2();
              return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ve.Button, { as: "a", href: item.href, className: classNames2(useMatch(useResolvedPath(item.href).pathname) ? "bg-gray-700 text-white" : "text-white hover:bg-gray-700 hover:bg-opacity-75", "block rounded-md py-2 px-3 text-base font-medium"), "aria-current": useMatch(useResolvedPath(item.href).pathname) ? "page" : void 0, children: item.name }, item.name, false, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 145,
                columnNumber: 28
              }, this);
            }, "NzR6sMZ/497GwSFoL2kXyczeo9o=", false, function() {
              return [useMatch, useResolvedPath, useMatch, useResolvedPath];
            })), "NzR6sMZ/497GwSFoL2kXyczeo9o=", false, function() {
              return [useMatch, useResolvedPath, useMatch, useResolvedPath];
            }) }, void 0, false, {
              fileName: "app/components/FullLayout.tsx",
              lineNumber: 142,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-t border-gray-700 pb-3 pt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center px-5", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-shrink-0", children: user.profilePicture ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "h-10 w-10 rounded-full", src: user.profilePicture, alt: "" }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 157,
                  columnNumber: 48
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs font-medium leading-none text-gray-100", children: "CN" }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 158,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 157,
                  columnNumber: 126
                }, this) }, void 0, false, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 156,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-base font-medium text-white", children: user.fullName }, void 0, false, {
                    fileName: "app/components/FullLayout.tsx",
                    lineNumber: 162,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-sm font-medium text-gray-300", children: user.username }, void 0, false, {
                    fileName: "app/components/FullLayout.tsx",
                    lineNumber: 163,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 161,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: classNames2(background, "relative ml-auto flex-shrink-0 rounded-full p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-950"), children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "absolute -inset-1.5" }, void 0, false, {
                    fileName: "app/components/FullLayout.tsx",
                    lineNumber: 166,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, false, {
                    fileName: "app/components/FullLayout.tsx",
                    lineNumber: 167,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BellIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/components/FullLayout.tsx",
                    lineNumber: 168,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/FullLayout.tsx",
                  lineNumber: 165,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 155,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-3 space-y-1 px-2", children: userNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ve.Button, { as: "a", href: item.href, className: classNames2(buttonHoveredBackground, "block rounded-md px-3 py-2 text-base font-medium"), children: item.name }, item.name, false, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 172,
                columnNumber: 51
              }, this)) }, void 0, false, {
                fileName: "app/components/FullLayout.tsx",
                lineNumber: 171,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/FullLayout.tsx",
              lineNumber: 154,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/FullLayout.tsx",
            lineNumber: 141,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/FullLayout.tsx",
          lineNumber: 64,
          columnNumber: 20
        }, this);
      } }, void 0, false, {
        fileName: "app/components/FullLayout.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "py-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" }, void 0, false, {
        fileName: "app/components/FullLayout.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/FullLayout.tsx",
        lineNumber: 181,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/FullLayout.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "-mt-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-lg bg-white px-5 py-6 shadow sm:px-6", children }, void 0, false, {
      fileName: "app/components/FullLayout.tsx",
      lineNumber: 189,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/FullLayout.tsx",
      lineNumber: 188,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/FullLayout.tsx",
      lineNumber: 187,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-t border-gray-200 py-8 text-center text-sm text-gray-700 sm:text-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block sm:inline", children: "\xA9 2023 Web3Firewall, Inc." }, void 0, false, {
        fileName: "app/components/FullLayout.tsx",
        lineNumber: 195,
        columnNumber: 15
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block sm:inline", children: "All rights reserved." }, void 0, false, {
        fileName: "app/components/FullLayout.tsx",
        lineNumber: 196,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/FullLayout.tsx",
      lineNumber: 194,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/FullLayout.tsx",
      lineNumber: 193,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/FullLayout.tsx",
      lineNumber: 192,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FullLayout.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/FullLayout.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s3(FullLayout, "CYJguK6mNXbIazuMVGaoS2gfgm0=", false, function() {
  return [useAuthContext, useNavigate];
});
_c2 = FullLayout;
var _c2;
$RefreshReg$(_c2, "FullLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_authed.tsx
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_authed.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_authed.tsx"
  );
  import.meta.hot.lastModified = "1708356365269.2034";
}
var meta = () => {
  return [{
    title: "Web3Firewall"
  }];
};
function PolicyPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FullLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/_authed.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_authed.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c3 = PolicyPage;
var _c3;
$RefreshReg$(_c3, "PolicyPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PolicyPage as default,
  meta
};
//# sourceMappingURL=/build/routes/_authed-TKCYOEDA.js.map
