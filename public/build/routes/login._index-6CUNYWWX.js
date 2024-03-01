import {
  require_session
} from "/build/_shared/chunk-4Q4G4ORE.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
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

// app/routes/login._index.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);

// app/components/logos/ShieldLogo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/logos/ShieldLogo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/logos/ShieldLogo.tsx"
  );
  import.meta.hot.lastModified = "1708356365266.4304";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var ShieldLogo = ({
  className = "block h-10 w-10",
  color = "dark"
} = {}) => {
  const textColor = color === "dark" ? `text-gray-100` : `text-indigo-600`;
  const colors = [color === "dark" ? "#f8aC6C" : "#f8aC6C", color === "dark" ? "#f78A4A" : "#f78A4A", color === "dark" ? "#e1603F" : "#e1603F", color === "dark" ? "#c45B12" : "#c45B12", color === "dark" ? "#c7421D" : "#c7421D", color === "dark" ? "#c84603" : "#c84603", color === "dark" ? "#c04000" : "#c04000"];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classNames(className || "", "flex align-middle items-center justify-center"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "45", height: "45", viewBox: "125 35 320 320", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { clipPath: "url(#clip0_8_3120)", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", { width: "500", height: "500", fill: "none" }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M550 -50H-50V550H550V-50Z", fill: "none" }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M277.46 70.8821C273.223 66.8026 268.939 62.8158 264.665 58.931C264.183 58.9125 263.673 58.8661 263.135 58.8197C262.505 58.727 261.847 58.5601 261.188 58.3933C260.901 58.3005 260.641 58.2264 260.428 58.1522C260.354 58.1522 260.308 58.1244 260.261 58.1058C258.379 60.8317 256.46 63.78 254.466 66.8767C252.501 69.9642 250.489 73.237 248.458 76.649C249.209 77.2516 249.896 77.9377 250.489 78.6238C251.11 79.3563 251.629 80.1444 252.028 80.951C258.713 81.5444 265.157 82.1934 271.359 82.9815C277.516 83.7139 283.449 84.5576 289.189 85.5033C289.179 85.4106 289.198 85.355 289.189 85.2808C289.226 84.9192 289.3 84.5298 289.365 84.2146C289.467 83.8715 289.55 83.5841 289.689 83.2874C289.745 83.2133 289.782 83.1391 289.8 83.0464C285.73 78.9391 281.641 74.8874 277.46 70.8821Z", fill: colors[1] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mask", { id: "mask0_8_3120", className: "mask-type:luminance", maskUnits: "userSpaceOnUse", x: "210", y: "48", width: "48", height: "28", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M210.13 48H257.6V75.4439H210.13V48Z", fill: "white" }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { mask: "url(#mask0_8_3120)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M249.914 64.2811C251.879 61.2957 253.78 58.4771 255.672 55.7884C255.208 55.4453 254.754 55.0745 254.327 54.7036C253.854 54.2586 253.419 53.8135 253.057 53.3685C250.071 52.8307 247.012 52.293 243.934 51.8294C240.698 51.2824 237.434 50.8095 234.069 50.3552C230.703 49.9102 227.245 49.4744 223.749 49.0758C220.365 48.6864 217.037 48.3526 213.727 48.0188C213.486 48.4268 213.217 48.8162 212.828 49.1499C212.577 49.3724 212.271 49.6321 211.947 49.836C215.869 53.5632 219.763 57.3275 223.592 61.0917C227.671 65.0599 231.825 69.1765 236.007 73.3951C236.507 73.2838 237.045 73.1726 237.648 73.1169C238.334 73.052 239.075 73.0613 239.836 73.1262C240.652 73.1818 241.412 73.3209 242.163 73.5064C242.728 73.6454 243.275 73.7845 243.822 73.9977C245.89 70.6229 247.911 67.3964 249.914 64.2811Z", fill: colors[1] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M219.625 63.3722C215.434 59.2741 211.243 55.2503 207.08 51.3562C206.83 51.4119 206.561 51.4397 205.782 51.4397C205.161 51.4582 204.243 51.4119 203.334 51.2821C202.667 51.2357 201.99 51.1337 201.387 51.0039C197.558 54.5642 193.673 58.3841 189.733 62.4358C185.932 66.3762 182.047 70.5577 178.125 75.0358C178.32 75.1934 178.496 75.3511 178.691 75.4994C179.061 75.8888 179.46 76.2782 179.794 76.714C180.118 77.1312 180.452 77.5762 180.74 78.0398C180.916 78.3272 181.101 78.6425 181.259 78.9577C189.816 78.7259 198.198 78.6888 206.403 78.7815C214.534 78.9021 222.499 79.1431 230.268 79.514C230.352 78.7537 230.546 78.0398 230.834 77.4279C231.131 76.7881 231.539 76.167 232.03 75.6477C227.913 71.4941 223.76 67.396 219.625 63.3722Z", fill: colors[2] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M147.602 114.125C142.438 121.459 137.153 129.302 131.841 137.628C132.963 138.463 133.927 139.381 134.715 140.4C135.549 141.439 136.198 142.579 136.662 143.775C147.343 142.208 157.848 140.771 168.13 139.464C178.366 138.175 188.388 137.016 198.16 135.987C198.207 134.309 198.531 132.686 199.134 131.259C199.774 129.784 200.692 128.449 201.85 127.281C199.403 124.37 196.937 121.449 194.498 118.473C187.415 109.98 180.22 101.404 173.266 93.1246C171.662 93.5326 169.975 93.6902 168.297 93.6717C166.628 93.6717 164.913 93.4121 163.309 92.9299C158.154 99.5313 152.924 106.587 147.602 114.125Z", fill: colors[4] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M188.648 102.637C194.832 110.045 200.96 117.388 206.681 124.249C207.293 124.036 207.914 123.869 208.581 123.702C209.481 123.517 210.389 123.415 211.4 123.378C212.448 123.341 213.468 123.415 214.487 123.563C215.275 123.693 216.064 123.851 216.805 124.092C220.013 117.5 223.129 111.288 226.179 105.437C229.201 99.5963 232.215 94.0704 235.126 88.8783C234.347 88.2478 233.596 87.5803 232.947 86.82C232.307 86.0783 231.751 85.2624 231.325 84.3816C223.416 84.0756 215.396 83.9088 207.228 83.9088C199.06 83.8717 190.724 83.9922 182.232 84.2796C182.083 85.4664 181.675 86.616 181.026 87.7194C180.424 88.7392 179.608 89.6849 178.569 90.5194C181.944 94.5711 185.319 98.6135 188.648 102.637Z", fill: colors[3] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M319.711 109.952C324.003 114.903 328.25 119.892 332.478 124.991C332.997 124.796 333.553 124.694 334.109 124.676C334.629 124.666 335.157 124.722 335.695 124.852C335.732 121.004 335.704 117.212 335.648 113.541C335.611 109.684 335.509 106.003 335.389 102.507C335.231 102.35 335.074 102.192 334.944 102.035C334.434 101.571 333.98 101.024 333.544 100.505C333.154 100.032 332.821 99.5776 332.515 99.1047C328.491 97.9458 324.356 96.8703 320.054 95.8411C315.9 94.8491 311.617 93.8663 307.213 92.9855C307.194 93.0133 307.194 93.0411 307.194 93.0596V93.0875C307.213 93.3934 307.148 93.7272 307.073 94.0424C307.009 94.3577 306.907 94.6914 306.777 94.9881C306.721 95.1365 306.684 95.2477 306.628 95.3497C311.032 100.134 315.381 104.992 319.711 109.952Z", fill: colors[1] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M339.441 115.201C339.515 118.909 339.552 122.775 339.533 126.781C339.923 127.077 340.294 127.402 340.692 127.773C341.147 128.236 341.638 128.756 342.083 129.293V129.312C342.528 129.868 342.927 130.443 343.288 131.046C343.557 131.5 343.798 131.945 344.021 132.418C347.47 132.733 350.798 133.085 354.025 133.456C357.01 133.809 359.922 134.198 362.75 134.606C362.666 134.309 362.601 134.022 362.564 133.744C362.499 133.243 362.49 132.761 362.508 132.371C360.904 130.165 359.226 127.94 357.502 125.687C355.694 123.369 353.951 121.125 352.236 118.918C352.189 118.9 352.161 118.881 352.134 118.854C352.087 118.863 352.078 118.816 352.05 118.77C352.022 118.724 351.994 118.677 351.967 118.64C350.149 116.341 348.369 114.153 346.636 112.048C344.92 109.971 343.159 107.83 341.323 105.669C340.924 105.642 340.47 105.567 340.034 105.456C339.765 105.354 339.487 105.243 339.2 105.122C339.302 108.358 339.404 111.724 339.441 115.201Z", fill: colors[1] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M368.887 157.21C368.368 152.203 367.784 147.345 367.107 142.663C366.773 142.273 366.439 141.884 366.124 141.458C365.753 140.985 365.401 140.456 365.039 139.909V139.891C364.891 139.677 364.77 139.473 364.659 139.297C364.622 139.186 364.557 139.103 364.474 138.991C361.423 138.565 358.29 138.166 355.091 137.814C351.939 137.462 348.693 137.128 345.356 136.84C345.411 137.489 345.439 138.073 345.365 138.685C345.309 139.371 345.17 140.011 344.957 140.586C348.99 145.806 352.949 151.044 356.825 156.311C360.709 161.595 364.502 166.88 368.145 172.146C368.238 172.091 368.303 172.054 368.368 172.026C368.674 171.905 368.97 171.803 369.276 171.748C369.555 171.674 369.814 171.664 370.111 171.655C370.129 171.655 370.157 171.655 370.176 171.655C369.777 166.704 369.369 161.874 368.887 157.21Z", fill: colors[2] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M354.46 159.064C350.585 153.77 346.579 148.504 342.5 143.21C341.999 143.442 341.471 143.553 340.896 143.599C340.377 143.618 339.848 143.562 339.292 143.469C339.144 149.023 338.912 154.781 338.643 160.789C338.328 166.871 337.966 173.166 337.521 179.721C338.596 180.426 339.616 181.353 340.516 182.456C341.378 183.467 342.148 184.681 342.797 186.017C346.765 185.154 350.687 184.255 354.609 183.374C358.373 182.549 362.035 181.705 365.623 180.926C365.419 179.86 365.364 178.822 365.391 177.895C365.419 176.856 365.586 175.883 365.873 175.067C362.137 169.689 358.345 164.349 354.46 159.064Z", fill: colors[3] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M229.601 160.677C226.791 157.293 223.982 153.909 221.154 150.506C220.552 150.784 219.93 150.988 219.281 151.174C218.428 151.415 217.492 151.6 216.463 151.702C215.452 151.786 214.405 151.767 213.329 151.675C212.541 151.582 211.734 151.461 210.983 151.267C209.148 155.476 207.293 159.824 205.346 164.358C203.306 169.198 201.248 174.056 199.227 179.035C197.095 184.255 194.944 189.605 192.783 195.047C190.688 200.341 188.62 205.654 186.562 211.031C188.361 211.986 189.983 213.275 191.318 214.777C192.626 216.288 193.692 218.031 194.424 220.006C197.818 219.227 201.193 218.439 204.558 217.67C222.332 213.507 238.77 209.678 254.078 206.173C253.939 203.966 254.161 201.806 254.699 199.822C255.292 197.745 256.21 195.844 257.378 194.166C248.635 183.606 239.15 172.165 229.601 160.677Z", fill: colors[5] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mask", { id: "mask1_8_3120", className: "mask-type:luminance", maskUnits: "userSpaceOnUse", x: "131", y: "139", width: "75", height: "75", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M131.572 139.529H205.383V213.108H131.572V139.529Z", fill: "white" }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { mask: "url(#mask1_8_3120)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M199.394 161.892C201.387 157.293 203.343 152.917 205.226 148.699C203.937 147.855 202.796 146.826 201.814 145.667C200.831 144.489 200.006 143.191 199.403 141.763C189.622 142.895 179.562 144.183 169.252 145.602C158.821 147.048 148.187 148.624 137.376 150.33C137.237 151.109 137.07 151.925 136.801 152.713C136.458 153.696 136.013 154.697 135.411 155.68C134.845 156.681 134.168 157.618 133.436 158.526C132.852 159.185 132.231 159.815 131.572 160.418C137.367 168.92 143.412 177.487 149.67 186.1C155.715 194.454 161.964 202.891 168.464 211.337C169.233 210.976 169.984 210.642 170.782 210.364C171.811 209.965 172.923 209.668 174.008 209.437C175.121 209.214 176.196 209.057 177.253 209.01C178.116 208.992 178.95 209.001 179.757 209.084C181.982 203.586 184.142 198.19 186.339 192.841C188.592 187.315 190.845 181.937 193.08 176.699C195.157 171.674 197.252 166.732 199.394 161.892Z", fill: colors[5] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mask", { id: "mask2_8_3120", className: "mask-type:luminance", maskUnits: "userSpaceOnUse", x: "343", y: "184", width: "29", height: "51", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M343.047 184.626H371.891V234.47H343.047V184.626Z", fill: "white" }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { mask: "url(#mask2_8_3120)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M371.789 210.938C371.733 203.975 371.557 197.272 371.26 190.791C370.454 190.179 369.703 189.41 368.98 188.501C368.312 187.639 367.7 186.647 367.181 185.581C363.472 186.434 359.764 187.324 356.027 188.214C352.124 189.122 348.221 190.04 344.289 190.958C344.531 192.349 344.549 193.712 344.429 194.982C344.262 196.391 343.919 197.661 343.399 198.811C347.822 204.736 352.152 210.632 356.407 216.566C360.58 222.342 364.622 228.091 368.553 233.793C369.017 233.338 369.536 233.005 370.074 232.754C370.602 232.485 371.177 232.346 371.77 232.346C371.863 224.938 371.882 217.809 371.789 210.938Z", fill: colors[4] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M353.811 220.182C349.528 214.202 345.142 208.213 340.673 202.223C340.432 202.418 340.182 202.566 339.885 202.724C339.403 202.984 338.893 203.188 338.355 203.327C337.808 203.475 337.243 203.568 336.659 203.596C336.343 203.596 336 203.568 335.639 203.54C335.305 207.425 334.906 211.458 334.489 215.621C334.053 219.978 333.59 224.475 333.052 229.074C332.561 233.83 331.995 238.624 331.439 243.565C330.855 248.257 330.271 252.985 329.649 257.871C330.697 258.557 331.68 259.448 332.589 260.523C333.423 261.534 334.174 262.72 334.814 264.009C340.488 260.987 345.865 258.029 350.946 255.127C356.222 252.104 361.182 249.156 365.846 246.282C365.716 245.642 365.632 245.002 365.605 244.326C365.53 243.519 365.493 242.675 365.54 241.85C365.567 241.053 365.66 240.265 365.79 239.495C365.911 238.883 366.04 238.327 366.216 237.789C362.202 231.976 358.104 226.116 353.811 220.182Z", fill: colors[5] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M330.095 214.295C330.531 210.141 330.967 206.034 331.338 201.973C330.207 201.213 329.15 200.248 328.204 199.127C327.286 198.042 326.489 196.753 325.849 195.372C315.854 197.736 304.988 200.341 293.473 203.086C290.877 203.735 288.253 204.356 285.629 204.986C285.861 207.091 285.722 209.158 285.314 211.124C284.896 213.136 284.164 215.046 283.163 216.715C284.618 218.476 286.055 220.266 287.492 222.027C297.469 234.164 307.371 246.31 317.736 259.049C318.135 258.659 318.524 258.326 318.96 258.01C319.572 257.537 320.295 257.157 321.056 256.851C321.816 256.555 322.558 256.351 323.355 256.239C323.92 256.165 324.458 256.147 325.005 256.175C325.663 251.372 326.285 246.699 326.869 242.184C327.462 237.363 328.037 232.578 328.603 227.776C329.122 223.233 329.622 218.745 330.095 214.295Z", fill: colors[5] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mask", { id: "mask3_8_3120", className: "mask-type:luminance", maskUnits: "userSpaceOnUse", x: "252", y: "220", width: "63", height: "79", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M252.853 220.229H314.565V299H252.853V220.229Z", fill: "white" }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { mask: "url(#mask3_8_3120)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M284.014 226.589C282.503 224.735 280.955 222.862 279.416 220.98C278.804 221.471 278.146 221.935 277.459 222.306C276.532 222.806 275.531 223.252 274.465 223.548C273.417 223.845 272.369 223.993 271.303 224.012C270.506 224.049 269.671 224.012 268.883 223.901C264.118 244.085 258.944 265.929 253.27 289.673C253.205 289.784 253.196 289.914 253.177 290.016C254.837 290.888 256.302 292.121 257.572 293.697C258.768 295.208 259.76 296.961 260.483 298.991C265.184 297.062 269.866 295.023 274.539 292.955C279.36 290.851 284.07 288.727 288.687 286.651C293.193 284.555 297.532 282.571 301.64 280.643C305.562 278.77 309.437 276.925 313.146 275.117C312.886 273.123 312.905 271.139 313.127 269.285C313.35 267.366 313.823 265.511 314.518 263.88C304.736 251.817 294.399 239.217 284.014 226.589Z", fill: colors[6] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M247.234 287.828C253.038 264.427 258.369 242.861 263.45 222.083C261.661 221.073 260.038 219.673 258.648 217.967C257.294 216.344 256.153 214.425 255.365 212.292C253.687 212.719 252.009 213.108 250.349 213.498C233.577 217.587 215.433 222.009 195.462 226.923C195.351 229.157 194.868 231.318 194.025 233.432C193.181 235.536 191.966 237.595 190.52 239.43C194.099 243.909 197.761 248.377 201.386 252.865C205.113 257.352 209.017 262.007 213.004 266.726L213.013 266.782C213.013 266.809 213.013 266.809 213.041 266.8C213.087 266.846 213.143 266.921 213.198 266.958C217.037 271.519 220.94 276.062 224.899 280.633C228.598 284.926 232.335 289.145 236.053 293.345C236.757 292.64 237.573 292.019 238.389 291.453C239.418 290.749 240.512 290.155 241.634 289.692C242.71 289.228 243.767 288.941 244.787 288.746C245.547 288.635 246.307 288.542 247.067 288.56C247.123 288.319 247.179 288.097 247.234 287.828Z", fill: colors[6] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M319.785 81.8136C316.048 77.9474 312.312 74.1831 308.575 70.5579C308.047 70.5394 307.454 70.4374 306.786 70.2613C306.285 70.1222 305.757 69.946 305.228 69.7142C304.922 70.9566 304.635 72.1527 304.348 73.3765C303.541 76.7514 302.734 80.2097 302.002 83.3898C302.901 84.1501 303.708 84.966 304.431 85.8282C305.154 86.709 305.748 87.6733 306.23 88.6561C310.652 89.5554 314.908 90.5196 319.052 91.5581C323.039 92.5408 326.915 93.57 330.679 94.6455C330.67 94.5528 330.651 94.4508 330.67 94.3581C330.66 94.0799 330.67 93.774 330.688 93.5422C327.119 89.5739 323.484 85.6799 319.785 81.8136Z", fill: colors[0] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M300.852 69.4824C301.01 68.787 301.186 68.0916 301.362 67.3963C300.787 66.9234 300.222 66.432 299.702 65.9128C299.137 65.3473 298.608 64.7539 298.182 64.142C293.602 62.7327 288.873 61.4161 284.043 60.1552C279.407 58.9128 274.586 57.7538 269.625 56.6691C269.514 56.8916 269.394 57.1326 269.236 57.3273C269.106 57.5035 268.986 57.6055 268.856 57.7446C272.806 61.3327 276.746 65.0413 280.677 68.8519C284.71 72.7831 288.725 76.7142 292.721 80.7381C293.509 80.5248 294.399 80.4321 295.363 80.5248C296.179 80.599 297.088 80.7937 297.997 81.1275C298.951 77.1778 299.925 73.2745 300.852 69.4824Z", fill: colors[0] }, void 0, false, {
          fileName: "app/components/logos/ShieldLogo.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/logos/ShieldLogo.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("clipPath", { id: "clip0_8_3120", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", { width: "400", height: "300", fill: "white" }, void 0, false, {
        fileName: "app/components/logos/ShieldLogo.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/logos/ShieldLogo.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/logos/ShieldLogo.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/logos/ShieldLogo.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: classNames(`inline-block font-['monospace'] uppercase font-bold`, textColor), children: "Web3Firewall" }, void 0, false, {
      fileName: "app/components/logos/ShieldLogo.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/logos/ShieldLogo.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c = ShieldLogo;
var ShieldLogo_default = ShieldLogo;
var _c;
$RefreshReg$(_c, "ShieldLogo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/login._index.tsx
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/login._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/login._index.tsx"
  );
  import.meta.hot.lastModified = "1709234125913.34";
}
var meta = () => {
  return [{
    title: "Web3Firewall - Login"
  }, {
    name: "description",
    content: "Welcome to Web3Firewall!"
  }];
};
function LoginPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShieldLogo_default, { className: "mx-auto h-10 w-auto", color: "light" }, void 0, false, {
        fileName: "app/routes/login._index.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Sign in to your account" }, void 0, false, {
        fileName: "app/routes/login._index.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login._index.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "space-y-6", method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "username", className: "block text-sm font-medium leading-6 text-gray-900", children: "Email address" }, void 0, false, {
          fileName: "app/routes/login._index.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: "username", name: "username", type: "email", autoComplete: "email", required: true, className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }, void 0, false, {
          fileName: "app/routes/login._index.tsx",
          lineNumber: 82,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/login._index.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login._index.tsx",
        lineNumber: 77,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", children: "Password" }, void 0, false, {
          fileName: "app/routes/login._index.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", required: true, className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }, void 0, false, {
          fileName: "app/routes/login._index.tsx",
          lineNumber: 91,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/login._index.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login._index.tsx",
        lineNumber: 86,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: "remember-me", name: "remember-me", type: "checkbox", className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" }, void 0, false, {
            fileName: "app/routes/login._index.tsx",
            lineNumber: 97,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "remember-me", className: "ml-3 block text-sm leading-6 text-gray-900", children: "Remember me" }, void 0, false, {
            fileName: "app/routes/login._index.tsx",
            lineNumber: 98,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login._index.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "font-semibold text-indigo-600 hover:text-indigo-500", children: "Forgot password?" }, void 0, false, {
          fileName: "app/routes/login._index.tsx",
          lineNumber: 104,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/login._index.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login._index.tsx",
        lineNumber: 95,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Sign in" }, void 0, false, {
        fileName: "app/routes/login._index.tsx",
        lineNumber: 111,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/login._index.tsx",
        lineNumber: 110,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login._index.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/login._index.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/login._index.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login._index.tsx",
    lineNumber: 66,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login._index.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_c2 = LoginPage;
var _c2;
$RefreshReg$(_c2, "LoginPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LoginPage as default,
  meta
};
//# sourceMappingURL=/build/routes/login._index-6CUNYWWX.js.map
