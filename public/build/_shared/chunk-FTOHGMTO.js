import {
  C,
  D,
  D2,
  F,
  I,
  I2,
  M,
  S,
  T,
  X,
  _,
  a,
  c,
  d,
  h,
  h2,
  l,
  n,
  o,
  o2,
  o3,
  p,
  r,
  s4 as s,
  u,
  u2,
  x,
  y2 as y
} from "/build/_shared/chunk-ILHJGIBO.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a2 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o4(e) {
  var r2, i;
  let n2 = (r2 = e.innerText) != null ? r2 : "", t = e.cloneNode(true);
  if (!(t instanceof HTMLElement))
    return n2;
  let u3 = false;
  for (let f of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f.remove(), u3 = true;
  let l3 = u3 ? (i = t.innerText) != null ? i : "" : n2;
  return a2.test(l3) && (l3 = l3.replace(a2, "")), l3;
}
function g(e) {
  let n2 = e.getAttribute("aria-label");
  if (typeof n2 == "string")
    return n2.trim();
  let t = e.getAttribute("aria-labelledby");
  if (t) {
    let u3 = t.split(" ").map((l3) => {
      let r2 = document.getElementById(l3);
      if (r2) {
        let i = r2.getAttribute("aria-label");
        return typeof i == "string" ? i.trim() : o4(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u3.length > 0)
      return u3.join(", ");
  }
  return o4(e).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function b(c2) {
  let t = (0, import_react.useRef)(""), r2 = (0, import_react.useRef)("");
  return o2(() => {
    let e = c2.current;
    if (!e)
      return "";
    let u3 = e.innerText;
    if (t.current === u3)
      return r2.current;
    let n2 = g(e).trim().toLowerCase();
    return t.current = u3, r2.current = n2, n2;
  });
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var me = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(me || {});
var de = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(de || {});
var fe = ((a3) => (a3[a3.OpenMenu = 0] = "OpenMenu", a3[a3.CloseMenu = 1] = "CloseMenu", a3[a3.GoToItem = 2] = "GoToItem", a3[a3.Search = 3] = "Search", a3[a3.ClearSearch = 4] = "ClearSearch", a3[a3.RegisterItem = 5] = "RegisterItem", a3[a3.UnregisterItem = 6] = "UnregisterItem", a3))(fe || {});
function w(e, u3 = (r2) => r2) {
  let r2 = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, i = I2(u3(e.items.slice()), (t) => t.dataRef.current.domRef.current), s2 = r2 ? i.indexOf(r2) : null;
  return s2 === -1 && (s2 = null), { items: i, activeItemIndex: s2 };
}
var Te = { [1](e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, [0](e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: false, menuState: 0 };
}, [2]: (e, u3) => {
  var s2;
  let r2 = w(e), i = x(u3, { resolveItems: () => r2.items, resolveActiveIndex: () => r2.activeItemIndex, resolveId: (t) => t.id, resolveDisabled: (t) => t.dataRef.current.disabled });
  return { ...e, ...r2, searchQuery: "", activeItemIndex: i, activationTrigger: (s2 = u3.trigger) != null ? s2 : 1 };
}, [3]: (e, u3) => {
  let i = e.searchQuery !== "" ? 0 : 1, s2 = e.searchQuery + u3.value.toLowerCase(), o5 = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + i).concat(e.items.slice(0, e.activeItemIndex + i)) : e.items).find((l3) => {
    var m;
    return ((m = l3.dataRef.current.textValue) == null ? void 0 : m.startsWith(s2)) && !l3.dataRef.current.disabled;
  }), a3 = o5 ? e.items.indexOf(o5) : -1;
  return a3 === -1 || a3 === e.activeItemIndex ? { ...e, searchQuery: s2 } : { ...e, searchQuery: s2, activeItemIndex: a3, activationTrigger: 1 };
}, [4](e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e, u3) => {
  let r2 = w(e, (i) => [...i, { id: u3.id, dataRef: u3.dataRef }]);
  return { ...e, ...r2 };
}, [6]: (e, u3) => {
  let r2 = w(e, (i) => {
    let s2 = i.findIndex((t) => t.id === u3.id);
    return s2 !== -1 && i.splice(s2, 1), i;
  });
  return { ...e, ...r2, activationTrigger: 1 };
} };
var U = (0, import_react2.createContext)(null);
U.displayName = "MenuContext";
function O(e) {
  let u3 = (0, import_react2.useContext)(U);
  if (u3 === null) {
    let r2 = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, O), r2;
  }
  return u3;
}
function ye(e, u3) {
  return u(u3.type, Te, e, u3);
}
var Ie = import_react2.Fragment;
function Me(e, u3) {
  let { __demoMode: r2 = false, ...i } = e, s2 = (0, import_react2.useReducer)(ye, { __demoMode: r2, menuState: r2 ? 0 : 1, buttonRef: (0, import_react2.createRef)(), itemsRef: (0, import_react2.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t, itemsRef: o5, buttonRef: a3 }, l3] = s2, m = y(u3);
  h2([a3, o5], (g2, R) => {
    var p2;
    l3({ type: 1 }), h(R, T.Loose) || (g2.preventDefault(), (p2 = a3.current) == null || p2.focus());
  }, t === 0);
  let I3 = o2(() => {
    l3({ type: 1 });
  }), A = (0, import_react2.useMemo)(() => ({ open: t === 0, close: I3 }), [t, I3]), f = { ref: m };
  return import_react2.default.createElement(U.Provider, { value: s2 }, import_react2.default.createElement(c, { value: u(t, { [0]: d.Open, [1]: d.Closed }) }, X({ ourProps: f, theirProps: i, slot: A, defaultTag: Ie, name: "Menu" })));
}
var ge = "button";
function Re(e, u3) {
  var R;
  let r2 = I(), { id: i = `headlessui-menu-button-${r2}`, ...s2 } = e, [t, o5] = O("Menu.Button"), a3 = y(t.buttonRef, u3), l3 = p(), m = o2((p2) => {
    switch (p2.key) {
      case o3.Space:
      case o3.Enter:
      case o3.ArrowDown:
        p2.preventDefault(), p2.stopPropagation(), o5({ type: 0 }), l3.nextFrame(() => o5({ type: 2, focus: a.First }));
        break;
      case o3.ArrowUp:
        p2.preventDefault(), p2.stopPropagation(), o5({ type: 0 }), l3.nextFrame(() => o5({ type: 2, focus: a.Last }));
        break;
    }
  }), I3 = o2((p2) => {
    switch (p2.key) {
      case o3.Space:
        p2.preventDefault();
        break;
    }
  }), A = o2((p2) => {
    if (r(p2.currentTarget))
      return p2.preventDefault();
    e.disabled || (t.menuState === 0 ? (o5({ type: 1 }), l3.nextFrame(() => {
      var M2;
      return (M2 = t.buttonRef.current) == null ? void 0 : M2.focus({ preventScroll: true });
    })) : (p2.preventDefault(), o5({ type: 0 })));
  }), f = (0, import_react2.useMemo)(() => ({ open: t.menuState === 0 }), [t]), g2 = { ref: a3, id: i, type: s(e, t.buttonRef), "aria-haspopup": "menu", "aria-controls": (R = t.itemsRef.current) == null ? void 0 : R.id, "aria-expanded": t.menuState === 0, onKeyDown: m, onKeyUp: I3, onClick: A };
  return X({ ourProps: g2, theirProps: s2, slot: f, defaultTag: ge, name: "Menu.Button" });
}
var Ae = "div";
var be = S.RenderStrategy | S.Static;
function Ee(e, u3) {
  var M2, b2;
  let r2 = I(), { id: i = `headlessui-menu-items-${r2}`, ...s2 } = e, [t, o5] = O("Menu.Items"), a3 = y(t.itemsRef, u3), l3 = n(t.itemsRef), m = p(), I3 = C(), A = (() => I3 !== null ? (I3 & d.Open) === d.Open : t.menuState === 0)();
  (0, import_react2.useEffect)(() => {
    let n2 = t.itemsRef.current;
    n2 && t.menuState === 0 && n2 !== (l3 == null ? void 0 : l3.activeElement) && n2.focus({ preventScroll: true });
  }, [t.menuState, t.itemsRef, l3]), F({ container: t.itemsRef.current, enabled: t.menuState === 0, accept(n2) {
    return n2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n2) {
    n2.setAttribute("role", "none");
  } });
  let f = o2((n2) => {
    var E, P;
    switch (m.dispose(), n2.key) {
      case o3.Space:
        if (t.searchQuery !== "")
          return n2.preventDefault(), n2.stopPropagation(), o5({ type: 3, value: n2.key });
      case o3.Enter:
        if (n2.preventDefault(), n2.stopPropagation(), o5({ type: 1 }), t.activeItemIndex !== null) {
          let { dataRef: S2 } = t.items[t.activeItemIndex];
          (P = (E = S2.current) == null ? void 0 : E.domRef.current) == null || P.click();
        }
        D(t.buttonRef.current);
        break;
      case o3.ArrowDown:
        return n2.preventDefault(), n2.stopPropagation(), o5({ type: 2, focus: a.Next });
      case o3.ArrowUp:
        return n2.preventDefault(), n2.stopPropagation(), o5({ type: 2, focus: a.Previous });
      case o3.Home:
      case o3.PageUp:
        return n2.preventDefault(), n2.stopPropagation(), o5({ type: 2, focus: a.First });
      case o3.End:
      case o3.PageDown:
        return n2.preventDefault(), n2.stopPropagation(), o5({ type: 2, focus: a.Last });
      case o3.Escape:
        n2.preventDefault(), n2.stopPropagation(), o5({ type: 1 }), o().nextFrame(() => {
          var S2;
          return (S2 = t.buttonRef.current) == null ? void 0 : S2.focus({ preventScroll: true });
        });
        break;
      case o3.Tab:
        n2.preventDefault(), n2.stopPropagation(), o5({ type: 1 }), o().nextFrame(() => {
          _(t.buttonRef.current, n2.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n2.key.length === 1 && (o5({ type: 3, value: n2.key }), m.setTimeout(() => o5({ type: 4 }), 350));
        break;
    }
  }), g2 = o2((n2) => {
    switch (n2.key) {
      case o3.Space:
        n2.preventDefault();
        break;
    }
  }), R = (0, import_react2.useMemo)(() => ({ open: t.menuState === 0 }), [t]), p2 = { "aria-activedescendant": t.activeItemIndex === null || (M2 = t.items[t.activeItemIndex]) == null ? void 0 : M2.id, "aria-labelledby": (b2 = t.buttonRef.current) == null ? void 0 : b2.id, id: i, onKeyDown: f, onKeyUp: g2, role: "menu", tabIndex: 0, ref: a3 };
  return X({ ourProps: p2, theirProps: s2, slot: R, defaultTag: Ae, features: be, visible: A, name: "Menu.Items" });
}
var Se = import_react2.Fragment;
function Pe(e, u3) {
  let r2 = I(), { id: i = `headlessui-menu-item-${r2}`, disabled: s2 = false, ...t } = e, [o5, a3] = O("Menu.Item"), l3 = o5.activeItemIndex !== null ? o5.items[o5.activeItemIndex].id === i : false, m = (0, import_react2.useRef)(null), I3 = y(u3, m);
  l(() => {
    if (o5.__demoMode || o5.menuState !== 0 || !l3 || o5.activationTrigger === 0)
      return;
    let T2 = o();
    return T2.requestAnimationFrame(() => {
      var v, B;
      (B = (v = m.current) == null ? void 0 : v.scrollIntoView) == null || B.call(v, { block: "nearest" });
    }), T2.dispose;
  }, [o5.__demoMode, m, l3, o5.menuState, o5.activationTrigger, o5.activeItemIndex]);
  let A = b(m), f = (0, import_react2.useRef)({ disabled: s2, domRef: m, get textValue() {
    return A();
  } });
  l(() => {
    f.current.disabled = s2;
  }, [f, s2]), l(() => (a3({ type: 5, id: i, dataRef: f }), () => a3({ type: 6, id: i })), [f, i]);
  let g2 = o2(() => {
    a3({ type: 1 });
  }), R = o2((T2) => {
    if (s2)
      return T2.preventDefault();
    a3({ type: 1 }), D(o5.buttonRef.current);
  }), p2 = o2(() => {
    if (s2)
      return a3({ type: 2, focus: a.Nothing });
    a3({ type: 2, focus: a.Specific, id: i });
  }), M2 = u2(), b2 = o2((T2) => M2.update(T2)), n2 = o2((T2) => {
    M2.wasMoved(T2) && (s2 || l3 || a3({ type: 2, focus: a.Specific, id: i, trigger: 0 }));
  }), E = o2((T2) => {
    M2.wasMoved(T2) && (s2 || l3 && a3({ type: 2, focus: a.Nothing }));
  }), P = (0, import_react2.useMemo)(() => ({ active: l3, disabled: s2, close: g2 }), [l3, s2, g2]);
  return X({ ourProps: { id: i, ref: I3, role: "menuitem", tabIndex: s2 === true ? void 0 : -1, "aria-disabled": s2 === true ? true : void 0, disabled: void 0, onClick: R, onFocus: p2, onPointerEnter: b2, onMouseEnter: b2, onPointerMove: n2, onMouseMove: n2, onPointerLeave: E, onMouseLeave: E }, theirProps: t, slot: P, defaultTag: Se, name: "Menu.Item" });
}
var ve = D2(Me);
var xe = D2(Re);
var he = D2(Ee);
var De = D2(Pe);
var it = Object.assign(ve, { Button: xe, Items: he, Item: De });

export {
  it
};
//# sourceMappingURL=/build/_shared/chunk-FTOHGMTO.js.map
