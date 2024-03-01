import {
  Bars4Icon_default,
  CheckCircleIcon_default,
  ChevronRightIcon_default,
  ClockIcon_default,
  CodeBracketIcon_default,
  CurrencyDollarIcon_default,
  DocumentIcon_default,
  ExclamationCircleIcon_default as ExclamationCircleIcon_default2,
  ExclamationTriangleIcon_default,
  HandThumbDownIcon_default,
  HandThumbUpIcon_default,
  LifebuoyIcon_default,
  NoSymbolIcon_default,
  PhotoIcon_default,
  QuestionMarkCircleIcon_default,
  ShieldCheckIcon_default,
  XCircleIcon_default
} from "/build/_shared/chunk-HTCIKTYC.js";
import {
  classNames
} from "/build/_shared/chunk-EVNJ2YJ4.js";
import {
  BigDecimal
} from "/build/_shared/chunk-S5R57KEM.js";
import {
  M,
  _t,
  b,
  c,
  m,
  n,
  p as p2
} from "/build/_shared/chunk-2IYZNM4F.js";
import {
  C,
  D2 as D,
  F,
  I,
  I2,
  R,
  S,
  X,
  a,
  c as c2,
  d,
  h2 as h,
  l,
  n as n2,
  o,
  o2,
  o3,
  p,
  r,
  s2 as s,
  s4 as s2,
  tt,
  u,
  u2,
  x,
  y2 as y
} from "/build/_shared/chunk-ILHJGIBO.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  ExclamationCircleIcon_default
} from "/build/_shared/chunk-JOSSDIFY.js";
import {
  require_policies
} from "/build/_shared/chunk-MSCT6M3L.js";
import {
  MagnifyingGlassIcon_default,
  PlusIcon_default
} from "/build/_shared/chunk-VCPG374B.js";
import {
  require_session
} from "/build/_shared/chunk-4Q4G4ORE.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  useActionData,
  useLoaderData,
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

// app/routes/_authed.policy_.builder.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_react20 = __toESM(require_react(), 1);

// app/components/builder/PolicyTrigger.tsx
var import_react15 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react = __toESM(require_react(), 1);
function i(e2, o6) {
  let [u4, t] = (0, import_react.useState)(e2), r2 = s(e2);
  return l(() => t(r2.current), [r2, t, ...o6]), u4;
}

