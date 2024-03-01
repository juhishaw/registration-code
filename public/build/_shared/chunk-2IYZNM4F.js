import {
  C,
  D2 as D,
  I,
  M,
  N,
  O,
  S,
  T2 as T,
  X,
  d,
  f,
  h2 as h,
  l,
  l2,
  n,
  o,
  o2,
  o3,
  p,
  r,
  s,
  s2,
  s3,
  t,
  u,
  y,
  y2
} from "/build/_shared/chunk-ILHJGIBO.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react11 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/hidden.js
var a = "div";
var p2 = ((e3) => (e3[e3.None = 1] = "None", e3[e3.Focusable = 2] = "Focusable", e3[e3.Hidden = 4] = "Hidden", e3))(p2 || {});
function s4(t8, o4) {
  let { features: n5 = 1, ...e3 } = t8, d7 = { ref: o4, "aria-hidden": (n5 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n5 & 4) === 4 && (n5 & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d7, theirProps: e3, slot: {}, defaultTag: a, name: "Hidden" });
}
var c = D(s4);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react = __toESM(require_react(), 1);
var s5 = ((r5) => (r5[r5.Forwards = 0] = "Forwards", r5[r5.Backwards = 1] = "Backwards", r5))(s5 || {});
function n2() {
  let e3 = (0, import_react.useRef)(0);
  return s3("keydown", (o4) => {
    o4.key === "Tab" && (e3.current = o4.shiftKey ? 1 : 0);
  }, true), e3;
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react2 = __toESM(require_react(), 1);
function E(n5, e3, a8, t8) {
  let i3 = s2(a8);
  (0, import_react2.useEffect)(() => {
    n5 = n5 != null ? n5 : window;
    function r5(o4) {
      i3.current(o4);
    }
    return n5.addEventListener(e3, r5, t8), () => n5.removeEventListener(e3, r5, t8);
  }, [n5, e3, t8]);
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react3 = __toESM(require_react(), 1);
function m(u7, t8) {
  let e3 = (0, import_react3.useRef)([]), r5 = o2(u7);
  (0, import_react3.useEffect)(() => {
    let o4 = [...e3.current];
    for (let [n5, a8] of t8.entries())
      if (e3.current[n5] !== a8) {
        let l7 = r5(t8, o4);
        return e3.current = t8, l7;
      }
  }, [r5, ...t8]);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t3(n5) {
  function e3() {
    document.readyState !== "loading" && (n5(), document.removeEventListener("DOMContentLoaded", e3));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e3), e3());
}

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react4 = __toESM(require_react(), 1);
function c2(t8) {
  let r5 = o2(t8), e3 = (0, import_react4.useRef)(false);
  (0, import_react4.useEffect)(() => (e3.current = false, () => {
    e3.current = true, t(() => {
      e3.current && r5();
    });
  }), [r5]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t8) {
  if (!t8)
    return /* @__PURE__ */ new Set();
  if (typeof t8 == "function")
    return new Set(t8());
  let r5 = /* @__PURE__ */ new Set();
  for (let e3 of t8.current)
    e3.current instanceof HTMLElement && r5.add(e3.current);
  return r5;
}
var J = "div";
var h2 = ((n5) => (n5[n5.None = 1] = "None", n5[n5.InitialFocus = 2] = "InitialFocus", n5[n5.TabLock = 4] = "TabLock", n5[n5.FocusLock = 8] = "FocusLock", n5[n5.RestoreFocus = 16] = "RestoreFocus", n5[n5.All = 30] = "All", n5))(h2 || {});
function X2(t8, r5) {
  let e3 = (0, import_react5.useRef)(null), o4 = y2(e3, r5), { initialFocus: u7, containers: i3, features: n5 = 30, ...l7 } = t8;
  l2() || (n5 = 1);
  let m7 = n(e3);
  Y({ ownerDocument: m7 }, Boolean(n5 & 16));
  let c7 = Z({ ownerDocument: m7, container: e3, initialFocus: u7 }, Boolean(n5 & 2));
  $({ ownerDocument: m7, container: e3, containers: i3, previousActiveElement: c7 }, Boolean(n5 & 8));
  let v2 = n2(), y6 = o2((s11) => {
    let T5 = e3.current;
    if (!T5)
      return;
    ((B) => B())(() => {
      u(v2.current, { [s5.Forwards]: () => {
        O(T5, M.First, { skipElements: [s11.relatedTarget] });
      }, [s5.Backwards]: () => {
        O(T5, M.Last, { skipElements: [s11.relatedTarget] });
      } });
    });
  }), _ = p(), b3 = (0, import_react5.useRef)(false), j4 = { ref: o4, onKeyDown(s11) {
    s11.key == "Tab" && (b3.current = true, _.requestAnimationFrame(() => {
      b3.current = false;
    }));
  }, onBlur(s11) {
    let T5 = P(i3);
    e3.current instanceof HTMLElement && T5.add(e3.current);
    let d7 = s11.relatedTarget;
    d7 instanceof HTMLElement && d7.dataset.headlessuiFocusGuard !== "true" && (S2(T5, d7) || (b3.current ? O(e3.current, u(v2.current, { [s5.Forwards]: () => M.Next, [s5.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: s11.target }) : s11.target instanceof HTMLElement && y(s11.target)));
  } };
  return import_react5.default.createElement(import_react5.default.Fragment, null, Boolean(n5 & 4) && import_react5.default.createElement(c, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y6, features: p2.Focusable }), X({ ourProps: j4, theirProps: l7, defaultTag: J, name: "FocusTrap" }), Boolean(n5 & 4) && import_react5.default.createElement(c, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y6, features: p2.Focusable }));
}
var z = D(X2);
var ge = Object.assign(z, { features: h2 });
var a2 = [];
t3(() => {
  function t8(r5) {
    r5.target instanceof HTMLElement && r5.target !== document.body && a2[0] !== r5.target && (a2.unshift(r5.target), a2 = a2.filter((e3) => e3 != null && e3.isConnected), a2.splice(10));
  }
  window.addEventListener("click", t8, { capture: true }), window.addEventListener("mousedown", t8, { capture: true }), window.addEventListener("focus", t8, { capture: true }), document.body.addEventListener("click", t8, { capture: true }), document.body.addEventListener("mousedown", t8, { capture: true }), document.body.addEventListener("focus", t8, { capture: true });
});
function Q(t8 = true) {
  let r5 = (0, import_react5.useRef)(a2.slice());
  return m(([e3], [o4]) => {
    o4 === true && e3 === false && t(() => {
      r5.current.splice(0);
    }), o4 === false && e3 === true && (r5.current = a2.slice());
  }, [t8, a2, r5]), o2(() => {
    var e3;
    return (e3 = r5.current.find((o4) => o4 != null && o4.isConnected)) != null ? e3 : null;
  });
}
function Y({ ownerDocument: t8 }, r5) {
  let e3 = Q(r5);
  m(() => {
    r5 || (t8 == null ? void 0 : t8.activeElement) === (t8 == null ? void 0 : t8.body) && y(e3());
  }, [r5]), c2(() => {
    r5 && y(e3());
  });
}
function Z({ ownerDocument: t8, container: r5, initialFocus: e3 }, o4) {
  let u7 = (0, import_react5.useRef)(null), i3 = f();
  return m(() => {
    if (!o4)
      return;
    let n5 = r5.current;
    n5 && t(() => {
      if (!i3.current)
        return;
      let l7 = t8 == null ? void 0 : t8.activeElement;
      if (e3 != null && e3.current) {
        if ((e3 == null ? void 0 : e3.current) === l7) {
          u7.current = l7;
          return;
        }
      } else if (n5.contains(l7)) {
        u7.current = l7;
        return;
      }
      e3 != null && e3.current ? y(e3.current) : O(n5, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u7.current = t8 == null ? void 0 : t8.activeElement;
    });
  }, [o4]), u7;
}
function $({ ownerDocument: t8, container: r5, containers: e3, previousActiveElement: o4 }, u7) {
  let i3 = f();
  E(t8 == null ? void 0 : t8.defaultView, "focus", (n5) => {
    if (!u7 || !i3.current)
      return;
    let l7 = P(e3);
    r5.current instanceof HTMLElement && l7.add(r5.current);
    let m7 = o4.current;
    if (!m7)
      return;
    let c7 = n5.target;
    c7 && c7 instanceof HTMLElement ? S2(l7, c7) ? (o4.current = c7, y(c7)) : (n5.preventDefault(), n5.stopPropagation(), y(m7)) : y(o4.current);
  }, true);
}
function S2(t8, r5) {
  for (let e3 of t8)
    if (e3.contains(r5))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react7 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react6 = __toESM(require_react(), 1);
var e = (0, import_react6.createContext)(false);
function l3() {
  return (0, import_react6.useContext)(e);
}
function P2(o4) {
  return import_react6.default.createElement(e.Provider, { value: o4.force }, o4.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F(p5) {
  let l7 = l3(), n5 = (0, import_react7.useContext)(v), e3 = n(p5), [a8, o4] = (0, import_react7.useState)(() => {
    if (!l7 && n5 !== null || s.isServer)
      return null;
    let t8 = e3 == null ? void 0 : e3.getElementById("headlessui-portal-root");
    if (t8)
      return t8;
    if (e3 === null)
      return null;
    let r5 = e3.createElement("div");
    return r5.setAttribute("id", "headlessui-portal-root"), e3.body.appendChild(r5);
  });
  return (0, import_react7.useEffect)(() => {
    a8 !== null && (e3 != null && e3.body.contains(a8) || e3 == null || e3.body.appendChild(a8));
  }, [a8, e3]), (0, import_react7.useEffect)(() => {
    l7 || n5 !== null && o4(n5.current);
  }, [n5, o4, l7]), a8;
}
var U = import_react7.Fragment;
function N2(p5, l7) {
  let n5 = p5, e3 = (0, import_react7.useRef)(null), a8 = y2(T((u7) => {
    e3.current = u7;
  }), l7), o4 = n(e3), t8 = F(e3), [r5] = (0, import_react7.useState)(() => {
    var u7;
    return s.isServer ? null : (u7 = o4 == null ? void 0 : o4.createElement("div")) != null ? u7 : null;
  }), i3 = (0, import_react7.useContext)(f3), C2 = l2();
  return l(() => {
    !t8 || !r5 || t8.contains(r5) || (r5.setAttribute("data-headlessui-portal", ""), t8.appendChild(r5));
  }, [t8, r5]), l(() => {
    if (r5 && i3)
      return i3.register(r5);
  }, [i3, r5]), c2(() => {
    var u7;
    !t8 || !r5 || (r5 instanceof Node && t8.contains(r5) && t8.removeChild(r5), t8.childNodes.length <= 0 && ((u7 = t8.parentElement) == null || u7.removeChild(t8)));
  }), C2 ? !t8 || !r5 ? null : (0, import_react_dom.createPortal)(X({ ourProps: { ref: a8 }, theirProps: n5, defaultTag: U, name: "Portal" }), r5) : null;
}
var S3 = import_react7.Fragment;
var v = (0, import_react7.createContext)(null);
function j(p5, l7) {
  let { target: n5, ...e3 } = p5, o4 = { ref: y2(l7) };
  return import_react7.default.createElement(v.Provider, { value: n5 }, X({ ourProps: o4, theirProps: e3, defaultTag: S3, name: "Popover.Group" }));
}
var f3 = (0, import_react7.createContext)(null);
function ae() {
  let p5 = (0, import_react7.useContext)(f3), l7 = (0, import_react7.useRef)([]), n5 = o2((o4) => (l7.current.push(o4), p5 && p5.register(o4), () => e3(o4))), e3 = o2((o4) => {
    let t8 = l7.current.indexOf(o4);
    t8 !== -1 && l7.current.splice(t8, 1), p5 && p5.unregister(o4);
  }), a8 = (0, import_react7.useMemo)(() => ({ register: n5, unregister: e3, portals: l7 }), [n5, e3, l7]);
  return [l7, (0, import_react7.useMemo)(() => function({ children: t8 }) {
    return import_react7.default.createElement(f3.Provider, { value: a8 }, t8);
  }, [a8])];
}
var D2 = D(N2);
var I2 = D(j);
var pe = Object.assign(D2, { Group: I2 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react8 = __toESM(require_react(), 1);
var d4 = (0, import_react8.createContext)(null);
function f4() {
  let r5 = (0, import_react8.useContext)(d4);
  if (r5 === null) {
    let t8 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t8, f4), t8;
  }
  return r5;
}
function M2() {
  let [r5, t8] = (0, import_react8.useState)([]);
  return [r5.length > 0 ? r5.join(" ") : void 0, (0, import_react8.useMemo)(() => function(e3) {
    let i3 = o2((s11) => (t8((o4) => [...o4, s11]), () => t8((o4) => {
      let p5 = o4.slice(), c7 = p5.indexOf(s11);
      return c7 !== -1 && p5.splice(c7, 1), p5;
    }))), n5 = (0, import_react8.useMemo)(() => ({ register: i3, slot: e3.slot, name: e3.name, props: e3.props }), [i3, e3.slot, e3.name, e3.props]);
    return import_react8.default.createElement(d4.Provider, { value: n5 }, e3.children);
  }, [t8])];
}
var S4 = "p";
function h3(r5, t8) {
  let a8 = I(), { id: e3 = `headlessui-description-${a8}`, ...i3 } = r5, n5 = f4(), s11 = y2(t8);
  l(() => n5.register(e3), [e3, n5.register]);
  let o4 = { ref: s11, ...n5.props, id: e3 };
  return X({ ourProps: o4, theirProps: i3, slot: n5.slot || {}, defaultTag: S4, name: n5.name || "Description" });
}
var y3 = D(h3);
var b = Object.assign(y3, {});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react9 = __toESM(require_react(), 1);
var a3 = (0, import_react9.createContext)(() => {
});
a3.displayName = "StackContext";
var s8 = ((e3) => (e3[e3.Add = 0] = "Add", e3[e3.Remove = 1] = "Remove", e3))(s8 || {});
function x() {
  return (0, import_react9.useContext)(a3);
}
function M3({ children: i3, onUpdate: r5, type: e3, element: n5, enabled: u7 }) {
  let l7 = x(), o4 = o2((...t8) => {
    r5 == null || r5(...t8), l7(...t8);
  });
  return l(() => {
    let t8 = u7 === void 0 || u7 === true;
    return t8 && o4(0, e3, n5), () => {
      t8 && o4(1, e3, n5);
    };
  }, [o4, e3, n5, u7]), import_react9.default.createElement(a3.Provider, { value: o4 }, i3);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l5 = __toESM(require_react(), 1);
function i(e3, t8) {
  return e3 === t8 && (e3 !== 0 || 1 / e3 === 1 / t8) || e3 !== e3 && t8 !== t8;
}
var d6 = typeof Object.is == "function" ? Object.is : i;
var { useState: u4, useEffect: h4, useLayoutEffect: f5, useDebugValue: p3 } = l5;
function y4(e3, t8, c7) {
  const a8 = t8(), [{ inst: n5 }, o4] = u4({ inst: { value: a8, getSnapshot: t8 } });
  return f5(() => {
    n5.value = a8, n5.getSnapshot = t8, r3(n5) && o4({ inst: n5 });
  }, [e3, a8, t8]), h4(() => (r3(n5) && o4({ inst: n5 }), e3(() => {
    r3(n5) && o4({ inst: n5 });
  })), [e3]), p3(a8), a8;
}
function r3(e3) {
  const t8 = e3.getSnapshot, c7 = e3.value;
  try {
    const a8 = t8();
    return !d6(c7, a8);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t5(r5, e3, n5) {
  return e3();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r4 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s9 = !r4;
var c5 = s9 ? t5 : y4;
var a4 = "useSyncExternalStore" in e2 ? ((n5) => n5.useSyncExternalStore)(e2) : c5;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S5(t8) {
  return a4(t8.subscribe, t8.getSnapshot, t8.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a5(o4, r5) {
  let t8 = o4(), n5 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t8;
  }, subscribe(e3) {
    return n5.add(e3), () => n5.delete(e3);
  }, dispatch(e3, ...s11) {
    let i3 = r5[e3].call(t8, ...s11);
    i3 && (t8 = i3, n5.forEach((c7) => c7()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c6() {
  let o4;
  return { before({ doc: e3 }) {
    var l7;
    let n5 = e3.documentElement;
    o4 = ((l7 = e3.defaultView) != null ? l7 : window).innerWidth - n5.clientWidth;
  }, after({ doc: e3, d: n5 }) {
    let t8 = e3.documentElement, l7 = t8.clientWidth - t8.offsetWidth, r5 = o4 - l7;
    n5.style(t8, "paddingRight", `${r5}px`);
  } };
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t6() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i2() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n4() {
  return t6() || i2();
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function T4() {
  if (!t6())
    return {};
  let l7;
  return { before() {
    l7 = window.pageYOffset;
  }, after({ doc: o4, d: t8, meta: s11 }) {
    function i3(n5) {
      return s11.containers.flatMap((e3) => e3()).some((e3) => e3.contains(n5));
    }
    t8.microTask(() => {
      if (window.getComputedStyle(o4.documentElement).scrollBehavior !== "auto") {
        let e3 = o();
        e3.style(o4.documentElement, "scroll-behavior", "auto"), t8.add(() => t8.microTask(() => e3.dispose()));
      }
      t8.style(o4.body, "marginTop", `-${l7}px`), window.scrollTo(0, 0);
      let n5 = null;
      t8.addEventListener(o4, "click", (e3) => {
        if (e3.target instanceof HTMLElement)
          try {
            let r5 = e3.target.closest("a");
            if (!r5)
              return;
            let { hash: c7 } = new URL(r5.href), a8 = o4.querySelector(c7);
            a8 && !i3(a8) && (n5 = a8);
          } catch {
          }
      }, true), t8.addEventListener(o4, "touchmove", (e3) => {
        e3.target instanceof HTMLElement && !i3(e3.target) && e3.preventDefault();
      }, { passive: false }), t8.add(() => {
        window.scrollTo(0, window.pageYOffset + l7), n5 && n5.isConnected && (n5.scrollIntoView({ block: "nearest" }), n5 = null);
      });
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l6() {
  return { before({ doc: e3, d: o4 }) {
    o4.style(e3.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m5(e3) {
  let n5 = {};
  for (let t8 of e3)
    Object.assign(n5, t8(n5));
  return n5;
}
var a6 = a5(() => /* @__PURE__ */ new Map(), { PUSH(e3, n5) {
  var o4;
  let t8 = (o4 = this.get(e3)) != null ? o4 : { doc: e3, count: 0, d: o(), meta: /* @__PURE__ */ new Set() };
  return t8.count++, t8.meta.add(n5), this.set(e3, t8), this;
}, POP(e3, n5) {
  let t8 = this.get(e3);
  return t8 && (t8.count--, t8.meta.delete(n5)), this;
}, SCROLL_PREVENT({ doc: e3, d: n5, meta: t8 }) {
  let o4 = { doc: e3, d: n5, meta: m5(t8) }, c7 = [T4(), c6(), l6()];
  c7.forEach(({ before: r5 }) => r5 == null ? void 0 : r5(o4)), c7.forEach(({ after: r5 }) => r5 == null ? void 0 : r5(o4));
}, SCROLL_ALLOW({ d: e3 }) {
  e3.dispose();
}, TEARDOWN({ doc: e3 }) {
  this.delete(e3);
} });
a6.subscribe(() => {
  let e3 = a6.getSnapshot(), n5 = /* @__PURE__ */ new Map();
  for (let [t8] of e3)
    n5.set(t8, t8.documentElement.style.overflow);
  for (let t8 of e3.values()) {
    let o4 = n5.get(t8.doc) === "hidden", c7 = t8.count !== 0;
    (c7 && !o4 || !c7 && o4) && a6.dispatch(t8.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t8), t8.count === 0 && a6.dispatch("TEARDOWN", t8);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p4(e3, r5, n5) {
  let f6 = S5(a6), o4 = e3 ? f6.get(e3) : void 0, i3 = o4 ? o4.count > 0 : false;
  return l(() => {
    if (!(!e3 || !r5))
      return a6.dispatch("PUSH", e3, n5), () => a6.dispatch("POP", e3, n5);
  }, [r5, e3]), i3;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u5 = /* @__PURE__ */ new Map();
var t7 = /* @__PURE__ */ new Map();
function h5(r5, l7 = true) {
  l(() => {
    var o4;
    if (!l7)
      return;
    let e3 = typeof r5 == "function" ? r5() : r5.current;
    if (!e3)
      return;
    function a8() {
      var d7;
      if (!e3)
        return;
      let i3 = (d7 = t7.get(e3)) != null ? d7 : 1;
      if (i3 === 1 ? t7.delete(e3) : t7.set(e3, i3 - 1), i3 !== 1)
        return;
      let n5 = u5.get(e3);
      n5 && (n5["aria-hidden"] === null ? e3.removeAttribute("aria-hidden") : e3.setAttribute("aria-hidden", n5["aria-hidden"]), e3.inert = n5.inert, u5.delete(e3));
    }
    let f6 = (o4 = t7.get(e3)) != null ? o4 : 0;
    return t7.set(e3, f6 + 1), f6 !== 0 || (u5.set(e3, { "aria-hidden": e3.getAttribute("aria-hidden"), inert: e3.inert }), e3.setAttribute("aria-hidden", "true"), e3.inert = true), a8;
  }, [r5, l7]);
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react10 = __toESM(require_react(), 1);
function j2({ defaultContainers: t8 = [], portals: r5, mainTreeNodeRef: u7 } = {}) {
  var c7;
  let o4 = (0, import_react10.useRef)((c7 = u7 == null ? void 0 : u7.current) != null ? c7 : null), l7 = n(o4), f6 = o2(() => {
    var i3;
    let n5 = [];
    for (let e3 of t8)
      e3 !== null && (e3 instanceof HTMLElement ? n5.push(e3) : "current" in e3 && e3.current instanceof HTMLElement && n5.push(e3.current));
    if (r5 != null && r5.current)
      for (let e3 of r5.current)
        n5.push(e3);
    for (let e3 of (i3 = l7 == null ? void 0 : l7.querySelectorAll("html > *, body > *")) != null ? i3 : [])
      e3 !== document.body && e3 !== document.head && e3 instanceof HTMLElement && e3.id !== "headlessui-portal-root" && (e3.contains(o4.current) || n5.some((T5) => e3.contains(T5)) || n5.push(e3));
    return n5;
  });
  return { resolveContainers: f6, contains: o2((n5) => f6().some((i3) => i3.contains(n5))), mainTreeNodeRef: o4, MainTreeNode: (0, import_react10.useMemo)(() => function() {
    return u7 != null ? null : import_react10.default.createElement(c, { features: p2.Hidden, ref: o4 });
  }, [o4, u7]) };
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e = ((o4) => (o4[o4.Open = 0] = "Open", o4[o4.Closed = 1] = "Closed", o4))(_e || {});
var Ie = ((e3) => (e3[e3.SetTitleId = 0] = "SetTitleId", e3))(Ie || {});
var Me = { [0](t8, e3) {
  return t8.titleId === e3.id ? t8 : { ...t8, titleId: e3.id };
} };
var I3 = (0, import_react11.createContext)(null);
I3.displayName = "DialogContext";
function b2(t8) {
  let e3 = (0, import_react11.useContext)(I3);
  if (e3 === null) {
    let o4 = new Error(`<${t8} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o4, b2), o4;
  }
  return e3;
}
function we(t8, e3, o4 = () => [document.body]) {
  p4(t8, e3, (i3) => {
    var n5;
    return { containers: [...(n5 = i3.containers) != null ? n5 : [], o4] };
  });
}
function Be(t8, e3) {
  return u(e3.type, Me, t8, e3);
}
var He = "div";
var Ge = S.RenderStrategy | S.Static;
function Ne(t8, e3) {
  var X3;
  let o4 = I(), { id: i3 = `headlessui-dialog-${o4}`, open: n5, onClose: l7, initialFocus: s11, __demoMode: g2 = false, ...T5 } = t8, [m7, h6] = (0, import_react11.useState)(0), a8 = C();
  n5 === void 0 && a8 !== null && (n5 = (a8 & d.Open) === d.Open);
  let D4 = (0, import_react11.useRef)(null), Q2 = y2(D4, e3), f6 = n(D4), N3 = t8.hasOwnProperty("open") || a8 !== null, U2 = t8.hasOwnProperty("onClose");
  if (!N3 && !U2)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!N3)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U2)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n5 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n5}`);
  if (typeof l7 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l7}`);
  let p5 = n5 ? 0 : 1, [S6, Z2] = (0, import_react11.useReducer)(Be, { titleId: null, descriptionId: null, panelRef: (0, import_react11.createRef)() }), P4 = o2(() => l7(false)), W = o2((r5) => Z2({ type: 0, id: r5 })), L2 = l2() ? g2 ? false : p5 === 0 : false, F2 = m7 > 1, Y2 = (0, import_react11.useContext)(I3) !== null, [ee, te] = ae(), { resolveContainers: M4, mainTreeNodeRef: k, MainTreeNode: oe } = j2({ portals: ee, defaultContainers: [(X3 = S6.panelRef.current) != null ? X3 : D4.current] }), re = F2 ? "parent" : "leaf", $2 = a8 !== null ? (a8 & d.Closing) === d.Closing : false, ne = (() => Y2 || $2 ? false : L2)(), le = (0, import_react11.useCallback)(() => {
    var r5, c7;
    return (c7 = Array.from((r5 = f6 == null ? void 0 : f6.querySelectorAll("body > *")) != null ? r5 : []).find((d7) => d7.id === "headlessui-portal-root" ? false : d7.contains(k.current) && d7 instanceof HTMLElement)) != null ? c7 : null;
  }, [k]);
  h5(le, ne);
  let ae2 = (() => F2 ? true : L2)(), ie = (0, import_react11.useCallback)(() => {
    var r5, c7;
    return (c7 = Array.from((r5 = f6 == null ? void 0 : f6.querySelectorAll("[data-headlessui-portal]")) != null ? r5 : []).find((d7) => d7.contains(k.current) && d7 instanceof HTMLElement)) != null ? c7 : null;
  }, [k]);
  h5(ie, ae2);
  let se = (() => !(!L2 || F2))();
  h(M4, P4, se);
  let pe2 = (() => !(F2 || p5 !== 0))();
  E(f6 == null ? void 0 : f6.defaultView, "keydown", (r5) => {
    pe2 && (r5.defaultPrevented || r5.key === o3.Escape && (r5.preventDefault(), r5.stopPropagation(), P4()));
  });
  let de = (() => !($2 || p5 !== 0 || Y2))();
  we(f6, de, M4), (0, import_react11.useEffect)(() => {
    if (p5 !== 0 || !D4.current)
      return;
    let r5 = new ResizeObserver((c7) => {
      for (let d7 of c7) {
        let x2 = d7.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && P4();
      }
    });
    return r5.observe(D4.current), () => r5.disconnect();
  }, [p5, D4, P4]);
  let [ue, fe] = M2(), ge2 = (0, import_react11.useMemo)(() => [{ dialogState: p5, close: P4, setTitleId: W }, S6], [p5, S6, P4, W]), J2 = (0, import_react11.useMemo)(() => ({ open: p5 === 0 }), [p5]), Te = { ref: Q2, id: i3, role: "dialog", "aria-modal": p5 === 0 ? true : void 0, "aria-labelledby": S6.titleId, "aria-describedby": ue };
  return import_react11.default.createElement(M3, { type: "Dialog", enabled: p5 === 0, element: D4, onUpdate: o2((r5, c7) => {
    c7 === "Dialog" && u(r5, { [s8.Add]: () => h6((d7) => d7 + 1), [s8.Remove]: () => h6((d7) => d7 - 1) });
  }) }, import_react11.default.createElement(P2, { force: true }, import_react11.default.createElement(pe, null, import_react11.default.createElement(I3.Provider, { value: ge2 }, import_react11.default.createElement(pe.Group, { target: D4 }, import_react11.default.createElement(P2, { force: false }, import_react11.default.createElement(fe, { slot: J2, name: "Dialog.Description" }, import_react11.default.createElement(ge, { initialFocus: s11, containers: M4, features: L2 ? u(re, { parent: ge.features.RestoreFocus, leaf: ge.features.All & ~ge.features.FocusLock }) : ge.features.None }, import_react11.default.createElement(te, null, X({ ourProps: Te, theirProps: T5, slot: J2, defaultTag: He, features: Ge, visible: p5 === 0, name: "Dialog" }))))))))), import_react11.default.createElement(oe, null));
}
var Ue = "div";
function We(t8, e3) {
  let o4 = I(), { id: i3 = `headlessui-dialog-overlay-${o4}`, ...n5 } = t8, [{ dialogState: l7, close: s11 }] = b2("Dialog.Overlay"), g2 = y2(e3), T5 = o2((a8) => {
    if (a8.target === a8.currentTarget) {
      if (r(a8.currentTarget))
        return a8.preventDefault();
      a8.preventDefault(), a8.stopPropagation(), s11();
    }
  }), m7 = (0, import_react11.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return X({ ourProps: { ref: g2, id: i3, "aria-hidden": true, onClick: T5 }, theirProps: n5, slot: m7, defaultTag: Ue, name: "Dialog.Overlay" });
}
var Ye = "div";
function $e(t8, e3) {
  let o4 = I(), { id: i3 = `headlessui-dialog-backdrop-${o4}`, ...n5 } = t8, [{ dialogState: l7 }, s11] = b2("Dialog.Backdrop"), g2 = y2(e3);
  (0, import_react11.useEffect)(() => {
    if (s11.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s11.panelRef]);
  let T5 = (0, import_react11.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return import_react11.default.createElement(P2, { force: true }, import_react11.default.createElement(pe, null, X({ ourProps: { ref: g2, id: i3, "aria-hidden": true }, theirProps: n5, slot: T5, defaultTag: Ye, name: "Dialog.Backdrop" })));
}
var Je = "div";
function Xe(t8, e3) {
  let o4 = I(), { id: i3 = `headlessui-dialog-panel-${o4}`, ...n5 } = t8, [{ dialogState: l7 }, s11] = b2("Dialog.Panel"), g2 = y2(e3, s11.panelRef), T5 = (0, import_react11.useMemo)(() => ({ open: l7 === 0 }), [l7]), m7 = o2((a8) => {
    a8.stopPropagation();
  });
  return X({ ourProps: { ref: g2, id: i3, onClick: m7 }, theirProps: n5, slot: T5, defaultTag: Je, name: "Dialog.Panel" });
}
var je = "h2";
function Ke(t8, e3) {
  let o4 = I(), { id: i3 = `headlessui-dialog-title-${o4}`, ...n5 } = t8, [{ dialogState: l7, setTitleId: s11 }] = b2("Dialog.Title"), g2 = y2(e3);
  (0, import_react11.useEffect)(() => (s11(i3), () => s11(null)), [i3, s11]);
  let T5 = (0, import_react11.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return X({ ourProps: { ref: g2, id: i3 }, theirProps: n5, slot: T5, defaultTag: je, name: "Dialog.Title" });
}
var Ve = D(Ne);
var qe = D($e);
var ze = D(Xe);
var Qe = D(We);
var Ze = D(Ke);
var _t = Object.assign(Ve, { Backdrop: qe, Panel: ze, Overlay: Qe, Title: Ze, Description: b });

export {
  p2 as p,
  c,
  m,
  n4 as n,
  M2 as M,
  b,
  _t
};
//# sourceMappingURL=/build/_shared/chunk-2IYZNM4F.js.map
