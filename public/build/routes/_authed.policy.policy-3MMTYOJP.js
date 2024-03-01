import {
  PolicyConfiguration_default
} from "/build/_shared/chunk-3QZ6HRQ4.js";
import "/build/_shared/chunk-JOSSDIFY.js";
import {
  require_policies
} from "/build/_shared/chunk-MSCT6M3L.js";
import "/build/_shared/chunk-VCPG374B.js";
import {
  require_session
} from "/build/_shared/chunk-4Q4G4ORE.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  useLoaderData
} from "/build/_shared/chunk-SVACFKTP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-E2CO66ZG.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_authed.policy.policy.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_session = __toESM(require_session(), 1);
var import_policies = __toESM(require_policies(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_authed.policy.policy.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_authed.policy.policy.tsx"
  );
  import.meta.hot.lastModified = "1708356365268.793";
}
function PolicyPolicyConfiguration() {
  _s();
  const config = useLoaderData().items.reduce((all, item) => {
    all.push({
      ...item,
      createdAt: new Date(item.createdAt)
    });
    return all;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PolicyConfiguration_default, { configuration: config, kind: "Policies" }, void 0, false, {
    fileName: "app/routes/_authed.policy.policy.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s(PolicyPolicyConfiguration, "UGd6Srho9ZIz3WBO/oX8v/JIOKQ=", false, function() {
  return [useLoaderData];
});
_c = PolicyPolicyConfiguration;
var _c;
$RefreshReg$(_c, "PolicyPolicyConfiguration");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PolicyPolicyConfiguration as default
};
//# sourceMappingURL=/build/routes/_authed.policy.policy-3MMTYOJP.js.map
