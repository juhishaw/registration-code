import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react10 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/render.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t(...r4) {
  return Array.from(new Set(r4.flatMap((n4) => typeof n4 == "string" ? n4.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/match.js
function u(r4, n4, ...a3) {
  if (r4 in n4) {
    let e2 = n4[r4];
    return typeof e2 == "function" ? e2(...a3) : e2;
  }
  let t10 = new Error(`Tried to handle "${r4}" but there is no handler defined. Only defined handlers are: ${Object.keys(n4).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t10, u), t10;
}

// node_modules/@headlessui/react/dist/utils/render.js
var S = ((a3) => (a3[a3.None = 0] = "None", a3[a3.RenderStrategy = 1] = "RenderStrategy", a3[a3.Static = 2] = "Static", a3))(S || {});
var j = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(j || {});
function X({ ourProps: r4, theirProps: t10, slot: e2, defaultTag: a3, features: s7, visible: n4 = true, name: f6 }) {
  let o9 = N(t10, r4);
  if (n4)
    return c(o9, e2, a3, f6);
  let u4 = s7 != null ? s7 : 0;
  if (u4 & 2) {
    let { static: l6 = false, ...p3 } = o9;
    if (l6)
      return c(p3, e2, a3, f6);
  }
  if (u4 & 1) {
    let { unmount: l6 = true, ...p3 } = o9;
    return u(l6 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c({ ...p3, hidden: true, style: { display: "none" } }, e2, a3, f6);
    } });
  }
  return c(o9, e2, a3, f6);
}
function c(r4, t10 = {}, e2, a3) {
  let { as: s7 = e2, children: n4, refName: f6 = "ref", ...o9 } = g(r4, ["unmount", "static"]), u4 = r4.ref !== void 0 ? { [f6]: r4.ref } : {}, l6 = typeof n4 == "function" ? n4(t10) : n4;
  "className" in o9 && o9.className && typeof o9.className == "function" && (o9.className = o9.className(t10));
  let p3 = {};
  if (t10) {
    let i5 = false, m4 = [];
    for (let [y3, d6] of Object.entries(t10))
      typeof d6 == "boolean" && (i5 = true), d6 === true && m4.push(y3);
    i5 && (p3["data-headlessui-state"] = m4.join(" "));
  }
  if (s7 === import_react.Fragment && Object.keys(R(o9)).length > 0) {
    if (!(0, import_react.isValidElement)(l6) || Array.isArray(l6) && l6.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a3} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o9).map((d6) => `  - ${d6}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d6) => `  - ${d6}`).join(`
`)].join(`
`));
    let i5 = l6.props, m4 = typeof (i5 == null ? void 0 : i5.className) == "function" ? (...d6) => t(i5 == null ? void 0 : i5.className(...d6), o9.className) : t(i5 == null ? void 0 : i5.className, o9.className), y3 = m4 ? { className: m4 } : {};
    return (0, import_react.cloneElement)(l6, Object.assign({}, N(l6.props, R(g(o9, ["ref"]))), p3, u4, w(l6.ref, u4.ref), y3));
  }
  return (0, import_react.createElement)(s7, Object.assign({}, g(o9, ["ref"]), s7 !== import_react.Fragment && u4, s7 !== import_react.Fragment && p3), l6);
}
function w(...r4) {
  return { ref: r4.every((t10) => t10 == null) ? void 0 : (t10) => {
    for (let e2 of r4)
      e2 != null && (typeof e2 == "function" ? e2(t10) : e2.current = t10);
  } };
}
function N(...r4) {
  var a3;
  if (r4.length === 0)
    return {};
  if (r4.length === 1)
    return r4[0];
  let t10 = {}, e2 = {};
  for (let s7 of r4)
    for (let n4 in s7)
      n4.startsWith("on") && typeof s7[n4] == "function" ? ((a3 = e2[n4]) != null || (e2[n4] = []), e2[n4].push(s7[n4])) : t10[n4] = s7[n4];
  if (t10.disabled || t10["aria-disabled"])
    return Object.assign(t10, Object.fromEntries(Object.keys(e2).map((s7) => [s7, void 0])));
  for (let s7 in e2)
    Object.assign(t10, { [s7](n4, ...f6) {
      let o9 = e2[s7];
      for (let u4 of o9) {
        if ((n4 instanceof Event || (n4 == null ? void 0 : n4.nativeEvent) instanceof Event) && n4.defaultPrevented)
          return;
        u4(n4, ...f6);
      }
    } });
  return t10;
}
function D(r4) {
  var t10;
  return Object.assign((0, import_react.forwardRef)(r4), { displayName: (t10 = r4.displayName) != null ? t10 : r4.name });
}
function R(r4) {
  let t10 = Object.assign({}, r4);
  for (let e2 in t10)
    t10[e2] === void 0 && delete t10[e2];
  return t10;
}
function g(r4, t10 = []) {
  let e2 = Object.assign({}, r4);
  for (let a3 of t10)
    a3 in e2 && delete e2[a3];
  return e2;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react2 = __toESM(require_react(), 1);
var n = (0, import_react2.createContext)(null);
n.displayName = "OpenClosedContext";
var d = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(d || {});
function C() {
  return (0, import_react2.useContext)(n);
}
function c2({ value: o9, children: r4 }) {
  return import_react2.default.createElement(n.Provider, { value: o9 }, r4);
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d2 = (t10, e2, n4) => e2 in t10 ? i(t10, e2, { enumerable: true, configurable: true, writable: true, value: n4 }) : t10[e2] = n4;
var r = (t10, e2, n4) => (d2(t10, typeof e2 != "symbol" ? e2 + "" : e2, n4), n4);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l2 = (e2, f6) => {
  s.isServer ? (0, import_react3.useEffect)(e2, f6) : (0, import_react3.useLayoutEffect)(e2, f6);
};

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
function f() {
  let e2 = (0, import_react4.useRef)(false);
  return l2(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react5 = __toESM(require_react(), 1);
function s2(e2) {
  let r4 = (0, import_react5.useRef)(e2);
  return l2(() => {
    r4.current = e2;
  }, [e2]), r4;
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t5 = __toESM(require_react(), 1);
function s3() {
  let r4 = typeof document == "undefined";
  return "useSyncExternalStore" in t5 ? ((o9) => o9.useSyncExternalStore)(t5)(() => () => {
  }, () => false, () => !r4) : false;
}
function l3() {
  let r4 = s3(), [e2, n4] = t5.useState(s.isHandoffComplete);
  return e2 && s.isHandoffComplete === false && n4(false), t5.useEffect(() => {
    e2 !== true && n4(true);
  }, [e2]), t5.useEffect(() => s.handoff(), []), r4 ? false : e2;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react6 = __toESM(require_react(), 1);
var o2 = function(t10) {
  let e2 = s2(t10);
  return import_react6.default.useCallback((...r4) => e2.current(...r4), [e2]);
};

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var u2 = Symbol();
function T2(t10, n4 = true) {
  return Object.assign(t10, { [u2]: n4 });
}
function y(...t10) {
  let n4 = (0, import_react7.useRef)(t10);
  (0, import_react7.useEffect)(() => {
    n4.current = t10;
  }, [t10]);
  let c6 = o2((e2) => {
    for (let o9 of n4.current)
      o9 != null && (typeof o9 == "function" ? o9(e2) : o9.current = e2);
  });
  return t10.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u2])) ? void 0 : c6;
}

// node_modules/@headlessui/react/dist/utils/once.js
function l5(r4) {
  let e2 = { called: false };
  return (...t10) => {
    if (!e2.called)
      return e2.called = true, r4(...t10);
  };
}

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t6(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o9) => setTimeout(() => {
    throw o9;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o3() {
  let n4 = [], r4 = { addEventListener(e2, t10, s7, a3) {
    return e2.addEventListener(t10, s7, a3), r4.add(() => e2.removeEventListener(t10, s7, a3));
  }, requestAnimationFrame(...e2) {
    let t10 = requestAnimationFrame(...e2);
    return r4.add(() => cancelAnimationFrame(t10));
  }, nextFrame(...e2) {
    return r4.requestAnimationFrame(() => r4.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t10 = setTimeout(...e2);
    return r4.add(() => clearTimeout(t10));
  }, microTask(...e2) {
    let t10 = { current: true };
    return t6(() => {
      t10.current && e2[0]();
    }), r4.add(() => {
      t10.current = false;
    });
  }, style(e2, t10, s7) {
    let a3 = e2.style.getPropertyValue(t10);
    return Object.assign(e2.style, { [t10]: s7 }), this.add(() => {
      Object.assign(e2.style, { [t10]: a3 });
    });
  }, group(e2) {
    let t10 = o3();
    return e2(t10), this.add(() => t10.dispose());
  }, add(e2) {
    return n4.push(e2), () => {
      let t10 = n4.indexOf(e2);
      if (t10 >= 0)
        for (let s7 of n4.splice(t10, 1))
          s7();
    };
  }, dispose() {
    for (let e2 of n4.splice(0))
      e2();
  } };
  return r4;
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function g2(t10, ...e2) {
  t10 && e2.length > 0 && t10.classList.add(...e2);
}
function v(t10, ...e2) {
  t10 && e2.length > 0 && t10.classList.remove(...e2);
}
function b2(t10, e2) {
  let n4 = o3();
  if (!t10)
    return n4.dispose;
  let { transitionDuration: m4, transitionDelay: a3 } = getComputedStyle(t10), [u4, p3] = [m4, a3].map((l6) => {
    let [r4 = 0] = l6.split(",").filter(Boolean).map((i5) => i5.includes("ms") ? parseFloat(i5) : parseFloat(i5) * 1e3).sort((i5, T4) => T4 - i5);
    return r4;
  }), o9 = u4 + p3;
  if (o9 !== 0) {
    n4.group((r4) => {
      r4.setTimeout(() => {
        e2(), r4.dispose();
      }, o9), r4.addEventListener(t10, "transitionrun", (i5) => {
        i5.target === i5.currentTarget && r4.dispose();
      });
    });
    let l6 = n4.addEventListener(t10, "transitionend", (r4) => {
      r4.target === r4.currentTarget && (e2(), l6());
    });
  } else
    e2();
  return n4.add(() => e2()), n4.dispose;
}
function M(t10, e2, n4, m4) {
  let a3 = n4 ? "enter" : "leave", u4 = o3(), p3 = m4 !== void 0 ? l5(m4) : () => {
  };
  a3 === "enter" && (t10.removeAttribute("hidden"), t10.style.display = "");
  let o9 = u(a3, { enter: () => e2.enter, leave: () => e2.leave }), l6 = u(a3, { enter: () => e2.enterTo, leave: () => e2.leaveTo }), r4 = u(a3, { enter: () => e2.enterFrom, leave: () => e2.leaveFrom });
  return v(t10, ...e2.base, ...e2.enter, ...e2.enterTo, ...e2.enterFrom, ...e2.leave, ...e2.leaveFrom, ...e2.leaveTo, ...e2.entered), g2(t10, ...e2.base, ...o9, ...r4), u4.nextFrame(() => {
    v(t10, ...e2.base, ...o9, ...r4), g2(t10, ...e2.base, ...o9, ...l6), b2(t10, () => (v(t10, ...e2.base, ...o9), g2(t10, ...e2.base, ...e2.entered), p3()));
  }), u4.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react8 = __toESM(require_react(), 1);
function p2() {
  let [e2] = (0, import_react8.useState)(o3);
  return (0, import_react8.useEffect)(() => () => e2.dispose(), [e2]), e2;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function E2({ immediate: t10, container: s7, direction: n4, classes: u4, onStart: a3, onStop: c6 }) {
  let l6 = f(), d6 = p2(), e2 = s2(n4);
  l2(() => {
    t10 && (e2.current = "enter");
  }, [t10]), l2(() => {
    let r4 = o3();
    d6.add(r4.dispose);
    let i5 = s7.current;
    if (i5 && e2.current !== "idle" && l6.current)
      return r4.dispose(), a3.current(e2.current), r4.add(M(i5, u4.current, e2.current === "enter", () => {
        r4.dispose(), c6.current(e2.current);
      })), r4.dispose;
  }, [n4]);
}

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react9 = __toESM(require_react(), 1);
function c4(a3 = 0) {
  let [l6, r4] = (0, import_react9.useState)(a3), t10 = f(), o9 = (0, import_react9.useCallback)((e2) => {
    t10.current && r4((u4) => u4 | e2);
  }, [l6, t10]), m4 = (0, import_react9.useCallback)((e2) => Boolean(l6 & e2), [l6]), s7 = (0, import_react9.useCallback)((e2) => {
    t10.current && r4((u4) => u4 & ~e2);
  }, [r4, t10]), g3 = (0, import_react9.useCallback)((e2) => {
    t10.current && r4((u4) => u4 ^ e2);
  }, [r4]);
  return { flags: l6, addFlag: o9, hasFlag: m4, removeFlag: s7, toggleFlag: g3 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function S2(t10 = "") {
  return t10.split(" ").filter((n4) => n4.trim().length > 1);
}
var _ = (0, import_react10.createContext)(null);
_.displayName = "TransitionContext";
var be = ((r4) => (r4.Visible = "visible", r4.Hidden = "hidden", r4))(be || {});
function Se() {
  let t10 = (0, import_react10.useContext)(_);
  if (t10 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t10;
}
function Ne() {
  let t10 = (0, import_react10.useContext)(M2);
  if (t10 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t10;
}
var M2 = (0, import_react10.createContext)(null);
M2.displayName = "NestingContext";
function U(t10) {
  return "children" in t10 ? U(t10.children) : t10.current.filter(({ el: n4 }) => n4.current !== null).filter(({ state: n4 }) => n4 === "visible").length > 0;
}
function oe(t10, n4) {
  let r4 = s2(t10), s7 = (0, import_react10.useRef)([]), y3 = f(), D3 = p2(), c6 = o2((i5, e2 = j.Hidden) => {
    let a3 = s7.current.findIndex(({ el: o9 }) => o9 === i5);
    a3 !== -1 && (u(e2, { [j.Unmount]() {
      s7.current.splice(a3, 1);
    }, [j.Hidden]() {
      s7.current[a3].state = "hidden";
    } }), D3.microTask(() => {
      var o9;
      !U(s7) && y3.current && ((o9 = r4.current) == null || o9.call(r4));
    }));
  }), x3 = o2((i5) => {
    let e2 = s7.current.find(({ el: a3 }) => a3 === i5);
    return e2 ? e2.state !== "visible" && (e2.state = "visible") : s7.current.push({ el: i5, state: "visible" }), () => c6(i5, j.Unmount);
  }), p3 = (0, import_react10.useRef)([]), h4 = (0, import_react10.useRef)(Promise.resolve()), u4 = (0, import_react10.useRef)({ enter: [], leave: [], idle: [] }), v2 = o2((i5, e2, a3) => {
    p3.current.splice(0), n4 && (n4.chains.current[e2] = n4.chains.current[e2].filter(([o9]) => o9 !== i5)), n4 == null || n4.chains.current[e2].push([i5, new Promise((o9) => {
      p3.current.push(o9);
    })]), n4 == null || n4.chains.current[e2].push([i5, new Promise((o9) => {
      Promise.all(u4.current[e2].map(([f6, P]) => P)).then(() => o9());
    })]), e2 === "enter" ? h4.current = h4.current.then(() => n4 == null ? void 0 : n4.wait.current).then(() => a3(e2)) : a3(e2);
  }), d6 = o2((i5, e2, a3) => {
    Promise.all(u4.current[e2].splice(0).map(([o9, f6]) => f6)).then(() => {
      var o9;
      (o9 = p3.current.shift()) == null || o9();
    }).then(() => a3(e2));
  });
  return (0, import_react10.useMemo)(() => ({ children: s7, register: x3, unregister: c6, onStart: v2, onStop: d6, wait: h4, chains: u4 }), [x3, c6, s7, v2, d6, u4, h4]);
}
function xe() {
}
var Pe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function se(t10) {
  var r4;
  let n4 = {};
  for (let s7 of Pe)
    n4[s7] = (r4 = t10[s7]) != null ? r4 : xe;
  return n4;
}
function Re(t10) {
  let n4 = (0, import_react10.useRef)(se(t10));
  return (0, import_react10.useEffect)(() => {
    n4.current = se(t10);
  }, [t10]), n4;
}
var ye = "div";
var ae = S.RenderStrategy;
function De(t10, n4) {
  var K, Q;
  let { beforeEnter: r4, afterEnter: s7, beforeLeave: y3, afterLeave: D3, enter: c6, enterFrom: x3, enterTo: p3, entered: h4, leave: u4, leaveFrom: v2, leaveTo: d6, ...i5 } = t10, e2 = (0, import_react10.useRef)(null), a3 = y(e2, n4), o9 = (K = i5.unmount) == null || K ? j.Unmount : j.Hidden, { show: f6, appear: P, initial: T4 } = Se(), [l6, j2] = (0, import_react10.useState)(f6 ? "visible" : "hidden"), q = Ne(), { register: O2, unregister: V } = q;
  (0, import_react10.useEffect)(() => O2(e2), [O2, e2]), (0, import_react10.useEffect)(() => {
    if (o9 === j.Hidden && e2.current) {
      if (f6 && l6 !== "visible") {
        j2("visible");
        return;
      }
      return u(l6, { ["hidden"]: () => V(e2), ["visible"]: () => O2(e2) });
    }
  }, [l6, e2, O2, V, f6, o9]);
  let k = s2({ base: S2(i5.className), enter: S2(c6), enterFrom: S2(x3), enterTo: S2(p3), entered: S2(h4), leave: S2(u4), leaveFrom: S2(v2), leaveTo: S2(d6) }), w3 = Re({ beforeEnter: r4, afterEnter: s7, beforeLeave: y3, afterLeave: D3 }), G = l3();
  (0, import_react10.useEffect)(() => {
    if (G && l6 === "visible" && e2.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e2, l6, G]);
  let ue = T4 && !P, z = P && f6 && T4, Te = (() => !G || ue ? "idle" : f6 ? "enter" : "leave")(), H2 = c4(0), de = o2((g3) => u(g3, { enter: () => {
    H2.addFlag(d.Opening), w3.current.beforeEnter();
  }, leave: () => {
    H2.addFlag(d.Closing), w3.current.beforeLeave();
  }, idle: () => {
  } })), fe = o2((g3) => u(g3, { enter: () => {
    H2.removeFlag(d.Opening), w3.current.afterEnter();
  }, leave: () => {
    H2.removeFlag(d.Closing), w3.current.afterLeave();
  }, idle: () => {
  } })), A = oe(() => {
    j2("hidden"), V(e2);
  }, q);
  E2({ immediate: z, container: e2, classes: k, direction: Te, onStart: s2((g3) => {
    A.onStart(e2, g3, de);
  }), onStop: s2((g3) => {
    A.onStop(e2, g3, fe), g3 === "leave" && !U(A) && (j2("hidden"), V(e2));
  }) });
  let R2 = i5, me = { ref: a3 };
  return z ? R2 = { ...R2, className: t(i5.className, ...k.current.enter, ...k.current.enterFrom) } : (R2.className = t(i5.className, (Q = e2.current) == null ? void 0 : Q.className), R2.className === "" && delete R2.className), import_react10.default.createElement(M2.Provider, { value: A }, import_react10.default.createElement(c2, { value: u(l6, { ["visible"]: d.Open, ["hidden"]: d.Closed }) | H2.flags }, X({ ourProps: me, theirProps: R2, defaultTag: ye, features: ae, visible: l6 === "visible", name: "Transition.Child" })));
}
function He(t10, n4) {
  let { show: r4, appear: s7 = false, unmount: y3 = true, ...D3 } = t10, c6 = (0, import_react10.useRef)(null), x3 = y(c6, n4);
  l3();
  let p3 = C();
  if (r4 === void 0 && p3 !== null && (r4 = (p3 & d.Open) === d.Open), ![true, false].includes(r4))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [h4, u4] = (0, import_react10.useState)(r4 ? "visible" : "hidden"), v2 = oe(() => {
    u4("hidden");
  }), [d6, i5] = (0, import_react10.useState)(true), e2 = (0, import_react10.useRef)([r4]);
  l2(() => {
    d6 !== false && e2.current[e2.current.length - 1] !== r4 && (e2.current.push(r4), i5(false));
  }, [e2, r4]);
  let a3 = (0, import_react10.useMemo)(() => ({ show: r4, appear: s7, initial: d6 }), [r4, s7, d6]);
  (0, import_react10.useEffect)(() => {
    if (r4)
      u4("visible");
    else if (!U(v2))
      u4("hidden");
    else {
      let T4 = c6.current;
      if (!T4)
        return;
      let l6 = T4.getBoundingClientRect();
      l6.x === 0 && l6.y === 0 && l6.width === 0 && l6.height === 0 && u4("hidden");
    }
  }, [r4, v2]);
  let o9 = { unmount: y3 }, f6 = o2(() => {
    var T4;
    d6 && i5(false), (T4 = t10.beforeEnter) == null || T4.call(t10);
  }), P = o2(() => {
    var T4;
    d6 && i5(false), (T4 = t10.beforeLeave) == null || T4.call(t10);
  });
  return import_react10.default.createElement(M2.Provider, { value: v2 }, import_react10.default.createElement(_.Provider, { value: a3 }, X({ ourProps: { ...o9, as: import_react10.Fragment, children: import_react10.default.createElement(le, { ref: x3, ...o9, ...D3, beforeEnter: f6, beforeLeave: P }) }, theirProps: {}, defaultTag: import_react10.Fragment, features: ae, visible: h4 === "visible", name: "Transition" })));
}
function Fe(t10, n4) {
  let r4 = (0, import_react10.useContext)(_) !== null, s7 = C() !== null;
  return import_react10.default.createElement(import_react10.default.Fragment, null, !r4 && s7 ? import_react10.default.createElement(W, { ref: n4, ...t10 }) : import_react10.default.createElement(le, { ref: n4, ...t10 }));
}
var W = D(He);
var le = D(De);
var Le = D(Fe);
var tt = Object.assign(W, { Child: Le, Root: W });

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react11 = __toESM(require_react(), 1);
var o5;
var I = (o5 = import_react11.default.useId) != null ? o5 : function() {
  let n4 = l3(), [e2, u4] = import_react11.default.useState(n4 ? () => s.nextId() : null);
  return l2(() => {
    e2 === null && u4(s.nextId());
  }, [e2]), e2 != null ? "" + e2 : void 0;
};

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r4) {
  return s.isServer ? null : r4 instanceof Node ? r4.ownerDocument : r4 != null && r4.hasOwnProperty("current") && r4.current instanceof Node ? r4.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c5 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var M3 = ((n4) => (n4[n4.First = 1] = "First", n4[n4.Previous = 2] = "Previous", n4[n4.Next = 4] = "Next", n4[n4.Last = 8] = "Last", n4[n4.WrapAround = 16] = "WrapAround", n4[n4.NoScroll = 32] = "NoScroll", n4))(M3 || {});
var N2 = ((o9) => (o9[o9.Error = 0] = "Error", o9[o9.Overflow = 1] = "Overflow", o9[o9.Success = 2] = "Success", o9[o9.Underflow = 3] = "Underflow", o9))(N2 || {});
var F2 = ((t10) => (t10[t10.Previous = -1] = "Previous", t10[t10.Next = 1] = "Next", t10))(F2 || {});
function f3(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c5)).sort((r4, t10) => Math.sign((r4.tabIndex || Number.MAX_SAFE_INTEGER) - (t10.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T3 = ((t10) => (t10[t10.Strict = 0] = "Strict", t10[t10.Loose = 1] = "Loose", t10))(T3 || {});
function h2(e2, r4 = 0) {
  var t10;
  return e2 === ((t10 = e(e2)) == null ? void 0 : t10.body) ? false : u(r4, { [0]() {
    return e2.matches(c5);
  }, [1]() {
    let l6 = e2;
    for (; l6 !== null; ) {
      if (l6.matches(c5))
        return true;
      l6 = l6.parentElement;
    }
    return false;
  } });
}
function D2(e2) {
  let r4 = e(e2);
  o3().nextFrame(() => {
    r4 && !h2(r4.activeElement, 0) && y2(e2);
  });
}
var w2 = ((t10) => (t10[t10.Keyboard = 0] = "Keyboard", t10[t10.Mouse = 1] = "Mouse", t10))(w2 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
  e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e2) => {
  e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y2(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
var S3 = ["textarea", "input"].join(",");
function H(e2) {
  var r4, t10;
  return (t10 = (r4 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r4.call(e2, S3)) != null ? t10 : false;
}
function I2(e2, r4 = (t10) => t10) {
  return e2.slice().sort((t10, l6) => {
    let o9 = r4(t10), i5 = r4(l6);
    if (o9 === null || i5 === null)
      return 0;
    let n4 = o9.compareDocumentPosition(i5);
    return n4 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n4 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _2(e2, r4) {
  return O(f3(), r4, { relativeTo: e2 });
}
function O(e2, r4, { sorted: t10 = true, relativeTo: l6 = null, skipElements: o9 = [] } = {}) {
  let i5 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, n4 = Array.isArray(e2) ? t10 ? I2(e2) : e2 : f3(e2);
  o9.length > 0 && n4.length > 1 && (n4 = n4.filter((s7) => !o9.includes(s7))), l6 = l6 != null ? l6 : i5.activeElement;
  let E4 = (() => {
    if (r4 & 5)
      return 1;
    if (r4 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x3 = (() => {
    if (r4 & 1)
      return 0;
    if (r4 & 2)
      return Math.max(0, n4.indexOf(l6)) - 1;
    if (r4 & 4)
      return Math.max(0, n4.indexOf(l6)) + 1;
    if (r4 & 8)
      return n4.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p3 = r4 & 32 ? { preventScroll: true } : {}, d6 = 0, a3 = n4.length, u4;
  do {
    if (d6 >= a3 || d6 + a3 <= 0)
      return 0;
    let s7 = x3 + d6;
    if (r4 & 16)
      s7 = (s7 + a3) % a3;
    else {
      if (s7 < 0)
        return 3;
      if (s7 >= a3)
        return 1;
    }
    u4 = n4[s7], u4 == null || u4.focus(p3), d6 += E4;
  } while (u4 !== i5.activeElement);
  return r4 & 6 && H(u4) && u4.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react14 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react12 = __toESM(require_react(), 1);
function d3(e2, r4, n4) {
  let o9 = s2(r4);
  (0, import_react12.useEffect)(() => {
    function t10(u4) {
      o9.current(u4);
    }
    return document.addEventListener(e2, t10, n4), () => document.removeEventListener(e2, t10, n4);
  }, [e2, n4]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react13 = __toESM(require_react(), 1);
function s5(e2, r4, n4) {
  let o9 = s2(r4);
  (0, import_react13.useEffect)(() => {
    function t10(i5) {
      o9.current(i5);
    }
    return window.addEventListener(e2, t10, n4), () => window.removeEventListener(e2, t10, n4);
  }, [e2, n4]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function h3(s7, m4, a3 = true) {
  let i5 = (0, import_react14.useRef)(false);
  (0, import_react14.useEffect)(() => {
    requestAnimationFrame(() => {
      i5.current = a3;
    });
  }, [a3]);
  function c6(e2, r4) {
    if (!i5.current || e2.defaultPrevented)
      return;
    let t10 = r4(e2);
    if (t10 === null || !t10.getRootNode().contains(t10) || !t10.isConnected)
      return;
    let E4 = function u4(n4) {
      return typeof n4 == "function" ? u4(n4()) : Array.isArray(n4) || n4 instanceof Set ? n4 : [n4];
    }(s7);
    for (let u4 of E4) {
      if (u4 === null)
        continue;
      let n4 = u4 instanceof HTMLElement ? u4 : u4.current;
      if (n4 != null && n4.contains(t10) || e2.composed && e2.composedPath().includes(n4))
        return;
    }
    return !h2(t10, T3.Loose) && t10.tabIndex !== -1 && e2.preventDefault(), m4(e2, t10);
  }
  let o9 = (0, import_react14.useRef)(null);
  d3("pointerdown", (e2) => {
    var r4, t10;
    i5.current && (o9.current = ((t10 = (r4 = e2.composedPath) == null ? void 0 : r4.call(e2)) == null ? void 0 : t10[0]) || e2.target);
  }, true), d3("mousedown", (e2) => {
    var r4, t10;
    i5.current && (o9.current = ((t10 = (r4 = e2.composedPath) == null ? void 0 : r4.call(e2)) == null ? void 0 : t10[0]) || e2.target);
  }, true), d3("click", (e2) => {
    o9.current && (c6(e2, () => o9.current), o9.current = null);
  }, true), d3("touchend", (e2) => c6(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), s5("blur", (e2) => c6(e2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react15 = __toESM(require_react(), 1);
function i3(t10) {
  var n4;
  if (t10.type)
    return t10.type;
  let e2 = (n4 = t10.as) != null ? n4 : "button";
  if (typeof e2 == "string" && e2.toLowerCase() === "button")
    return "button";
}
function s6(t10, e2) {
  let [n4, u4] = (0, import_react15.useState)(() => i3(t10));
  return l2(() => {
    u4(i3(t10));
  }, [t10.type, t10.as]), l2(() => {
    n4 || e2.current && e2.current instanceof HTMLButtonElement && !e2.current.hasAttribute("type") && u4("button");
  }, [n4, e2]), n4;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react16 = __toESM(require_react(), 1);
function F3({ container: e2, accept: t10, walk: r4, enabled: c6 = true }) {
  let o9 = (0, import_react16.useRef)(t10), l6 = (0, import_react16.useRef)(r4);
  (0, import_react16.useEffect)(() => {
    o9.current = t10, l6.current = r4;
  }, [t10, r4]), l2(() => {
    if (!e2 || !c6)
      return;
    let n4 = e(e2);
    if (!n4)
      return;
    let f6 = o9.current, p3 = l6.current, d6 = Object.assign((i5) => f6(i5), { acceptNode: f6 }), u4 = n4.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, d6, false);
    for (; u4.nextNode(); )
      p3(u4.currentNode);
  }, [e2, c6, o9, l6]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f5(r4) {
  throw new Error("Unexpected object: " + r4);
}
var a2 = ((e2) => (e2[e2.First = 0] = "First", e2[e2.Previous = 1] = "Previous", e2[e2.Next = 2] = "Next", e2[e2.Last = 3] = "Last", e2[e2.Specific = 4] = "Specific", e2[e2.Nothing = 5] = "Nothing", e2))(a2 || {});
function x2(r4, n4) {
  let t10 = n4.resolveItems();
  if (t10.length <= 0)
    return null;
  let l6 = n4.resolveActiveIndex(), s7 = l6 != null ? l6 : -1, d6 = (() => {
    switch (r4.focus) {
      case 0:
        return t10.findIndex((e2) => !n4.resolveDisabled(e2));
      case 1: {
        let e2 = t10.slice().reverse().findIndex((i5, c6, u4) => s7 !== -1 && u4.length - c6 - 1 >= s7 ? false : !n4.resolveDisabled(i5));
        return e2 === -1 ? e2 : t10.length - 1 - e2;
      }
      case 2:
        return t10.findIndex((e2, i5) => i5 <= s7 ? false : !n4.resolveDisabled(e2));
      case 3: {
        let e2 = t10.slice().reverse().findIndex((i5) => !n4.resolveDisabled(i5));
        return e2 === -1 ? e2 : t10.length - 1 - e2;
      }
      case 4:
        return t10.findIndex((e2) => n4.resolveId(e2) === r4.id);
      case 5:
        return null;
      default:
        f5(r4);
    }
  })();
  return d6 === -1 ? l6 : d6;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n4) {
  let e2 = n4.parentElement, l6 = null;
  for (; e2 && !(e2 instanceof HTMLFieldSetElement); )
    e2 instanceof HTMLLegendElement && (l6 = e2), e2 = e2.parentElement;
  let t10 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
  return t10 && i4(l6) ? false : t10;
}
function i4(n4) {
  if (!n4)
    return false;
  let e2 = n4.previousElementSibling;
  for (; e2 !== null; ) {
    if (e2 instanceof HTMLLegendElement)
      return false;
    e2 = e2.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o7 = ((r4) => (r4.Space = " ", r4.Enter = "Enter", r4.Escape = "Escape", r4.Backspace = "Backspace", r4.Delete = "Delete", r4.ArrowLeft = "ArrowLeft", r4.ArrowUp = "ArrowUp", r4.ArrowRight = "ArrowRight", r4.ArrowDown = "ArrowDown", r4.Home = "Home", r4.End = "End", r4.PageUp = "PageUp", r4.PageDown = "PageDown", r4.Tab = "Tab", r4))(o7 || {});

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react17 = __toESM(require_react(), 1);
function t8(e2) {
  return [e2.screenX, e2.screenY];
}
function u3() {
  let e2 = (0, import_react17.useRef)([-1, -1]);
  return { wasMoved(r4) {
    let n4 = t8(r4);
    return e2.current[0] === n4[0] && e2.current[1] === n4[1] ? false : (e2.current = n4, true);
  }, update(r4) {
    e2.current = t8(r4);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react18 = __toESM(require_react(), 1);
function n3(...e2) {
  return (0, import_react18.useMemo)(() => e(...e2), [...e2]);
}

export {
  s,
  l2 as l,
  s2,
  t6 as t,
  o3 as o,
  p2 as p,
  o2,
  l3 as l2,
  I,
  u,
  e,
  M3 as M,
  N2 as N,
  T3 as T,
  h2 as h,
  D2 as D,
  y2 as y,
  I2,
  _2 as _,
  O,
  s5 as s3,
  h3 as h2,
  s6 as s4,
  T2,
  y as y2,
  F3 as F,
  a2 as a,
  x2 as x,
  S,
  X,
  D as D2,
  R,
  r3 as r,
  d,
  C,
  c2 as c,
  o7 as o3,
  u3 as u2,
  n3 as n,
  f,
  tt
};
//# sourceMappingURL=/build/_shared/chunk-ILHJGIBO.js.map