// node_modules/@headlessui/react/dist/utils/form.js
function e(i3 = {}, s4 = null, t = []) {
  for (let [r2, n3] of Object.entries(i3))
    o4(t, f(s4, r2), n3);
  return t;
}
function f(i3, s4) {
  return i3 ? i3 + "[" + s4 + "]" : s4;
}
function o4(i3, s4, t) {
  if (Array.isArray(t))
    for (let [r2, n3] of t.entries())
      o4(i3, f(s4, r2.toString()), n3);
  else
    t instanceof Date ? i3.push([s4, t.toISOString()]) : typeof t == "boolean" ? i3.push([s4, t ? "1" : "0"]) : typeof t == "string" ? i3.push([s4, t]) : typeof t == "number" ? i3.push([s4, `${t}`]) : t == null ? i3.push([s4, ""]) : e(t, s4, i3);
}
function p3(i3) {
  var t, r2;
  let s4 = (t = i3 == null ? void 0 : i3.form) != null ? t : i3.closest("form");
  if (s4) {
    for (let n3 of s4.elements)
      if (n3 !== i3 && (n3.tagName === "INPUT" && n3.type === "submit" || n3.tagName === "BUTTON" && n3.type === "submit" || n3.nodeName === "INPUT" && n3.type === "image")) {
        n3.click();
        return;
      }
    (r2 = s4.requestSubmit) == null || r2.call(s4);
  }
}

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react2 = __toESM(require_react(), 1);
function T(l2, r2, c4) {
  let [i3, s4] = (0, import_react2.useState)(c4), e2 = l2 !== void 0, t = (0, import_react2.useRef)(e2), u4 = (0, import_react2.useRef)(false), d3 = (0, import_react2.useRef)(false);
  return e2 && !t.current && !u4.current ? (u4.current = true, t.current = e2, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e2 && t.current && !d3.current && (d3.current = true, t.current = e2, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e2 ? l2 : i3, o2((n3) => (e2 || s4(n3), r2 == null ? void 0 : r2(n3)))];
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var we = ((e2) => (e2[e2.Open = 0] = "Open", e2[e2.Closed = 1] = "Closed", e2))(we || {});
var Ue = ((e2) => (e2[e2.Single = 0] = "Single", e2[e2.Multi = 1] = "Multi", e2))(Ue || {});
var Ne = ((e2) => (e2[e2.Pointer = 0] = "Pointer", e2[e2.Other = 1] = "Other", e2))(Ne || {});
var He = ((n3) => (n3[n3.OpenCombobox = 0] = "OpenCombobox", n3[n3.CloseCombobox = 1] = "CloseCombobox", n3[n3.GoToOption = 2] = "GoToOption", n3[n3.RegisterOption = 3] = "RegisterOption", n3[n3.UnregisterOption = 4] = "UnregisterOption", n3[n3.RegisterLabel = 5] = "RegisterLabel", n3))(He || {});
function ae(t, a2 = (e2) => e2) {
  let e2 = t.activeOptionIndex !== null ? t.options[t.activeOptionIndex] : null, r2 = I2(a2(t.options.slice()), (b3) => b3.dataRef.current.domRef.current), l2 = e2 ? r2.indexOf(e2) : null;
  return l2 === -1 && (l2 = null), { options: r2, activeOptionIndex: l2 };
}
var Ge = { [1](t) {
  var a2;
  return (a2 = t.dataRef.current) != null && a2.disabled || t.comboboxState === 1 ? t : { ...t, activeOptionIndex: null, comboboxState: 1 };
}, [0](t) {
  var e2;
  if ((e2 = t.dataRef.current) != null && e2.disabled || t.comboboxState === 0)
    return t;
  let a2 = t.activeOptionIndex;
  if (t.dataRef.current) {
    let { isSelected: r2 } = t.dataRef.current, l2 = t.options.findIndex((b3) => r2(b3.dataRef.current.value));
    l2 !== -1 && (a2 = l2);
  }
  return { ...t, comboboxState: 0, activeOptionIndex: a2 };
}, [2](t, a2) {
  var l2, b3, n3, d3;
  if ((l2 = t.dataRef.current) != null && l2.disabled || (b3 = t.dataRef.current) != null && b3.optionsRef.current && !((n3 = t.dataRef.current) != null && n3.optionsPropsRef.current.static) && t.comboboxState === 1)
    return t;
  let e2 = ae(t);
  if (e2.activeOptionIndex === null) {
    let o6 = e2.options.findIndex((i3) => !i3.dataRef.current.disabled);
    o6 !== -1 && (e2.activeOptionIndex = o6);
  }
  let r2 = x(a2, { resolveItems: () => e2.options, resolveActiveIndex: () => e2.activeOptionIndex, resolveId: (o6) => o6.id, resolveDisabled: (o6) => o6.dataRef.current.disabled });
  return { ...t, ...e2, activeOptionIndex: r2, activationTrigger: (d3 = a2.trigger) != null ? d3 : 1 };
}, [3]: (t, a2) => {
  var b3, n3;
  let e2 = { id: a2.id, dataRef: a2.dataRef }, r2 = ae(t, (d3) => [...d3, e2]);
  t.activeOptionIndex === null && (b3 = t.dataRef.current) != null && b3.isSelected(a2.dataRef.current.value) && (r2.activeOptionIndex = r2.options.indexOf(e2));
  let l2 = { ...t, ...r2, activationTrigger: 1 };
  return (n3 = t.dataRef.current) != null && n3.__demoMode && t.dataRef.current.value === void 0 && (l2.activeOptionIndex = 0), l2;
}, [4]: (t, a2) => {
  let e2 = ae(t, (r2) => {
    let l2 = r2.findIndex((b3) => b3.id === a2.id);
    return l2 !== -1 && r2.splice(l2, 1), r2;
  });
  return { ...t, ...e2, activationTrigger: 1 };
}, [5]: (t, a2) => ({ ...t, labelId: a2.id }) };
var le = (0, import_react3.createContext)(null);
le.displayName = "ComboboxActionsContext";
function Z(t) {
  let a2 = (0, import_react3.useContext)(le);
  if (a2 === null) {
    let e2 = new Error(`<${t} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e2, Z), e2;
  }
  return a2;
}
var ie = (0, import_react3.createContext)(null);
ie.displayName = "ComboboxDataContext";
function J(t) {
  let a2 = (0, import_react3.useContext)(ie);
  if (a2 === null) {
    let e2 = new Error(`<${t} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e2, J), e2;
  }
  return a2;
}
function Xe(t, a2) {
  return u(a2.type, Ge, t, a2);
}
var je = import_react3.Fragment;
function Je(t, a2) {
  let { value: e2, defaultValue: r2, onChange: l2, form: b3, name: n3, by: d3 = (u4, T2) => u4 === T2, disabled: o6 = false, __demoMode: i3 = false, nullable: A3 = false, multiple: O = false, ...C2 } = t, [f4 = O ? [] : void 0, g] = T(e2, l2, r2), [m3, c4] = (0, import_react3.useReducer)(Xe, { dataRef: (0, import_react3.createRef)(), comboboxState: i3 ? 0 : 1, options: [], activeOptionIndex: null, activationTrigger: 1, labelId: null }), D2 = (0, import_react3.useRef)(false), _2 = (0, import_react3.useRef)({ static: false, hold: false }), w = (0, import_react3.useRef)(null), U = (0, import_react3.useRef)(null), N = (0, import_react3.useRef)(null), K = (0, import_react3.useRef)(null), h3 = o2(typeof d3 == "string" ? (u4, T2) => {
    let v2 = d3;
    return (u4 == null ? void 0 : u4[v2]) === (T2 == null ? void 0 : T2[v2]);
  } : d3), H3 = (0, import_react3.useCallback)((u4) => u(p4.mode, { [1]: () => f4.some((T2) => h3(T2, u4)), [0]: () => h3(f4, u4) }), [f4]), p4 = (0, import_react3.useMemo)(() => ({ ...m3, optionsPropsRef: _2, labelRef: w, inputRef: U, buttonRef: N, optionsRef: K, value: f4, defaultValue: r2, disabled: o6, mode: O ? 1 : 0, get activeOptionIndex() {
    if (D2.current && m3.activeOptionIndex === null && m3.options.length > 0) {
      let u4 = m3.options.findIndex((T2) => !T2.dataRef.current.disabled);
      if (u4 !== -1)
        return u4;
    }
    return m3.activeOptionIndex;
  }, compare: h3, isSelected: H3, nullable: A3, __demoMode: i3 }), [f4, r2, o6, O, A3, i3, m3]), y3 = (0, import_react3.useRef)(p4.activeOptionIndex !== null ? p4.options[p4.activeOptionIndex] : null);
  (0, import_react3.useEffect)(() => {
    let u4 = p4.activeOptionIndex !== null ? p4.options[p4.activeOptionIndex] : null;
    y3.current !== u4 && (y3.current = u4);
  }), l(() => {
    m3.dataRef.current = p4;
  }, [p4]), h([p4.buttonRef, p4.inputRef, p4.optionsRef], () => te2.closeCombobox(), p4.comboboxState === 0);
  let E2 = (0, import_react3.useMemo)(() => ({ open: p4.comboboxState === 0, disabled: o6, activeIndex: p4.activeOptionIndex, activeOption: p4.activeOptionIndex === null ? null : p4.options[p4.activeOptionIndex].dataRef.current.value, value: f4 }), [p4, o6, f4]), B = o2((u4) => {
    let T2 = p4.options.find((v2) => v2.id === u4);
    T2 && V(T2.dataRef.current.value);
  }), s4 = o2(() => {
    if (p4.activeOptionIndex !== null) {
      let { dataRef: u4, id: T2 } = p4.options[p4.activeOptionIndex];
      V(u4.current.value), te2.goToOption(a.Specific, T2);
    }
  }), W = o2(() => {
    c4({ type: 0 }), D2.current = true;
  }), L2 = o2(() => {
    c4({ type: 1 }), D2.current = false;
  }), $ = o2((u4, T2, v2) => (D2.current = false, u4 === a.Specific ? c4({ type: 2, focus: a.Specific, id: T2, trigger: v2 }) : c4({ type: 2, focus: u4, trigger: v2 }))), P = o2((u4, T2) => (c4({ type: 3, id: u4, dataRef: T2 }), () => {
    var v2;
    ((v2 = y3.current) == null ? void 0 : v2.id) === u4 && (D2.current = true), c4({ type: 4, id: u4 });
  })), F3 = o2((u4) => (c4({ type: 5, id: u4 }), () => c4({ type: 5, id: null }))), V = o2((u4) => u(p4.mode, { [0]() {
    return g == null ? void 0 : g(u4);
  }, [1]() {
    let T2 = p4.value.slice(), v2 = T2.findIndex((q) => h3(q, u4));
    return v2 === -1 ? T2.push(u4) : T2.splice(v2, 1), g == null ? void 0 : g(T2);
  } })), te2 = (0, import_react3.useMemo)(() => ({ onChange: V, registerOption: P, registerLabel: F3, goToOption: $, closeCombobox: L2, openCombobox: W, selectActiveOption: s4, selectOption: B }), []), Te = a2 === null ? {} : { ref: a2 }, z = (0, import_react3.useRef)(null), me = p();
  return (0, import_react3.useEffect)(() => {
    z.current && r2 !== void 0 && me.addEventListener(z.current, "reset", () => {
      g == null || g(r2);
    });
  }, [z, g]), import_react3.default.createElement(le.Provider, { value: te2 }, import_react3.default.createElement(ie.Provider, { value: p4 }, import_react3.default.createElement(c2, { value: u(p4.comboboxState, { [0]: d.Open, [1]: d.Closed }) }, n3 != null && f4 != null && e({ [n3]: f4 }).map(([u4, T2], v2) => import_react3.default.createElement(c, { features: p2.Hidden, ref: v2 === 0 ? (q) => {
    var ue;
    z.current = (ue = q == null ? void 0 : q.closest("form")) != null ? ue : null;
  } : void 0, ...R({ key: u4, as: "input", type: "hidden", hidden: true, readOnly: true, form: b3, name: u4, value: T2 }) })), X({ ourProps: Te, theirProps: C2, slot: E2, defaultTag: je, name: "Combobox" }))));
}
var Ke = "input";
function We(t, a2) {
  var p4, y3, E2, B;
  let e2 = I(), { id: r2 = `headlessui-combobox-input-${e2}`, onChange: l2, displayValue: b3, type: n3 = "text", ...d3 } = t, o6 = J("Combobox.Input"), i3 = Z("Combobox.Input"), A3 = y(o6.inputRef, a2), O = n2(o6.inputRef), C2 = (0, import_react3.useRef)(false), f4 = p(), g = o2(() => {
    i3.onChange(null), o6.optionsRef.current && (o6.optionsRef.current.scrollTop = 0), i3.goToOption(a.Nothing);
  }), m3 = function() {
    var s4;
    return typeof b3 == "function" && o6.value !== void 0 ? (s4 = b3(o6.value)) != null ? s4 : "" : typeof o6.value == "string" ? o6.value : "";
  }();
  m(([s4, W], [L2, $]) => {
    if (C2.current)
      return;
    let P = o6.inputRef.current;
    P && (($ === 0 && W === 1 || s4 !== L2) && (P.value = s4), requestAnimationFrame(() => {
      if (C2.current || !P || (O == null ? void 0 : O.activeElement) !== P)
        return;
      let { selectionStart: F3, selectionEnd: V } = P;
      Math.abs((V != null ? V : 0) - (F3 != null ? F3 : 0)) === 0 && F3 === 0 && P.setSelectionRange(P.value.length, P.value.length);
    }));
  }, [m3, o6.comboboxState, O]), m(([s4], [W]) => {
    if (s4 === 0 && W === 1) {
      if (C2.current)
        return;
      let L2 = o6.inputRef.current;
      if (!L2)
        return;
      let $ = L2.value, { selectionStart: P, selectionEnd: F3, selectionDirection: V } = L2;
      L2.value = "", L2.value = $, V !== null ? L2.setSelectionRange(P, F3, V) : L2.setSelectionRange(P, F3);
    }
  }, [o6.comboboxState]);
  let c4 = (0, import_react3.useRef)(false), D2 = o2(() => {
    c4.current = true;
  }), _2 = o2(() => {
    f4.nextFrame(() => {
      c4.current = false;
    });
  }), w = o2((s4) => {
    switch (C2.current = true, s4.key) {
      case o3.Enter:
        if (C2.current = false, o6.comboboxState !== 0 || c4.current)
          return;
        if (s4.preventDefault(), s4.stopPropagation(), o6.activeOptionIndex === null) {
          i3.closeCombobox();
          return;
        }
        i3.selectActiveOption(), o6.mode === 0 && i3.closeCombobox();
        break;
      case o3.ArrowDown:
        return C2.current = false, s4.preventDefault(), s4.stopPropagation(), u(o6.comboboxState, { [0]: () => {
          i3.goToOption(a.Next);
        }, [1]: () => {
          i3.openCombobox();
        } });
      case o3.ArrowUp:
        return C2.current = false, s4.preventDefault(), s4.stopPropagation(), u(o6.comboboxState, { [0]: () => {
          i3.goToOption(a.Previous);
        }, [1]: () => {
          i3.openCombobox(), f4.nextFrame(() => {
            o6.value || i3.goToOption(a.Last);
          });
        } });
      case o3.Home:
        if (s4.shiftKey)
          break;
        return C2.current = false, s4.preventDefault(), s4.stopPropagation(), i3.goToOption(a.First);
      case o3.PageUp:
        return C2.current = false, s4.preventDefault(), s4.stopPropagation(), i3.goToOption(a.First);
      case o3.End:
        if (s4.shiftKey)
          break;
        return C2.current = false, s4.preventDefault(), s4.stopPropagation(), i3.goToOption(a.Last);
      case o3.PageDown:
        return C2.current = false, s4.preventDefault(), s4.stopPropagation(), i3.goToOption(a.Last);
      case o3.Escape:
        return C2.current = false, o6.comboboxState !== 0 ? void 0 : (s4.preventDefault(), o6.optionsRef.current && !o6.optionsPropsRef.current.static && s4.stopPropagation(), o6.nullable && o6.mode === 0 && o6.value === null && g(), i3.closeCombobox());
      case o3.Tab:
        if (C2.current = false, o6.comboboxState !== 0)
          return;
        o6.mode === 0 && i3.selectActiveOption(), i3.closeCombobox();
        break;
    }
  }), U = o2((s4) => {
    l2 == null || l2(s4), o6.nullable && o6.mode === 0 && s4.target.value === "" && g(), i3.openCombobox();
  }), N = o2(() => {
    C2.current = false;
  }), K = i(() => {
    if (o6.labelId)
      return [o6.labelId].join(" ");
  }, [o6.labelId]), h3 = (0, import_react3.useMemo)(() => ({ open: o6.comboboxState === 0, disabled: o6.disabled }), [o6]), H3 = { ref: A3, id: r2, role: "combobox", type: n3, "aria-controls": (p4 = o6.optionsRef.current) == null ? void 0 : p4.id, "aria-expanded": o6.comboboxState === 0, "aria-activedescendant": o6.activeOptionIndex === null || (y3 = o6.options[o6.activeOptionIndex]) == null ? void 0 : y3.id, "aria-labelledby": K, "aria-autocomplete": "list", defaultValue: (B = (E2 = t.defaultValue) != null ? E2 : o6.defaultValue !== void 0 ? b3 == null ? void 0 : b3(o6.defaultValue) : null) != null ? B : o6.defaultValue, disabled: o6.disabled, onCompositionStart: D2, onCompositionEnd: _2, onKeyDown: w, onChange: U, onBlur: N };
  return X({ ourProps: H3, theirProps: d3, slot: h3, defaultTag: Ke, name: "Combobox.Input" });
}
var $e = "button";
function qe(t, a2) {
  var g;
  let e2 = J("Combobox.Button"), r2 = Z("Combobox.Button"), l2 = y(e2.buttonRef, a2), b3 = I(), { id: n3 = `headlessui-combobox-button-${b3}`, ...d3 } = t, o6 = p(), i3 = o2((m3) => {
    switch (m3.key) {
      case o3.ArrowDown:
        return m3.preventDefault(), m3.stopPropagation(), e2.comboboxState === 1 && r2.openCombobox(), o6.nextFrame(() => {
          var c4;
          return (c4 = e2.inputRef.current) == null ? void 0 : c4.focus({ preventScroll: true });
        });
      case o3.ArrowUp:
        return m3.preventDefault(), m3.stopPropagation(), e2.comboboxState === 1 && (r2.openCombobox(), o6.nextFrame(() => {
          e2.value || r2.goToOption(a.Last);
        })), o6.nextFrame(() => {
          var c4;
          return (c4 = e2.inputRef.current) == null ? void 0 : c4.focus({ preventScroll: true });
        });
      case o3.Escape:
        return e2.comboboxState !== 0 ? void 0 : (m3.preventDefault(), e2.optionsRef.current && !e2.optionsPropsRef.current.static && m3.stopPropagation(), r2.closeCombobox(), o6.nextFrame(() => {
          var c4;
          return (c4 = e2.inputRef.current) == null ? void 0 : c4.focus({ preventScroll: true });
        }));
      default:
        return;
    }
  }), A3 = o2((m3) => {
    if (r(m3.currentTarget))
      return m3.preventDefault();
    e2.comboboxState === 0 ? r2.closeCombobox() : (m3.preventDefault(), r2.openCombobox()), o6.nextFrame(() => {
      var c4;
      return (c4 = e2.inputRef.current) == null ? void 0 : c4.focus({ preventScroll: true });
    });
  }), O = i(() => {
    if (e2.labelId)
      return [e2.labelId, n3].join(" ");
  }, [e2.labelId, n3]), C2 = (0, import_react3.useMemo)(() => ({ open: e2.comboboxState === 0, disabled: e2.disabled, value: e2.value }), [e2]), f4 = { ref: l2, id: n3, type: s2(t, e2.buttonRef), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (g = e2.optionsRef.current) == null ? void 0 : g.id, "aria-expanded": e2.comboboxState === 0, "aria-labelledby": O, disabled: e2.disabled, onClick: A3, onKeyDown: i3 };
  return X({ ourProps: f4, theirProps: d3, slot: C2, defaultTag: $e, name: "Combobox.Button" });
}
var Qe = "label";
function Ye(t, a2) {
  let e2 = I(), { id: r2 = `headlessui-combobox-label-${e2}`, ...l2 } = t, b3 = J("Combobox.Label"), n3 = Z("Combobox.Label"), d3 = y(b3.labelRef, a2);
  l(() => n3.registerLabel(r2), [r2]);
  let o6 = o2(() => {
    var O;
    return (O = b3.inputRef.current) == null ? void 0 : O.focus({ preventScroll: true });
  }), i3 = (0, import_react3.useMemo)(() => ({ open: b3.comboboxState === 0, disabled: b3.disabled }), [b3]);
  return X({ ourProps: { ref: d3, id: r2, onClick: o6 }, theirProps: l2, slot: i3, defaultTag: Qe, name: "Combobox.Label" });
}
var Ze = "ul";
var ze = S.RenderStrategy | S.Static;
function eo(t, a2) {
  let e2 = I(), { id: r2 = `headlessui-combobox-options-${e2}`, hold: l2 = false, ...b3 } = t, n3 = J("Combobox.Options"), d3 = y(n3.optionsRef, a2), o6 = C(), i3 = (() => o6 !== null ? (o6 & d.Open) === d.Open : n3.comboboxState === 0)();
  l(() => {
    var f4;
    n3.optionsPropsRef.current.static = (f4 = t.static) != null ? f4 : false;
  }, [n3.optionsPropsRef, t.static]), l(() => {
    n3.optionsPropsRef.current.hold = l2;
  }, [n3.optionsPropsRef, l2]), F({ container: n3.optionsRef.current, enabled: n3.comboboxState === 0, accept(f4) {
    return f4.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : f4.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(f4) {
    f4.setAttribute("role", "none");
  } });
  let A3 = i(() => {
    var f4, g;
    return (g = n3.labelId) != null ? g : (f4 = n3.buttonRef.current) == null ? void 0 : f4.id;
  }, [n3.labelId, n3.buttonRef.current]), O = (0, import_react3.useMemo)(() => ({ open: n3.comboboxState === 0 }), [n3]), C2 = { "aria-labelledby": A3, role: "listbox", "aria-multiselectable": n3.mode === 1 ? true : void 0, id: r2, ref: d3 };
  return X({ ourProps: C2, theirProps: b3, slot: O, defaultTag: Ze, features: ze, visible: i3, name: "Combobox.Options" });
}
var oo = "li";
function to(t, a2) {
  var H3, p4;
  let e2 = I(), { id: r2 = `headlessui-combobox-option-${e2}`, disabled: l2 = false, value: b3, ...n3 } = t, d3 = J("Combobox.Option"), o6 = Z("Combobox.Option"), i3 = d3.activeOptionIndex !== null ? d3.options[d3.activeOptionIndex].id === r2 : false, A3 = d3.isSelected(b3), O = (0, import_react3.useRef)(null), C2 = s({ disabled: l2, value: b3, domRef: O, textValue: (p4 = (H3 = O.current) == null ? void 0 : H3.textContent) == null ? void 0 : p4.toLowerCase() }), f4 = y(a2, O), g = o2(() => o6.selectOption(r2));
  l(() => o6.registerOption(r2, C2), [C2, r2]);
  let m3 = (0, import_react3.useRef)(!d3.__demoMode);
  l(() => {
    if (!d3.__demoMode)
      return;
    let y3 = o();
    return y3.requestAnimationFrame(() => {
      m3.current = true;
    }), y3.dispose;
  }, []), l(() => {
    if (d3.comboboxState !== 0 || !i3 || !m3.current || d3.activationTrigger === 0)
      return;
    let y3 = o();
    return y3.requestAnimationFrame(() => {
      var E2, B;
      (B = (E2 = O.current) == null ? void 0 : E2.scrollIntoView) == null || B.call(E2, { block: "nearest" });
    }), y3.dispose;
  }, [O, i3, d3.comboboxState, d3.activationTrigger, d3.activeOptionIndex]);
  let c4 = o2((y3) => {
    if (l2)
      return y3.preventDefault();
    g(), d3.mode === 0 && o6.closeCombobox(), n() || requestAnimationFrame(() => {
      var E2;
      return (E2 = d3.inputRef.current) == null ? void 0 : E2.focus();
    });
  }), D2 = o2(() => {
    if (l2)
      return o6.goToOption(a.Nothing);
    o6.goToOption(a.Specific, r2);
  }), _2 = u2(), w = o2((y3) => _2.update(y3)), U = o2((y3) => {
    _2.wasMoved(y3) && (l2 || i3 || o6.goToOption(a.Specific, r2, 0));
  }), N = o2((y3) => {
    _2.wasMoved(y3) && (l2 || i3 && (d3.optionsPropsRef.current.hold || o6.goToOption(a.Nothing)));
  }), K = (0, import_react3.useMemo)(() => ({ active: i3, selected: A3, disabled: l2 }), [i3, A3, l2]);
  return X({ ourProps: { id: r2, ref: f4, role: "option", tabIndex: l2 === true ? void 0 : -1, "aria-disabled": l2 === true ? true : void 0, "aria-selected": A3, disabled: void 0, onClick: c4, onFocus: D2, onPointerEnter: w, onMouseEnter: w, onPointerMove: U, onMouseMove: U, onPointerLeave: N, onMouseLeave: N }, theirProps: n3, slot: K, defaultTag: oo, name: "Combobox.Option" });
}
var no = D(Je);
var ro = D(qe);
var ao = D(We);
var lo = D(Ye);
var io = D(eo);
var uo = D(to);
var qo = Object.assign(no, { Input: ao, Button: ro, Label: lo, Options: io, Option: uo });

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react4 = __toESM(require_react(), 1);
var d2 = (0, import_react4.createContext)(null);
function u3() {
  let o6 = (0, import_react4.useContext)(d2);
  if (o6 === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, u3), t;
  }
  return o6;
}
function H() {
  let [o6, t] = (0, import_react4.useState)([]);
  return [o6.length > 0 ? o6.join(" ") : void 0, (0, import_react4.useMemo)(() => function(e2) {
    let s4 = o2((r2) => (t((l2) => [...l2, r2]), () => t((l2) => {
      let n3 = l2.slice(), p4 = n3.indexOf(r2);
      return p4 !== -1 && n3.splice(p4, 1), n3;
    }))), a2 = (0, import_react4.useMemo)(() => ({ register: s4, slot: e2.slot, name: e2.name, props: e2.props }), [s4, e2.slot, e2.name, e2.props]);
    return import_react4.default.createElement(d2.Provider, { value: a2 }, e2.children);
  }, [t])];
}
var A = "label";
function h2(o6, t) {
  let i3 = I(), { id: e2 = `headlessui-label-${i3}`, passive: s4 = false, ...a2 } = o6, r2 = u3(), l2 = y(t);
  l(() => r2.register(e2), [e2, r2.register]);
  let n3 = { ref: l2, ...r2.props, id: e2 };
  return s4 && ("onClick" in n3 && (delete n3.htmlFor, delete n3.onClick), "onClick" in a2 && delete a2.onClick), X({ ourProps: n3, theirProps: a2, slot: r2.slot || {}, defaultTag: A, name: r2.name || "Label" });
}
var v = D(h2);
var M3 = Object.assign(v, {});

// node_modules/@headlessui/react/dist/components/switch/switch.js
var import_react5 = __toESM(require_react(), 1);
var y2 = (0, import_react5.createContext)(null);
y2.displayName = "GroupContext";
var Y = import_react5.Fragment;
function Z2(s4) {
  var d3;
  let [n3, p4] = (0, import_react5.useState)(null), [c4, f4] = H(), [r2, h3] = M(), l2 = (0, import_react5.useMemo)(() => ({ switch: n3, setSwitch: p4, labelledby: c4, describedby: r2 }), [n3, p4, c4, r2]), T2 = {}, b3 = s4;
  return import_react5.default.createElement(h3, { name: "Switch.Description" }, import_react5.default.createElement(f4, { name: "Switch.Label", props: { htmlFor: (d3 = l2.switch) == null ? void 0 : d3.id, onClick(t) {
    n3 && (t.currentTarget.tagName === "LABEL" && t.preventDefault(), n3.click(), n3.focus({ preventScroll: true }));
  } } }, import_react5.default.createElement(y2.Provider, { value: l2 }, X({ ourProps: T2, theirProps: b3, defaultTag: Y, name: "Switch.Group" }))));
}
var ee2 = "button";
function te(s4, n3) {
  let p4 = I(), { id: c4 = `headlessui-switch-${p4}`, checked: f4, defaultChecked: r2 = false, onChange: h3, name: l2, value: T2, form: b3, ...d3 } = s4, t = (0, import_react5.useContext)(y2), u4 = (0, import_react5.useRef)(null), D2 = y(u4, n3, t === null ? null : t.setSwitch), [o6, a2] = T(f4, h3, r2), S3 = o2(() => a2 == null ? void 0 : a2(!o6)), C2 = o2((e2) => {
    if (r(e2.currentTarget))
      return e2.preventDefault();
    e2.preventDefault(), S3();
  }), L2 = o2((e2) => {
    e2.key === o3.Space ? (e2.preventDefault(), S3()) : e2.key === o3.Enter && p3(e2.currentTarget);
  }), v2 = o2((e2) => e2.preventDefault()), G = (0, import_react5.useMemo)(() => ({ checked: o6 }), [o6]), R2 = { id: c4, ref: D2, role: "switch", type: s2(s4, u4), tabIndex: 0, "aria-checked": o6, "aria-labelledby": t == null ? void 0 : t.labelledby, "aria-describedby": t == null ? void 0 : t.describedby, onClick: C2, onKeyUp: L2, onKeyPress: v2 }, k = p();
  return (0, import_react5.useEffect)(() => {
    var w;
    let e2 = (w = u4.current) == null ? void 0 : w.closest("form");
    e2 && r2 !== void 0 && k.addEventListener(e2, "reset", () => {
      a2(r2);
    });
  }, [u4, a2]), import_react5.default.createElement(import_react5.default.Fragment, null, l2 != null && o6 && import_react5.default.createElement(c, { features: p2.Hidden, ...R({ as: "input", type: "checkbox", hidden: true, readOnly: true, form: b3, checked: o6, name: l2, value: T2 }) }), X({ ourProps: R2, theirProps: d3, slot: G, defaultTag: ee2, name: "Switch" }));
}
var ne = D(te);
var re = Z2;
var Ge2 = Object.assign(ne, { Group: re, Label: M3, Description: b });

// app/components/builder/triggers/TransferTrigger.tsx
var import_react14 = __toESM(require_react(), 1);

// app/components/builder/statements/Condition.tsx
var import_react9 = __toESM(require_react(), 1);

// app/components/builder/utils/DecisionPathLines.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/utils/DecisionPathLines.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/utils/DecisionPathLines.tsx"
  );
  import.meta.hot.lastModified = "1708356365265.6802";
}
var DecisionPathLines = ({
  minWidth = "min-w-[512px]"
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-5 items-center justify-center flex flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classNames(minWidth, "h-5 flex flex-row"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/2 h-full flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-1/2 shrink-0" }, void 0, false, {
          fileName: "app/components/builder/utils/DecisionPathLines.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-1/2 shrink-0 border-r border-0 border-black" }, void 0, false, {
          fileName: "app/components/builder/utils/DecisionPathLines.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/utils/DecisionPathLines.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/2 h-full flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-1/2 shrink-0 border-b-2 border-0 border-black" }, void 0, false, {
          fileName: "app/components/builder/utils/DecisionPathLines.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-1/2 shrink-0 border-l-2 border-t border-0 border-black" }, void 0, false, {
          fileName: "app/components/builder/utils/DecisionPathLines.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/utils/DecisionPathLines.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/utils/DecisionPathLines.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-5 w-10 shrink-0 flex flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/2 h-full flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-1/2 shrink-0 border-r-2 border-b-2 border-0 border-black" }, void 0, false, {
          fileName: "app/components/builder/utils/DecisionPathLines.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-1/2 shrink-0 border-t border-0 border-black" }, void 0, false, {
          fileName: "app/components/builder/utils/DecisionPathLines.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/utils/DecisionPathLines.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/2 h-full flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-1/2 shrink-0 border-l border-b-2 border-0 border-black" }, void 0, false, {
          fileName: "app/components/builder/utils/DecisionPathLines.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-1/2 shrink-0 border-t border-0 border-black" }, void 0, false, {
          fileName: "app/components/builder/utils/DecisionPathLines.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/utils/DecisionPathLines.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/utils/DecisionPathLines.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classNames(minWidth, "h-5 flex flex-row"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/2 h-full flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-1/2 shrink-0 border-b-2 border-0 border-black" }, void 0, false, {
          fileName: "app/components/builder/utils/DecisionPathLines.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-1/2 shrink-0 border-r-2 border-t border-0 border-black" }, void 0, false, {
          fileName: "app/components/builder/utils/DecisionPathLines.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/utils/DecisionPathLines.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/2 h-full flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-1/2 shrink-0" }, void 0, false, {
          fileName: "app/components/builder/utils/DecisionPathLines.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-1/2 shrink-0 border-l border-0 border-black" }, void 0, false, {
          fileName: "app/components/builder/utils/DecisionPathLines.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/utils/DecisionPathLines.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/utils/DecisionPathLines.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/utils/DecisionPathLines.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c = DecisionPathLines;
var DecisionPathLines_default = DecisionPathLines;
var _c;
$RefreshReg$(_c, "DecisionPathLines");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/statements/Yes.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/statements/Yes.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/statements/Yes.tsx"
  );
  import.meta.hot.lastModified = "1708356365265.3005";
}
var Yes = ({
  id = "",
  items = [],
  addItem,
  onRemove,
  onUpdate
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-slate-50 border-0 min-w-[512px] rounded-lg bg-green-50 shadow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-green-400/50 flex justify-center p-0 m-0 h-11 align-middle rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-none items-center justify-center rounded-lg bg-green-400 h-11 w-11", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckCircleIcon_default, { className: "text-white h-8 w-8", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/builder/statements/Yes.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/builder/statements/Yes.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left truncate", children: "Yes" }, void 0, false, {
        fileName: "app/components/builder/statements/Yes.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/statements/Yes.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Statement_default, { id, items, onRemove, addItem, onUpdate }, void 0, false, {
      fileName: "app/components/builder/statements/Yes.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/statements/Yes.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/builder/statements/Yes.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c2 = Yes;
var Yes_default = Yes;
var _c2;
$RefreshReg$(_c2, "Yes");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/statements/No.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/statements/No.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/statements/No.tsx"
  );
  import.meta.hot.lastModified = "1708356365264.9556";
}
var No = ({
  id = "",
  items = [],
  addItem,
  onRemove,
  onUpdate
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-slate-50 border-0 min-w-[512px] rounded-lg bg-red-50 shadow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-red-400/50 flex justify-center p-0 m-0 h-11 align-middle rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-none items-center justify-center rounded-lg bg-red-400 h-11 w-11", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(XCircleIcon_default, { className: "text-white h-8 w-8", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/builder/statements/No.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/builder/statements/No.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left truncate", children: "No" }, void 0, false, {
        fileName: "app/components/builder/statements/No.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/statements/No.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Statement_default, { id, items, onRemove, addItem, onUpdate }, void 0, false, {
      fileName: "app/components/builder/statements/No.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/statements/No.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/builder/statements/No.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c3 = No;
var No_default = No;
var _c3;
$RefreshReg$(_c3, "No");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/statements/AddStatement.tsx
var import_react6 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/statements/AddStatement.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/statements/AddStatement.tsx"
  );
  import.meta.hot.lastModified = "1708356365264.7356";
}
var statements = [{
  name: "Conditional Statement",
  description: "Add a statement that performs different actions depending on the outcome of a conditional check.",
  //render: (props: TriggerProps) => {return (<TransferTrigger {...props} />)},
  color: "bg-indigo-500",
  icon: CurrencyDollarIcon_default
}];
var actions = [{
  name: "Stop the Transfer",
  description: "Rejects the transfer and stops evaluating additional policies.",
  //render: (props: TriggerProps) => {return (<div>Policy Change</div>)},
  color: "bg-amber-500",
  icon: CodeBracketIcon_default
}, {
  name: "Allow the Transfer",
  description: "Approves the transfer and stops evaluating additional policies.",
  //render: (props: TriggerProps) => {return (<div>User Group Change</div>)},
  color: "bg-rose-500",
  icon: PhotoIcon_default
}, {
  name: "Pause the Transfer until Approval is Given",
  description: "Puts the transfer into a pending state, until a set of approvers can decide if the transfer should be approved or rejected.",
  //render: (props: TriggerProps) => {return (<div>User Permission Change</div>)},
  color: "bg-emerald-500",
  icon: DocumentIcon_default
}, {
  name: "No Decision",
  description: "Defer a decision to the next configured policy. If this is the final policy, the transfer will be approved.",
  //render: (props: TriggerProps) => {return (<div>User Permission Change</div>)},
  color: "bg-emerald-500",
  icon: DocumentIcon_default
}];
function AddStatement({
  open = false,
  setOpen
}) {
  _s();
  const [rawQuery, setRawQuery] = (0, import_react6.useState)("");
  const query = rawQuery.toLowerCase().replace(/^[#>]\s+/, "");
  const filteredStatements = rawQuery === "#" ? statements : query === "" ? statements.slice(0, 4) : rawQuery.startsWith(">") ? [] : statements.filter((statement) => statement.name.toLowerCase().includes(query));
  const filteredActions = rawQuery === ">" ? actions : query === "" ? actions.slice(0, 4) : rawQuery.startsWith("#") ? [] : actions.filter((action) => action.name.toLowerCase().includes(query));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(tt.Root, { show: open, as: import_react6.Fragment, afterLeave: () => setRawQuery(""), appear: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(_t, { as: "div", className: "relative z-10", onClose: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(tt.Child, { as: import_react6.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" }, void 0, false, {
      fileName: "app/components/builder/statements/AddStatement.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/builder/statements/AddStatement.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(tt.Child, { as: import_react6.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(_t.Panel, { className: "mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(qo, { onChange: () => {
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MagnifyingGlassIcon_default, { className: "pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 79,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(qo.Input, { className: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm", placeholder: "Select a Statement", onChange: (event) => setRawQuery(event.target.value) }, void 0, false, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 80,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/statements/AddStatement.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this),
      (filteredStatements.length > 0 || filteredActions.length > 0) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(qo.Options, { static: true, className: "max-h-80 transform-gpu scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2", children: [
        filteredStatements.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-xs font-semibold text-gray-900", children: "Control Statements" }, void 0, false, {
            fileName: "app/components/builder/statements/AddStatement.tsx",
            lineNumber: 85,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "-mx-4 mt-2 text-sm text-gray-700", children: filteredStatements.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(qo.Option, { value: project, className: ({
            active
          }) => classNames("flex cursor-default select-none rounded-xl p-3", active ? "bg-gray-100" : ""), children: ({
            active
          }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: classNames("flex h-10 w-10 flex-none items-center justify-center rounded-lg", project.color), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(project.icon, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/components/builder/statements/AddStatement.tsx",
              lineNumber: 94,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/components/builder/statements/AddStatement.tsx",
              lineNumber: 93,
              columnNumber: 35
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-4 flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: classNames("text-sm font-medium", active ? "text-gray-900" : "text-gray-700"), children: project.name }, void 0, false, {
                fileName: "app/components/builder/statements/AddStatement.tsx",
                lineNumber: 97,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: classNames("text-sm", active ? "text-gray-700" : "text-gray-500"), children: project.description }, void 0, false, {
                fileName: "app/components/builder/statements/AddStatement.tsx",
                lineNumber: 100,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/builder/statements/AddStatement.tsx",
              lineNumber: 96,
              columnNumber: 35
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/builder/statements/AddStatement.tsx",
            lineNumber: 92,
            columnNumber: 29
          }, this) }, index, false, {
            fileName: "app/components/builder/statements/AddStatement.tsx",
            lineNumber: 87,
            columnNumber: 71
          }, this)) }, void 0, false, {
            fileName: "app/components/builder/statements/AddStatement.tsx",
            lineNumber: 86,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 84,
          columnNumber: 55
        }, this),
        filteredActions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-xs font-semibold text-gray-900", children: "Actions" }, void 0, false, {
            fileName: "app/components/builder/statements/AddStatement.tsx",
            lineNumber: 109,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "-mx-4 mt-2 text-sm text-gray-700", children: filteredActions.map((action, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(qo.Option, { value: action, className: ({
            active
          }) => classNames("flex cursor-default select-none rounded-xl p-3", active ? "bg-gray-100" : ""), children: ({
            active
          }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: classNames("flex h-10 w-10 flex-none items-center justify-center rounded-lg", action.color), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(action.icon, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/components/builder/statements/AddStatement.tsx",
              lineNumber: 118,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/components/builder/statements/AddStatement.tsx",
              lineNumber: 117,
              columnNumber: 35
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-4 flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: classNames("text-sm font-medium", active ? "text-gray-900" : "text-gray-700"), children: action.name }, void 0, false, {
                fileName: "app/components/builder/statements/AddStatement.tsx",
                lineNumber: 121,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: classNames("text-sm", active ? "text-gray-700" : "text-gray-500"), children: action.description }, void 0, false, {
                fileName: "app/components/builder/statements/AddStatement.tsx",
                lineNumber: 124,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/builder/statements/AddStatement.tsx",
              lineNumber: 120,
              columnNumber: 35
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/builder/statements/AddStatement.tsx",
            lineNumber: 116,
            columnNumber: 29
          }, this) }, index, false, {
            fileName: "app/components/builder/statements/AddStatement.tsx",
            lineNumber: 111,
            columnNumber: 67
          }, this)) }, void 0, false, {
            fileName: "app/components/builder/statements/AddStatement.tsx",
            lineNumber: 110,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 108,
          columnNumber: 52
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/statements/AddStatement.tsx",
        lineNumber: 83,
        columnNumber: 83
      }, this),
      rawQuery === "?" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "px-6 py-14 text-center text-sm sm:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LifebuoyIcon_default, { className: "mx-auto h-6 w-6 text-gray-400", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 135,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-4 font-semibold text-gray-900", children: "Help with searching" }, void 0, false, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 136,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-2 text-gray-500", children: "Use this tool to quickly search for actions and statements across our entire platform. You can also use the search modifiers found in the footer below to limit the results to just actions or statements." }, void 0, false, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 137,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/statements/AddStatement.tsx",
        lineNumber: 134,
        columnNumber: 38
      }, this),
      query !== "" && rawQuery !== "?" && filteredStatements.length === 0 && filteredActions.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "px-6 py-14 text-center text-sm sm:px-14", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ExclamationTriangleIcon_default, { className: "mx-auto h-6 w-6 text-gray-400", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 144,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-4 font-semibold text-gray-900", children: "No results found" }, void 0, false, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 145,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-2 text-gray-500", children: "We couldn\u2019t find anything with that term. Please try again." }, void 0, false, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 146,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/statements/AddStatement.tsx",
        lineNumber: 143,
        columnNumber: 121
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-wrap items-center bg-gray-50 px-4 py-2.5 text-xs text-gray-700", children: [
        "Type",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("kbd", { className: classNames("mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2", rawQuery.startsWith("#") ? "border-indigo-600 text-indigo-600" : "border-gray-400 text-gray-900"), children: "#" }, void 0, false, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 151,
          columnNumber: 19
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sm:hidden", children: "for statements," }, void 0, false, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 154,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "hidden sm:inline", children: "to access statements," }, void 0, false, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 155,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("kbd", { className: classNames("mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2", rawQuery.startsWith(">") ? "border-indigo-600 text-indigo-600" : "border-gray-400 text-gray-900"), children: ">" }, void 0, false, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 156,
          columnNumber: 19
        }, this),
        " ",
        "for actions, and",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("kbd", { className: classNames("mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2", rawQuery === "?" ? "border-indigo-600 text-indigo-600" : "border-gray-400 text-gray-900"), children: "?" }, void 0, false, {
          fileName: "app/components/builder/statements/AddStatement.tsx",
          lineNumber: 160,
          columnNumber: 19
        }, this),
        " ",
        "for help."
      ] }, void 0, true, {
        fileName: "app/components/builder/statements/AddStatement.tsx",
        lineNumber: 149,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/statements/AddStatement.tsx",
      lineNumber: 77,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/builder/statements/AddStatement.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/builder/statements/AddStatement.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/builder/statements/AddStatement.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/statements/AddStatement.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/builder/statements/AddStatement.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(AddStatement, "rr7cS+M3f++UHVCb6ZuHe8Ucnkc=");
_c4 = AddStatement;
var _c4;
$RefreshReg$(_c4, "AddStatement");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/utils/SingleArrow.tsx
var import_react8 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/utils/SingleArrow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/utils/SingleArrow.tsx"
  );
  import.meta.hot.lastModified = "1708356365265.7915";
}
var SingleArrow = ({
  onClick
}) => {
  _s2();
  const [open, setOpen] = (0, import_react8.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AddStatement, { open, setOpen }, void 0, false, {
      fileName: "app/components/builder/utils/SingleArrow.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "p-2 flex h-10 justify-center items-start bg-no-repeat bg-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzIDMwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAsMCBMMTAsNTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMnB4IiBmaWxsPSJub25lIiAvPjxwYXRoIGQ9Ik0wLDMwIEwxMCw1MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIycHgiIGZpbGw9Im5vbmUiIC8+PHBhdGggZD0iTTEwLDUwIEwyMCwzMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIycHgiIGZpbGw9Im5vbmUiIC8+PC9zdmc+')]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: () => setOpen(true), className: "border-gray-300 border h-4 w-4 flex rounded-full justify-center items-center bg-slate-300 text-gray-900 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PlusIcon_default, { className: "h-3 w-3", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/components/builder/utils/SingleArrow.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/builder/utils/SingleArrow.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/builder/utils/SingleArrow.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/utils/SingleArrow.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s2(SingleArrow, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c5 = SingleArrow;
var SingleArrow_default = SingleArrow;
var _c5;
$RefreshReg$(_c5, "SingleArrow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/statements/WithGrouping.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/statements/WithGrouping.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/statements/WithGrouping.tsx"
  );
  import.meta.hot.lastModified = "1708356365265.2197";
}
var WithGrouping = ({
  rule,
  level = 0
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "border-l border-0 border-black flex flex-row p-0 m-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-2 p-0 m-0 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "border-b border-0 border-black grow" }, void 0, false, {
        fileName: "app/components/builder/statements/WithGrouping.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "border-0 grow" }, void 0, false, {
        fileName: "app/components/builder/statements/WithGrouping.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/statements/WithGrouping.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Rule_default, { rule, level }, void 0, false, {
      fileName: "app/components/builder/statements/WithGrouping.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/statements/WithGrouping.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c6 = WithGrouping;
var WithGrouping_default = WithGrouping;
var _c6;
$RefreshReg$(_c6, "WithGrouping");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/statements/Rule.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/statements/Rule.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/statements/Rule.tsx"
  );
  import.meta.hot.lastModified = "1708356365265.0422";
}
var Rule = ({
  rule,
  level = 0
}) => {
  const color = ["bg-orange-200/10", "bg-orange-200/20", "bg-orange-200/40", "bg-orange-200/60", "bg-orange-200/90"];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "p-2 w-full truncate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: classNames(color[Math.min(level, color.length - 1)], "border-slate-50 border-0 w-full rounded-lg shadow"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-center p-0 m-0 h-11 align-middle rounded-lg w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: classNames(rule.blockKind === "action" ? "bg-orange-400/40" : "bg-orange-400/10", "flex flex-none items-center justify-center rounded-lg h-11 w-11"), children: rule.blockKind === "action" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ShieldCheckIcon_default, { className: "text-white h-8 w-8", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/builder/statements/Rule.tsx",
        lineNumber: 33,
        columnNumber: 44
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CodeBracketIcon_default, { className: "text-white h-8 w-8", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/builder/statements/Rule.tsx",
        lineNumber: 33,
        columnNumber: 116
      }, this) }, void 0, false, {
        fileName: "app/components/builder/statements/Rule.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left w-full truncate", children: rule.name }, void 0, false, {
        fileName: "app/components/builder/statements/Rule.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/statements/Rule.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    rule.items.map((item, index) => {
      if (rule.items.length > 0) {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(WithGrouping_default, { rule: item, level: level + 1 }, index, false, {
          fileName: "app/components/builder/statements/Rule.tsx",
          lineNumber: 41,
          columnNumber: 18
        }, this);
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Rule, { rule: item, level: level + 1 }, index, false, {
        fileName: "app/components/builder/statements/Rule.tsx",
        lineNumber: 43,
        columnNumber: 16
      }, this);
    })
  ] }, void 0, true, {
    fileName: "app/components/builder/statements/Rule.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/builder/statements/Rule.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c7 = Rule;
var Rule_default = Rule;
var _c7;
$RefreshReg$(_c7, "Rule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/statements/Condition.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/statements/Condition.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/statements/Condition.tsx"
  );
  import.meta.hot.lastModified = "1708356365264.8738";
}
var ruleToQuestion = (rule) => {
  switch (rule.kind) {
    case "isUserOverTheirSpendingLimit": {
      if (rule.parameters && rule.parameters["spendingLimit"]) {
        const weiToEth = new BigDecimal("1000000000000000000");
        const amount = new BigDecimal(rule.parameters["spendingLimit"].amount).divide(weiToEth).toString();
        const hours = rule.parameters["spendingLimit"].hours;
        return `Is User Transferring more than ${amount} ETH in a ${hours} Hour Period?`;
      }
      return `Is User Transferring more than X ETH in a Y Hour Period?`;
    }
    case "isSendingToAddressOnDenyList": {
      return "Is User Sending to an Address on the Deny List?";
    }
    case "isSendingToAddressOnAllowList": {
      return "Is User Sending to an Address on the Allow List?";
    }
    case "isValueInList": {
      let ruleAsText = "Is";
      if (rule.parameters && rule.parameters["value"]) {
        if (rule.parameters.value["field"]) {
          switch (rule.parameters.value.field) {
            case "to": {
              ruleAsText += " User Transfering Funds to an Address in";
              break;
            }
            case "from": {
              ruleAsText += " User Transfering Funds from a Wallet in";
              break;
            }
            default: {
              ruleAsText += ` transaction.${rule.parameters.value.field} in`;
              break;
            }
          }
        } else if (rule.parameters.value["value"]) {
          ruleAsText += ` ${rule.parameters.value.value} in`;
        }
      } else {
        ruleAsText += ` [unspecified value] in`;
      }
      if (rule.parameters && rule.parameters["list"]) {
        if (rule.parameters.list.list) {
          ruleAsText += ` ${JSON.stringify(rule.parameters.list.list)}?`;
        } else if (rule.parameters.list.name) {
          ruleAsText += ` ${rule.parameters.list.name} list?`;
        }
      } else {
        ruleAsText += ` [unspecified] list?`;
      }
      return ruleAsText;
    }
    case "and": {
      return "all of";
    }
    case "or": {
      return "any one of";
    }
    case "not": {
      return "none of";
    }
    case "xor": {
      return "one and only one of";
    }
  }
  return "Is Condition Meet?";
};
var ruleToName = (rule) => {
  switch (rule.kind) {
    case "isUserOverTheirSpendingLimit": {
      if (rule.parameters && rule.parameters["spendingLimit"]) {
        const weiToEth = new BigDecimal("1000000000000000000");
        const amount = new BigDecimal(rule.parameters["spendingLimit"].amount).divide(weiToEth).toString();
        const hours = rule.parameters["spendingLimit"].hours;
        return `User is Transferring more than ${amount} ETH in a ${hours} Hour Period`;
      }
      return `User is Transferring more than X ETH in a Y Hour Period`;
    }
    case "isSendingToAddressOnDenyList": {
      return "User is Sending to an Address on the Deny List";
    }
    case "isSendingToAddressOnAllowList": {
      return "User is Sending to an Address on the Allow List";
    }
    case "isValueInList": {
      let ruleAsText = "";
      if (rule.parameters && rule.parameters["value"]) {
        if (rule.parameters.value["field"]) {
          switch (rule.parameters.value.field) {
            case "to": {
              ruleAsText += "User Transfering Funds to an Address is in";
              break;
            }
            case "from": {
              ruleAsText += "User Transfering Funds from a Wallet is in";
              break;
            }
            default: {
              ruleAsText += `transaction.${rule.parameters.value.field} is in`;
              break;
            }
          }
        } else if (rule.parameters.value["value"]) {
          ruleAsText += `${rule.parameters.value.value} is in`;
        }
      } else {
        ruleAsText += `[unspecified value] is in`;
      }
      if (rule.parameters && rule.parameters["list"]) {
        if (rule.parameters.list.list) {
          ruleAsText += ` ${JSON.stringify(rule.parameters.list.list)}`;
        } else if (rule.parameters.list.name) {
          ruleAsText += ` ${rule.parameters.list.name} list`;
        }
      } else {
        ruleAsText += ` [unspecified]`;
      }
      return ruleAsText;
    }
    case "and": {
      return "all of";
    }
    case "or": {
      return "any one of";
    }
    case "not": {
      return "none of";
    }
    case "xor": {
      return "one and only one of";
    }
  }
  return "Condition is Meet";
};
var policyItemToItem = (policyItem, items) => {
  const item = {
    blockKind: policyItem.kind === "and" ? "all" : policyItem.kind === "or" ? "any one" : policyItem.kind === "xor" ? "one and only one" : policyItem.kind === "not" ? "none" : "action",
    name: ruleToName(policyItem),
    asQuestion: ruleToQuestion(policyItem),
    items: []
  };
  const nextId = `${policyItem.id}:`;
  const childIdRegex = new RegExp(`^${nextId}[^:]+$`);
  const children = items.filter((next) => !!next.id.match(childIdRegex)).map((next) => policyItemToItem(next, items));
  item.items.push(...children);
  return item;
};
var Condition = ({
  id = "",
  items = [],
  addItem,
  onRemove,
  onUpdate
}) => {
  _s3();
  const [open, setOpen] = (0, import_react9.useState)(false);
  const [idCount, setIdCount] = (0, import_react9.useState)(0);
  const addRule = (rule) => {
    rule = rule || "";
    const newItem = {
      kind: rule,
      id: `${id}${rule}#${idCount}`
    };
    setIdCount(idCount + 1);
    addItem(newItem);
  };
  if (id.split(":").length > 10) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {}, void 0, false, {
      fileName: "app/components/builder/statements/Condition.tsx",
      lineNumber: 220,
      columnNumber: 12
    }, this);
  }
  let rules = items.filter((cur) => cur.id.startsWith(id + "if:")).reduce((all, cur) => {
    const idRegex = new RegExp(`^${id}if:[^:]+$`);
    if (cur.id.match(idRegex)) {
      all.push(policyItemToItem(cur, items));
    }
    return all;
  }, []);
  if (rules.length > 1) {
    rules = [{
      blockKind: "all",
      name: "all of",
      asQuestion: "all of",
      items: rules
    }];
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SingleArrow_default, { onClick: () => {
    } }, void 0, false, {
      fileName: "app/components/builder/statements/Condition.tsx",
      lineNumber: 238,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: classNames("border-slate-50 border-0 max-w-xl mx-auto", "rounded-lg bg-slate-50 shadow"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-stone-400/50 flex justify-center p-0 m-0 h-11 align-middle rounded-lg", onClick: () => setOpen(!open), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-none items-center justify-center rounded-lg bg-stone-400 h-11 w-11", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(QuestionMarkCircleIcon_default, { className: "text-white h-8 w-8", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/builder/statements/Condition.tsx",
          lineNumber: 242,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/builder/statements/Condition.tsx",
          lineNumber: 241,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left truncate", children: rules.length === 1 && rules[0].items.length === 0 ? rules[0].asQuestion : "Is Condition Meet?" }, void 0, false, {
          fileName: "app/components/builder/statements/Condition.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/statements/Condition.tsx",
        lineNumber: 240,
        columnNumber: 9
      }, this),
      (rules.length > 1 || rules.length === 1 && rules[0].items.length > 0) && open && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-slate-50 m-0 rounded-lg pb-2", children: rules.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Rule_default, { rule: item }, index, false, {
        fileName: "app/components/builder/statements/Condition.tsx",
        lineNumber: 249,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "app/components/builder/statements/Condition.tsx",
        lineNumber: 248,
        columnNumber: 91
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/statements/Condition.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DecisionPathLines_default, {}, void 0, false, {
        fileName: "app/components/builder/statements/Condition.tsx",
        lineNumber: 253,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "items-stretch justify-center flex rounded-lg m-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Yes_default, { id: id + "then:", items: items.filter((cur) => cur.id.startsWith(id + "then:")) || [], onRemove, addItem, onUpdate }, void 0, false, {
          fileName: "app/components/builder/statements/Condition.tsx",
          lineNumber: 255,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-10 shrink-0" }, void 0, false, {
          fileName: "app/components/builder/statements/Condition.tsx",
          lineNumber: 256,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(No_default, { id: id + "else:", items: items.filter((cur) => cur.id.startsWith(id + "else:")) || [], onRemove, addItem, onUpdate }, void 0, false, {
          fileName: "app/components/builder/statements/Condition.tsx",
          lineNumber: 257,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/statements/Condition.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/statements/Condition.tsx",
      lineNumber: 252,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/statements/Condition.tsx",
    lineNumber: 237,
    columnNumber: 10
  }, this);
};
_s3(Condition, "yWP29Ig+dmI35/J4pyrknC0uDPE=");
_c8 = Condition;
var Condition_default = Condition;
var _c8;
$RefreshReg$(_c8, "Condition");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/actions/AllowAction.tsx
var import_react10 = __toESM(require_react(), 1);
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/actions/AllowAction.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/actions/AllowAction.tsx"
  );
  import.meta.hot.lastModified = "1708356365264.3403";
}
var AllowAction = () => {
  _s4();
  const [open, setOpen] = (0, import_react10.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SingleArrow_default, { onClick: () => {
    } }, void 0, false, {
      fileName: "app/components/builder/actions/AllowAction.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "overflow-hidden rounded-lg shadow pt-0 p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bg-violet-400/50 flex justify-center p-0 m-0 h-11 align-middle rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-none items-center justify-center rounded-lg bg-violet-400 h-11 w-11", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(HandThumbUpIcon_default, { className: "text-white h-8 w-8", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/builder/actions/AllowAction.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/builder/actions/AllowAction.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left font-semibold", children: "Allow the Transfer" }, void 0, false, {
          fileName: "app/components/builder/actions/AllowAction.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/actions/AllowAction.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      open && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bg-gray-50 px-4 py-5 sm:p-6 rounded-lg" }, void 0, false, {
        fileName: "app/components/builder/actions/AllowAction.tsx",
        lineNumber: 39,
        columnNumber: 18
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/actions/AllowAction.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/actions/AllowAction.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_s4(AllowAction, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c9 = AllowAction;
var AllowAction_default = AllowAction;
var _c9;
$RefreshReg$(_c9, "AllowAction");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/actions/DenyAction.tsx
var import_react11 = __toESM(require_react(), 1);
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/actions/DenyAction.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/actions/DenyAction.tsx"
  );
  import.meta.hot.lastModified = "1708356365264.4285";
}
var DenyAction = () => {
  _s5();
  const [open, setOpen] = (0, import_react11.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(SingleArrow_default, { onClick: () => {
    } }, void 0, false, {
      fileName: "app/components/builder/actions/DenyAction.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "overflow-hidden rounded-lg shadow pt-0 p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-violet-400/50 flex justify-center p-0 m-0 h-11 align-middle rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-none items-center justify-center rounded-lg bg-violet-400 h-11 w-11", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HandThumbDownIcon_default, { className: "text-white h-8 w-8", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/builder/actions/DenyAction.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/builder/actions/DenyAction.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left font-semibold", children: "Stop the Transfer" }, void 0, false, {
          fileName: "app/components/builder/actions/DenyAction.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/actions/DenyAction.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      open && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-gray-50 px-4 py-5 sm:p-6 rounded-lg" }, void 0, false, {
        fileName: "app/components/builder/actions/DenyAction.tsx",
        lineNumber: 39,
        columnNumber: 18
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/actions/DenyAction.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/actions/DenyAction.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_s5(DenyAction, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c10 = DenyAction;
var DenyAction_default = DenyAction;
var _c10;
$RefreshReg$(_c10, "DenyAction");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/actions/NeedsApprovalAction.tsx
var import_react12 = __toESM(require_react(), 1);
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/actions/NeedsApprovalAction.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/actions/NeedsApprovalAction.tsx"
  );
  import.meta.hot.lastModified = "1708356365264.5095";
}
var NeedsApprovalAction = () => {
  _s6();
  const [open, setOpen] = (0, import_react12.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(SingleArrow_default, { onClick: () => {
    } }, void 0, false, {
      fileName: "app/components/builder/actions/NeedsApprovalAction.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "overflow-hidden rounded-lg shadow pt-0 p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bg-violet-400/50 flex justify-center p-0 m-0 h-11 align-middle rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-none items-center justify-center rounded-lg bg-violet-400 h-11 w-11", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(HandThumbUpIcon_default, { className: "text-white h-8 w-8", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/builder/actions/NeedsApprovalAction.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/builder/actions/NeedsApprovalAction.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left font-semibold", children: "Pause the Transfer Until Approved" }, void 0, false, {
          fileName: "app/components/builder/actions/NeedsApprovalAction.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/actions/NeedsApprovalAction.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      open && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bg-gray-50 px-4 py-5 sm:p-6 rounded-lg" }, void 0, false, {
        fileName: "app/components/builder/actions/NeedsApprovalAction.tsx",
        lineNumber: 39,
        columnNumber: 18
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/actions/NeedsApprovalAction.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/actions/NeedsApprovalAction.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_s6(NeedsApprovalAction, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c11 = NeedsApprovalAction;
var NeedsApprovalAction_default = NeedsApprovalAction;
var _c11;
$RefreshReg$(_c11, "NeedsApprovalAction");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/actions/NoAction.tsx
var import_react13 = __toESM(require_react(), 1);
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/actions/NoAction.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/actions/NoAction.tsx"
  );
  import.meta.hot.lastModified = "1708356365264.596";
}
var NoAction = () => {
  _s7();
  const [open, setOpen] = (0, import_react13.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(SingleArrow_default, { onClick: () => {
    } }, void 0, false, {
      fileName: "app/components/builder/actions/NoAction.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "overflow-hidden rounded-lg shadow pt-0 p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "bg-violet-400/50 flex justify-center p-0 m-0 h-11 align-middle rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-none items-center justify-center rounded-lg bg-violet-400 h-11 w-11", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(HandThumbUpIcon_default, { className: "text-white h-8 w-8", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/builder/actions/NoAction.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/builder/actions/NoAction.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left font-semibold", children: "Defer Decision to Next Policy" }, void 0, false, {
          fileName: "app/components/builder/actions/NoAction.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/actions/NoAction.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      open && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "bg-gray-50 px-4 py-5 sm:p-6 rounded-lg" }, void 0, false, {
        fileName: "app/components/builder/actions/NoAction.tsx",
        lineNumber: 39,
        columnNumber: 18
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/actions/NoAction.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/actions/NoAction.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_s7(NoAction, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c12 = NoAction;
var NoAction_default = NoAction;
var _c12;
$RefreshReg$(_c12, "NoAction");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/statements/Statement.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/statements/Statement.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/statements/Statement.tsx"
  );
  import.meta.hot.lastModified = "1708356365265.131";
}
var Statement = ({
  id = "",
  items = [],
  addItem,
  onRemove,
  onUpdate
}) => {
  const idRegex = new RegExp(`^${id}[^:]+$`);
  const childItems = items.filter((item) => !!item.id.match(idRegex));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: childItems.map((item, index) => {
    if (item.kind === "if") {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Condition_default, { id: item.id + ":", items: items.filter((cur) => cur.id.startsWith(item.id + ":")) || [], onRemove, addItem, onUpdate }, index, false, {
        fileName: "app/components/builder/statements/Statement.tsx",
        lineNumber: 38,
        columnNumber: 16
      }, this);
    } else if (item.kind === "allow") {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AllowAction_default, {}, index, false, {
        fileName: "app/components/builder/statements/Statement.tsx",
        lineNumber: 40,
        columnNumber: 16
      }, this);
    } else if (item.kind === "deny") {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DenyAction_default, {}, index, false, {
        fileName: "app/components/builder/statements/Statement.tsx",
        lineNumber: 42,
        columnNumber: 16
      }, this);
    } else if (item.kind === "needsApproval") {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(NeedsApprovalAction_default, {}, index, false, {
        fileName: "app/components/builder/statements/Statement.tsx",
        lineNumber: 44,
        columnNumber: 16
      }, this);
    } else if (item.kind === "nothing") {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(NoAction_default, {}, index, false, {
        fileName: "app/components/builder/statements/Statement.tsx",
        lineNumber: 46,
        columnNumber: 16
      }, this);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, {}, void 0, false, {
      fileName: "app/components/builder/statements/Statement.tsx",
      lineNumber: 48,
      columnNumber: 14
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/builder/statements/Statement.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_c13 = Statement;
var Statement_default = Statement;
var _c13;
$RefreshReg$(_c13, "Statement");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/triggers/TransferTrigger.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/triggers/TransferTrigger.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s8 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/triggers/TransferTrigger.tsx"
  );
  import.meta.hot.lastModified = "1708356365265.43";
}
var TransferTrigger = ({
  id = "",
  items = [],
  addItem,
  onRemove,
  onUpdate
}) => {
  _s8();
  const [open, setOpen] = (0, import_react14.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "overflow-hidden rounded-lg bg-white shadow max-w-lg mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "bg-blue-400/50 flex justify-center p-0 m-0 h-11 align-middle", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-none items-center justify-center rounded-lg bg-blue-400 h-11 w-11", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(CurrencyDollarIcon_default, { className: "text-white h-8 w-8", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/builder/triggers/TransferTrigger.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/builder/triggers/TransferTrigger.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left font-semibold", children: "Funds are being Transfered Out" }, void 0, false, {
          fileName: "app/components/builder/triggers/TransferTrigger.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/triggers/TransferTrigger.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      open && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "bg-gray-50 px-4 py-5 sm:p-6" }, void 0, false, {
        fileName: "app/components/builder/triggers/TransferTrigger.tsx",
        lineNumber: 44,
        columnNumber: 18
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/triggers/TransferTrigger.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Statement_default, { id, items, onRemove, addItem, onUpdate }, void 0, false, {
      fileName: "app/components/builder/triggers/TransferTrigger.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/triggers/TransferTrigger.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_s8(TransferTrigger, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c14 = TransferTrigger;
var TransferTrigger_default = TransferTrigger;
var _c14;
$RefreshReg$(_c14, "TransferTrigger");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/PolicyTrigger.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/PolicyTrigger.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s9 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/PolicyTrigger.tsx"
  );
  import.meta.hot.lastModified = "1708356365264.1777";
}
var triggers = [{
  name: "Funds Transfer",
  description: "Funds are being transfered from a wallet.",
  render: (props) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(TransferTrigger_default, { ...props }, void 0, false, {
      fileName: "app/components/builder/PolicyTrigger.tsx",
      lineNumber: 32,
      columnNumber: 12
    }, this);
  },
  color: "bg-indigo-500",
  icon: CurrencyDollarIcon_default
}, {
  name: "Policy Change",
  description: "A policy is being created or updated.",
  render: (props) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: "Policy Change" }, void 0, false, {
      fileName: "app/components/builder/PolicyTrigger.tsx",
      lineNumber: 40,
      columnNumber: 12
    }, this);
  },
  color: "bg-amber-500",
  icon: CodeBracketIcon_default
}, {
  name: "User Group Change",
  description: "A user is being added or removed from a group.",
  render: (props) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: "User Group Change" }, void 0, false, {
      fileName: "app/components/builder/PolicyTrigger.tsx",
      lineNumber: 48,
      columnNumber: 12
    }, this);
  },
  color: "bg-rose-500",
  icon: PhotoIcon_default
}, {
  name: "User Permissions Change",
  description: "A permission is being added or removed for a user.",
  render: (props) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: "User Permission Change" }, void 0, false, {
      fileName: "app/components/builder/PolicyTrigger.tsx",
      lineNumber: 56,
      columnNumber: 12
    }, this);
  },
  color: "bg-emerald-500",
  icon: DocumentIcon_default
}];
function PolicyTrigger({
  items = [],
  addItem,
  onRemove,
  onUpdate
}) {
  _s9();
  const [query, setQuery] = (0, import_react15.useState)("");
  const [open, setOpen] = (0, import_react15.useState)(false);
  const [triggerType, setTriggerType] = (0, import_react15.useState)(void 0);
  const filteredItems = query === "" ? triggers.slice(0, 5) : triggers.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });
  if (triggerType) {
    return triggerType.render({
      items,
      addItem,
      onRemove,
      onUpdate
    });
  } else if (items.length > 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(TransferTrigger_default, { items, addItem, onRemove, onUpdate }, void 0, false, {
      fileName: "app/components/builder/PolicyTrigger.tsx",
      lineNumber: 82,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { type: "button", onClick: () => setOpen(true), className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("svg", { className: "mx-auto h-12 w-12 text-gray-400", stroke: "currentColor", fill: "none", viewBox: "0 0 48 48", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" }, void 0, false, {
        fileName: "app/components/builder/PolicyTrigger.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/builder/PolicyTrigger.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "mt-2 block text-sm font-semibold text-gray-900", children: "Choose a trigger for your policy" }, void 0, false, {
        fileName: "app/components/builder/PolicyTrigger.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/PolicyTrigger.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(tt.Root, { show: open, as: import_react15.Fragment, afterLeave: () => setQuery(""), appear: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(_t, { as: "div", className: "relative z-10", onClose: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(tt.Child, { as: import_react15.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" }, void 0, false, {
        fileName: "app/components/builder/PolicyTrigger.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/builder/PolicyTrigger.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(tt.Child, { as: import_react15.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(_t.Panel, { className: "mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(qo, { onChange: setTriggerType, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(MagnifyingGlassIcon_default, { className: "pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/builder/PolicyTrigger.tsx",
            lineNumber: 102,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(qo.Input, { className: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm", placeholder: "Select a trigger...", onChange: (event) => setQuery(event.target.value) }, void 0, false, {
            fileName: "app/components/builder/PolicyTrigger.tsx",
            lineNumber: 103,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/builder/PolicyTrigger.tsx",
          lineNumber: 101,
          columnNumber: 19
        }, this),
        filteredItems.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(qo.Options, { static: true, className: "max-h-96 transform-gpu scroll-py-3 overflow-y-auto p-3", children: filteredItems.map((item, itemIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(qo.Option, { value: item, className: ({
          active
        }) => classNames("flex cursor-default select-none rounded-xl p-3", active ? "bg-gray-100" : ""), children: ({
          active
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: classNames("flex h-10 w-10 flex-none items-center justify-center rounded-lg", item.color), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(item.icon, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/builder/PolicyTrigger.tsx",
            lineNumber: 114,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/builder/PolicyTrigger.tsx",
            lineNumber: 113,
            columnNumber: 31
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ml-4 flex-auto", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: classNames("text-sm font-medium", active ? "text-gray-900" : "text-gray-700"), children: item.name }, void 0, false, {
              fileName: "app/components/builder/PolicyTrigger.tsx",
              lineNumber: 117,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: classNames("text-sm", active ? "text-gray-700" : "text-gray-500"), children: item.description }, void 0, false, {
              fileName: "app/components/builder/PolicyTrigger.tsx",
              lineNumber: 120,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/builder/PolicyTrigger.tsx",
            lineNumber: 116,
            columnNumber: 31
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/builder/PolicyTrigger.tsx",
          lineNumber: 112,
          columnNumber: 27
        }, this) }, itemIndex, false, {
          fileName: "app/components/builder/PolicyTrigger.tsx",
          lineNumber: 107,
          columnNumber: 63
        }, this)) }, void 0, false, {
          fileName: "app/components/builder/PolicyTrigger.tsx",
          lineNumber: 106,
          columnNumber: 48
        }, this),
        query !== "" && filteredItems.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "px-6 py-14 text-center text-sm sm:px-14", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ExclamationCircleIcon_default2, { type: "outline", name: "exclamation-circle", className: "mx-auto h-6 w-6 text-gray-400" }, void 0, false, {
            fileName: "app/components/builder/PolicyTrigger.tsx",
            lineNumber: 129,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "mt-4 font-semibold text-gray-900", children: "No results found" }, void 0, false, {
            fileName: "app/components/builder/PolicyTrigger.tsx",
            lineNumber: 130,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "mt-2 text-gray-500", children: "No components found for this search term. Please try again." }, void 0, false, {
            fileName: "app/components/builder/PolicyTrigger.tsx",
            lineNumber: 131,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/builder/PolicyTrigger.tsx",
          lineNumber: 128,
          columnNumber: 66
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/builder/PolicyTrigger.tsx",
        lineNumber: 100,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/builder/PolicyTrigger.tsx",
        lineNumber: 99,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/builder/PolicyTrigger.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/builder/PolicyTrigger.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/PolicyTrigger.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/builder/PolicyTrigger.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/PolicyTrigger.tsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
}
_s9(PolicyTrigger, "4gSIdzRGP/gxb8muFv+ijCYz034=");
_c15 = PolicyTrigger;
var _c15;
$RefreshReg$(_c15, "PolicyTrigger");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/builder/PolicyBuilder.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/builder/PolicyBuilder.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/builder/PolicyBuilder.tsx"
  );
  import.meta.hot.lastModified = "1708356365264.01";
}
function PolicyBuilder({
  items = [],
  addItem,
  onRemove,
  onBack,
  onForward,
  onUpdate
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "border-b border-gray-900/10 pb-12 overscroll-x-auto overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(PolicyTrigger, { items, addItem, onRemove, onUpdate }, void 0, false, {
      fileName: "app/components/builder/PolicyBuilder.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/builder/PolicyBuilder.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/builder/PolicyBuilder.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "max-w-lg mx-auto mt-6 flex items-center justify-end gap-x-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { onClick: onBack, type: "button", className: "text-sm font-semibold leading-6 text-gray-900", children: "Back" }, void 0, false, {
        fileName: "app/components/builder/PolicyBuilder.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { onClick: onForward, type: "submit", className: "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Next" }, void 0, false, {
        fileName: "app/components/builder/PolicyBuilder.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/builder/PolicyBuilder.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/builder/PolicyBuilder.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c16 = PolicyBuilder;
var _c16;
$RefreshReg$(_c16, "PolicyBuilder");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PolicyBuilder/PolicyTemplatePicker.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PolicyBuilder/PolicyTemplatePicker.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PolicyBuilder/PolicyTemplatePicker.tsx"
  );
  import.meta.hot.lastModified = "1708356365261.8108";
}
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function PolicyTemplatePicker({
  onSubmit,
  users
}) {
  const items = [{
    title: "Require Approval for Unknown Addresses",
    description: `Sending funds to an address not on the allow list requires 1 approval.`,
    icon: Bars4Icon_default,
    background: "bg-amber-500",
    template: [{
      id: "if#1",
      kind: "if"
    }, {
      id: "if#1:if:isSendingToAddressOnAllowList#1",
      kind: "isSendingToAddressOnAllowList"
    }, {
      id: "if#1:then:nothing#1",
      kind: "nothing"
    }, {
      id: "if#1:else",
      kind: "else"
    }, {
      id: "if#1:else:needsApproval#1",
      kind: "needsApproval",
      parameters: {
        approvals: {
          approvals: {
            approvers: users,
            required: 1
          }
        }
      }
    }]
  }, {
    title: "Require Approval over 2 ETH in 24 Hours",
    description: `Sending more than 2 ETH in 24 Hours requires 2 approvals.`,
    icon: Bars4Icon_default,
    background: "bg-amber-500",
    template: [{
      id: "if#1",
      kind: "if"
    }, {
      id: "if#1:if:isUserOverTheirSpendingLimit#1",
      kind: "isUserOverTheirSpendingLimit",
      parameters: {
        spendingLimit: {
          amount: "2000000000000000000",
          hours: 24
        }
      }
    }, {
      id: "if#1:then:needsApproval#1",
      kind: "needsApproval",
      parameters: {
        approvals: {
          approvals: {
            approvers: users,
            required: 2
          }
        }
      }
    }, {
      id: "if#1:else",
      kind: "else"
    }, {
      id: "if#1:else:nothing#1",
      kind: "nothing"
    }]
  }, {
    title: "Only Allow Trusted Addresses",
    description: "Only allow users to send funds to addresses that you know and trust.",
    icon: Bars4Icon_default,
    background: "bg-green-500",
    template: [{
      id: "if#1",
      kind: "if"
    }, {
      id: "if#1:if:not#1",
      kind: "not"
    }, {
      id: "if#1:if:not#1:isSendingToAddressOnAllowList#1",
      kind: "isSendingToAddressOnAllowList"
    }, {
      id: "if#1:then:deny#1",
      kind: "deny"
    }]
  }, {
    title: "Limit User Spending",
    description: "Limit funds that can be sent by a user in a 24 hour period.",
    icon: ClockIcon_default,
    background: "bg-yellow-500",
    template: [{
      id: "if#1",
      kind: "if"
    }, {
      id: "if#1:if:isUserOverTheirSpendingLimit#1",
      kind: "isUserOverTheirSpendingLimit"
    }, {
      id: "if#1:then:deny#1",
      kind: "deny"
    }]
    // TODO: Need to add parameters to isUserOverTheirSpendingLimit
  }, {
    title: "Block Untrusted Addresses",
    description: `Prevent users from sending funds to addresses you don't trust.`,
    icon: Bars4Icon_default,
    background: "bg-pink-500",
    template: [{
      id: "if#1",
      kind: "if"
    }, {
      id: "if#1:if:isSendingToAddressOnDenyList#1",
      kind: "isSendingToAddressOnDenyList"
    }, {
      id: "if#1:then:deny#1",
      kind: "deny"
    }]
  }, {
    title: "Block Sanctioned Addresses",
    description: `Prevent users from sending funds to an address on the OFAC list.`,
    icon: NoSymbolIcon_default,
    background: "bg-red-500",
    template: [{
      id: "if#1",
      kind: "if"
    }, {
      id: "if#1:if:isValueInList#1",
      kind: "isValueInList",
      parameters: {
        value: {
          field: "to"
        },
        list: {
          name: "@web3firewall/ofac"
        }
      }
    }, {
      id: "if#1:then:deny#1",
      kind: "deny"
    }, {
      id: "if#1:else",
      kind: "else"
    }, {
      id: "if#1:else:nothing#1",
      kind: "nothing"
    }]
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "text-base font-semibold leading-6 text-gray-900", children: "Create a Policy" }, void 0, false, {
      fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
      lineNumber: 172,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "Web3Firewall policies help protect your ass...ets. To start, select a predefined template." }, void 0, false, {
      fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
      lineNumber: 173,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { role: "list", className: "mt-6 divide-y divide-gray-200 border-b border-t border-gray-200", children: items.map((item, itemIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "group text-left relative flex items-start space-x-3 py-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: classNames2(item.background, "inline-flex h-10 w-10 items-center justify-center rounded-lg"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(item.icon, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
        lineNumber: 181,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
        lineNumber: 180,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("a", { onClick: () => onSubmit(item.template), className: "cursor-pointer", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "absolute inset-0", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
            lineNumber: 187,
            columnNumber: 19
          }, this),
          item.title
        ] }, void 0, true, {
          fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
          lineNumber: 186,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
          lineNumber: 185,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-sm text-gray-500", children: item.description }, void 0, false, {
          fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
          lineNumber: 191,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
        lineNumber: 184,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex-shrink-0 self-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(ChevronRightIcon_default, { className: "h-5 w-5 text-gray-400 group-hover:text-gray-500", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
        lineNumber: 194,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
        lineNumber: 193,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
      lineNumber: 178,
      columnNumber: 11
    }, this) }, itemIdx, false, {
      fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
      lineNumber: 177,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
      lineNumber: 176,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-4 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("a", { onClick: () => onSubmit([]), className: "cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-500", children: [
      "Or build a policy from scratch",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { "aria-hidden": "true", children: " \u2192" }, void 0, false, {
        fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
      lineNumber: 199,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PolicyBuilder/PolicyTemplatePicker.tsx",
    lineNumber: 171,
    columnNumber: 10
  }, this);
}
_c17 = PolicyTemplatePicker;
var _c17;
$RefreshReg$(_c17, "PolicyTemplatePicker");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Stepper.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Stepper.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Stepper.tsx"
  );
  import.meta.hot.lastModified = "1708356365263.4968";
}
function Stepper({
  steps,
  onClick,
  currentStep
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("nav", { "aria-label": "Progress", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("ol", { role: "list", className: "space-y-4 md:flex md:space-x-8 md:space-y-0", children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("li", { className: "md:flex-1", children: index < currentStep ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { onClick: () => onClick(index), className: "group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-sm font-medium text-indigo-600 group-hover:text-indigo-800", children: step.id }, void 0, false, {
      fileName: "app/components/Stepper.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-sm font-medium", children: step.name }, void 0, false, {
      fileName: "app/components/Stepper.tsx",
      lineNumber: 31,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Stepper.tsx",
    lineNumber: 29,
    columnNumber: 36
  }, this) : index === currentStep ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { onClick: () => onClick(index), className: "flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4", "aria-current": "step", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-sm font-medium text-indigo-600", children: step.id }, void 0, false, {
      fileName: "app/components/Stepper.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-sm font-medium", children: step.name }, void 0, false, {
      fileName: "app/components/Stepper.tsx",
      lineNumber: 34,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Stepper.tsx",
    lineNumber: 32,
    columnNumber: 48
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { onClick: () => onClick(index), className: "group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-sm font-medium text-gray-500 group-hover:text-gray-700", children: step.id }, void 0, false, {
      fileName: "app/components/Stepper.tsx",
      lineNumber: 36,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-sm font-medium", children: step.name }, void 0, false, {
      fileName: "app/components/Stepper.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Stepper.tsx",
    lineNumber: 35,
    columnNumber: 24
  }, this) }, step.name, false, {
    fileName: "app/components/Stepper.tsx",
    lineNumber: 28,
    columnNumber: 37
  }, this)) }, void 0, false, {
    fileName: "app/components/Stepper.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Stepper.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c18 = Stepper;
var _c18;
$RefreshReg$(_c18, "Stepper");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PolicyBuilder/SavePolicyForm.tsx
var import_react19 = __toESM(require_react(), 1);
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PolicyBuilder/SavePolicyForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s10 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PolicyBuilder/SavePolicyForm.tsx"
  );
  import.meta.hot.lastModified = "1708356365262.2466";
}
var policyNameErrorMessage = (value) => {
  const minCharacters = 5;
  if (value && value.match(/[#:]/)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
      "Policy name contains invalid characters ( ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("b", { children: "#" }, void 0, false, {
        fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
        lineNumber: 30,
        columnNumber: 56
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("b", { children: ":" }, void 0, false, {
        fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
        lineNumber: 30,
        columnNumber: 65
      }, this),
      " )."
    ] }, void 0, true, {
      fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
      lineNumber: 30,
      columnNumber: 12
    }, this);
  }
  if (!value || value.length < minCharacters) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
      "Policy name must be at least ",
      minCharacters,
      " characters long."
    ] }, void 0, true, {
      fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
      lineNumber: 33,
      columnNumber: 12
    }, this);
  }
  return void 0;
};
var policyVersionErrorMessage = (value) => {
  const parts = value.match(
    // eslint-disable-next-line max-len
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
  );
  if (!parts) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
      "Version must follow ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("i", { children: "Semantic Versioning" }, void 0, false, {
        fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
        lineNumber: 42,
        columnNumber: 34
      }, this),
      " rules (eg ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("code", { children: "1.0.0" }, void 0, false, {
        fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
        lineNumber: 42,
        columnNumber: 71
      }, this),
      ")."
    ] }, void 0, true, {
      fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
      lineNumber: 42,
      columnNumber: 12
    }, this);
  }
  return void 0;
};
var priorityErrorMessage = (value) => {
  const parts = value.match(/^[1-9][0-9]*$/);
  if (!parts || Number(value) < 0 || Number(value) > 999999) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: "Priority must be a number between 1 and 999999." }, void 0, false, {
      fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
      lineNumber: 49,
      columnNumber: 12
    }, this);
  }
  return void 0;
};
function SavePolicyForm({
  policyName,
  setPolicyName,
  policyDescription,
  setPolicyDescription,
  policyVersion,
  setPolicyVersion,
  onSave,
  onBack,
  errors,
  autoConfig,
  setAutoConfig,
  priority,
  setPriority
}) {
  _s10();
  const navigation = useNavigation();
  const isSubmitting = navigation.formAction === "/policy/builder";
  const [policyNameError, setPolicyNameError] = (0, import_react19.useState)(void 0);
  const [policyVersionError, setPolicyVersionError] = (0, import_react19.useState)(void 0);
  const [priorityError, setPriorityError] = (0, import_react19.useState)(void 0);
  const inputErrorClasses = "block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-500 placeholder:text-red-200 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6";
  const inputClasses = "block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6";
  const updateName = (e2) => {
    setPolicyName(e2.target.value);
    setPolicyNameError(policyNameErrorMessage(e2.target.value));
  };
  const updateDescription = (e2) => {
    setPolicyDescription(e2.target.value);
  };
  const updateVersion = (e2) => {
    setPolicyVersion(e2.target.value);
    setPolicyVersionError(policyVersionErrorMessage(e2.target.value));
  };
  const updatePriority = (e2) => {
    setPriority(Number(e2.target.value));
    setPriorityError(priorityErrorMessage(e2.target.value));
  };
  const savePolicy = () => {
    if (policyName.length === 0 || policyVersion.length === 0 || !!policyNameError || !!policyVersionError) {
      return;
    }
    onSave();
  };
  (0, import_react19.useEffect)(() => {
    if (errors?.name) {
      setPolicyNameError(/* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: errors.name }, void 0, false, {
        fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
        lineNumber: 99,
        columnNumber: 26
      }, this));
    }
    if (errors?.version) {
      setPolicyVersionError(/* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: errors.version }, void 0, false, {
        fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
        lineNumber: 102,
        columnNumber: 29
      }, this));
    }
    if (errors?.document) {
      onBack();
    }
    if (errors?.priority) {
      setPriorityError(/* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: errors.priority }, void 0, false, {
        fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
        lineNumber: 108,
        columnNumber: 24
      }, this));
    }
  }, [errors]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("form", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "space-y-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "border-b border-gray-900/10 pb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sm:col-span-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-3 text-sm text-left leading-6 text-gray-600", children: "Give your policy a name" }, void 0, false, {
          fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "relative mt-2 rounded-md shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "text", name: "policyName", id: "policyName", className: !policyNameError ? inputClasses : inputErrorClasses, placeholder: "My New Policy", onChange: updateName, defaultValue: policyName }, void 0, false, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 119,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this),
          !!policyNameError && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ExclamationCircleIcon_default, { className: "h-5 w-5 text-red-500", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 122,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 121,
            columnNumber: 39
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this),
        !!policyNameError && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-2 text-sm text-red-600 text-left", id: "email-error", children: policyNameError }, void 0, false, {
          fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
          lineNumber: 125,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
        lineNumber: 115,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sm:col-span-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-3 text-sm text-left leading-6 text-gray-600", children: "Give your policy a version" }, void 0, false, {
          fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "relative mt-2 rounded-md shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "text", name: "policyVersion", id: "policyVersion", className: !policyVersionError ? inputClasses : inputErrorClasses, placeholder: "1.0.0", onChange: updateVersion, defaultValue: policyVersion }, void 0, false, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 134,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, this),
          !!policyVersionError && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ExclamationCircleIcon_default, { className: "h-5 w-5 text-red-500", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 137,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 136,
            columnNumber: 42
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
          lineNumber: 132,
          columnNumber: 15
        }, this),
        !!policyVersionError && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-2 text-sm text-red-600 text-left", id: "email-error", children: policyVersionError }, void 0, false, {
          fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
          lineNumber: 140,
          columnNumber: 40
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
        lineNumber: 130,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-span-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-3 text-sm text-left leading-6 text-gray-600", children: "Provide a description to remind yourself how the policy works" }, void 0, false, {
          fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "relative mt-2 rounded-md shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("textarea", { id: "description", name: "description", rows: 3, className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", defaultValue: policyDescription, onChange: updateDescription }, void 0, false, {
          fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
          lineNumber: 148,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
          lineNumber: 147,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "sm:col-span-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2 md:flex md:items-center md:justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-3 text-sm text-left leading-6 text-gray-600", children: "Configure policy at creation" }, void 0, false, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 154,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-4 flex flex-shrink-0 md:ml-4 md:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex sm:max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Ge2, { checked: autoConfig, onChange: setAutoConfig, className: classNames(autoConfig ? "bg-indigo-600" : "bg-gray-200", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: "sr-only", children: "Use setting" }, void 0, false, {
              fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
              lineNumber: 158,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: classNames(autoConfig ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: classNames(autoConfig ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"), "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("svg", { className: "h-3 w-3 text-gray-400", fill: "none", viewBox: "0 0 12 12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("path", { d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
                fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
                lineNumber: 162,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
                lineNumber: 161,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
                lineNumber: 160,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: classNames(autoConfig ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"), "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("svg", { className: "h-3 w-3 text-indigo-600", fill: "currentColor", viewBox: "0 0 12 12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" }, void 0, false, {
                fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
                lineNumber: 167,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
                lineNumber: 166,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
                lineNumber: 165,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
              lineNumber: 159,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 157,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 156,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 155,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
          lineNumber: 153,
          columnNumber: 15
        }, this),
        autoConfig ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "relative mt-2 rounded-md shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "text", name: "priority", id: "priority", className: !priorityError ? inputClasses : inputErrorClasses, placeholder: "100", onChange: updatePriority, defaultValue: priority }, void 0, false, {
              fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
              lineNumber: 178,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
              lineNumber: 177,
              columnNumber: 21
            }, this),
            !!priorityError && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ExclamationCircleIcon_default, { className: "h-5 w-5 text-red-500", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
              lineNumber: 181,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
              lineNumber: 180,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 176,
            columnNumber: 19
          }, this),
          !!priorityError && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-2 text-sm text-red-600 text-left", id: "email-error", children: priorityError }, void 0, false, {
            fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
            lineNumber: 184,
            columnNumber: 39
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
          lineNumber: 175,
          columnNumber: 29
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, {}, void 0, false, {
          fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
          lineNumber: 187,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
        lineNumber: 152,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
      lineNumber: 114,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-6 flex items-center justify-end gap-x-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { onClick: onBack, type: "button", className: "text-sm font-semibold leading-6 text-gray-900", disabled: isSubmitting, children: "Back" }, void 0, false, {
        fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { onClick: savePolicy, type: "button", className: "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", disabled: isSubmitting, children: "Save" }, void 0, false, {
        fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
        lineNumber: 198,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
      lineNumber: 194,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PolicyBuilder/SavePolicyForm.tsx",
    lineNumber: 111,
    columnNumber: 10
  }, this);
}
_s10(SavePolicyForm, "FzDgE3wAic3iatalZX/SdYOAv2Q=", false, function() {
  return [useNavigation];
});
_c19 = SavePolicyForm;
var _c19;
$RefreshReg$(_c19, "SavePolicyForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/convertPolicyItemsToPolicyDocument.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/convertPolicyItemsToPolicyDocument.ts"
  );
  import.meta.hot.lastModified = "1708356365270.2947";
}
var convertPolicyItemsToPolicyAction = (actionItem, items) => {
  const action = {
    action: actionItem.id.split("#")[0],
    ...actionItem.parameters ? actionItem.parameters : {}
  };
  return action;
};
var convertPolicyItemsToRuleSet = (items) => {
  const ruleSet = {};
  const andItem = items.find((item) => item.id.match(/^and#[^:]+$/));
  if (andItem) {
    ruleSet.and = convertPolicyItemsToRuleSet(
      items.filter((item) => item.id.startsWith(andItem.id + ":")).reduce((all, cur) => {
        all.push({
          kind: cur.kind,
          id: cur.id.slice((andItem.id + ":").length),
          parameters: cur.parameters
        });
        return all;
      }, [])
    );
  }
  const orItem = items.find((item) => item.id.match(/^or#[^:]+$/));
  if (orItem) {
    ruleSet.or = convertPolicyItemsToRuleSet(
      items.filter((item) => item.id.startsWith(orItem.id + ":")).reduce((all, cur) => {
        all.push({
          kind: cur.kind,
          id: cur.id.slice((orItem.id + ":").length),
          parameters: cur.parameters
        });
        return all;
      }, [])
    );
  }
  const notItem = items.find((item) => item.id.match(/^not#[^:]+$/));
  if (notItem) {
    ruleSet.not = convertPolicyItemsToRuleSet(
      items.filter((item) => item.id.startsWith(notItem.id + ":")).reduce((all, cur) => {
        all.push({
          kind: cur.kind,
          id: cur.id.slice((notItem.id + ":").length),
          parameters: cur.parameters
        });
        return all;
      }, [])
    );
  }
  const xorItem = items.find((item) => item.id.match(/^xor#[^:]+$/));
  if (xorItem) {
    ruleSet.xor = convertPolicyItemsToRuleSet(
      items.filter((item) => item.id.startsWith(xorItem.id + ":")).reduce((all, cur) => {
        all.push({
          kind: cur.kind,
          id: cur.id.slice((xorItem.id + ":").length),
          parameters: cur.parameters
        });
        return all;
      }, [])
    );
  }
  const rules = items.filter(
    (item) => !item.id.startsWith("and#") && !item.id.startsWith("or#") && !item.id.startsWith("not#") && !item.id.startsWith("xor#")
  ).filter((item) => item.id.match(/^[^#]+#[^:]+$/));
  rules.forEach((rule) => {
    ruleSet[rule.id.split("#")[0]] = { parameters: rule.parameters };
  });
  return ruleSet;
};
var convertPolicyItemsToPolicyDocument = (items) => {
  let policyDocument = {
    action: void 0
  };
  const ifItem = items.find((item) => item.kind === "if" && item.id.match(/^if#[^:]+$/));
  if (ifItem) {
    policyDocument.if = convertPolicyItemsToRuleSet(
      items.filter((item) => item.id.startsWith(ifItem.id + ":if:")).reduce((all, cur) => {
        all.push({
          kind: cur.kind,
          id: cur.id.slice((ifItem.id + ":if:").length),
          parameters: cur.parameters
        });
        return all;
      }, [])
    );
    policyDocument.then = convertPolicyItemsToPolicyDocument(
      items.filter((item) => item.id.startsWith(ifItem.id + ":then:")).reduce((all, cur) => {
        all.push({
          kind: cur.kind,
          id: cur.id.slice((ifItem.id + ":then:").length),
          parameters: cur.parameters
        });
        return all;
      }, [])
    );
    const elseItem = items.find((item) => item.kind === "else" && item.id === ifItem.id + ":else");
    if (elseItem) {
      policyDocument.else = convertPolicyItemsToPolicyDocument(
        items.filter((item) => item.id.startsWith(elseItem.id + ":")).reduce((all, cur) => {
          all.push({
            kind: cur.kind,
            id: cur.id.slice((elseItem.id + ":").length),
            parameters: cur.parameters
          });
          return all;
        }, [])
      );
    }
  }
  const actionItem = items.find((item) => item.kind !== "if" && !item.id.startsWith("if#"));
  if (actionItem) {
    const action = convertPolicyItemsToPolicyAction(
      actionItem,
      items.filter((item) => item.id.startsWith(actionItem.id)).reduce((all, cur) => {
        all.push({
          kind: cur.kind,
          id: cur.id.slice((actionItem.id + ":").length),
          parameters: cur.parameters
        });
        return all;
      }, [])
    );
    policyDocument = {
      ...policyDocument,
      ...action
    };
  }
  return policyDocument;
};

// app/routes/_authed.policy_.builder.tsx
var import_session = __toESM(require_session(), 1);
var import_policies = __toESM(require_policies(), 1);
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_authed.policy_.builder.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s11 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_authed.policy_.builder.tsx"
  );
  import.meta.hot.lastModified = "1708356365269.1223";
}
var meta = () => {
  return [{
    title: "Web3Firewall - New Policy"
  }];
};
function PolicyBuilderPage() {
  _s11();
  const [items, setItems] = (0, import_react20.useState)([]);
  const [step, setStep] = (0, import_react20.useState)(0);
  const [name, setName] = (0, import_react20.useState)("");
  const [autoConfig, setAutoConfig] = (0, import_react20.useState)(true);
  const [priority, setPriority] = (0, import_react20.useState)(1);
  const [description, setDescription] = (0, import_react20.useState)("");
  const [version, setVersion] = (0, import_react20.useState)("1.0.0");
  const navigate = useNavigate();
  const submit = useSubmit();
  const data = useActionData();
  const users = useLoaderData();
  const addItem = (newItem) => {
    if (Array.isArray(newItem)) {
      setItems([...items, ...newItem]);
    } else {
      setItems([...items, newItem]);
    }
  };
  const onRemove = (id) => {
    setItems(items.filter((item) => !item.id.startsWith(id)));
  };
  const onTemplatePickerSubmit = (template) => {
    if (template) {
      setItems(template);
    }
    setStep(1);
  };
  const onUpdateParameters = (id, parameters) => {
    const item = items.find((item2) => item2.id === id);
    if (item) {
      item.parameters = parameters;
    }
  };
  const onSave = () => {
    if (items.length === 0) {
      return;
    }
    const formData = {
      document: JSON.stringify(convertPolicyItemsToPolicyDocument(items)),
      name,
      description,
      version,
      autoConfig,
      priority
    };
    submit(formData, {
      method: "post"
    });
  };
  const onCancel = () => {
    if (items.length > 0) {
    }
    navigate(-1);
  };
  const steps = [{
    id: "Step 1",
    name: "Select a Template"
  }, {
    id: "Step 2",
    name: "Define the Policy"
  }, {
    id: "Step 3",
    name: "Save the Policy"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mx-auto max-w-full text-center place-items-center content-center place-self-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mx-auto pb-5 text-end max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("button", { type: "button", onClick: onCancel, children: "X" }, void 0, false, {
      fileName: "app/routes/_authed.policy_.builder.tsx",
      lineNumber: 157,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_authed.policy_.builder.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mx-auto max-w-lg pb-10 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Stepper, { steps, onClick: (newStep) => setStep(newStep), currentStep: step }, void 0, false, {
        fileName: "app/routes/_authed.policy_.builder.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed.policy_.builder.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      step === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mx-auto max-w-lg pb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PolicyTemplatePicker, { onSubmit: onTemplatePickerSubmit, users: users.users }, void 0, false, {
        fileName: "app/routes/_authed.policy_.builder.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed.policy_.builder.tsx",
        lineNumber: 163,
        columnNumber: 23
      }, this) : step === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mx-auto pb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PolicyBuilder, { items, addItem, onRemove, onBack: () => setStep(step - 1), onForward: () => setStep(step + 1), onUpdate: onUpdateParameters }, void 0, false, {
        fileName: "app/routes/_authed.policy_.builder.tsx",
        lineNumber: 166,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed.policy_.builder.tsx",
        lineNumber: 165,
        columnNumber: 33
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mx-auto max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SavePolicyForm, { policyName: name, setPolicyName: setName, policyDescription: description, setPolicyDescription: setDescription, policyVersion: version, setPolicyVersion: setVersion, onSave, onBack: () => setStep(step - 1), errors: data?.errors, autoConfig, setAutoConfig, priority, setPriority }, void 0, false, {
        fileName: "app/routes/_authed.policy_.builder.tsx",
        lineNumber: 168,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_authed.policy_.builder.tsx",
        lineNumber: 167,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_authed.policy_.builder.tsx",
      lineNumber: 159,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_authed.policy_.builder.tsx",
    lineNumber: 155,
    columnNumber: 10
  }, this);
}
_s11(PolicyBuilderPage, "5tmXyZRxgsnsqgTKE0hzb2zVUqI=", false, function() {
  return [useNavigate, useSubmit, useActionData, useLoaderData];
});
_c20 = PolicyBuilderPage;
var _c20;
$RefreshReg$(_c20, "PolicyBuilderPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PolicyBuilderPage as default,
  meta
};
//# sourceMappingURL=/build/routes/_authed.policy_.builder-OOMDP5W5.js.map
