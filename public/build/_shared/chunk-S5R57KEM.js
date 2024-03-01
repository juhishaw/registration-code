import {
  createHotContext
} from "/build/_shared/chunk-E2CO66ZG.js";

// app/utils/BigDecimal.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/BigDecimal.ts"
  );
  import.meta.hot.lastModified = "1708356365269.6106";
}
var BigDecimal = class {
  decimals = 0;
  value = BigInt(0);
  constructor(value, decimals = 18) {
    this.decimals = decimals;
    let [ints, decis] = String(value).split(".").concat("");
    decis = decis.padEnd(this.decimals, "0");
    this.value = BigInt(ints + decis);
  }
  static fromBigInt(value) {
    return Object.assign(Object.create(BigDecimal.prototype), { value, decimals: 18 });
  }
  divide(divisor) {
    return BigDecimal.fromBigInt(this.value * BigInt("1" + "0".repeat(this.decimals)) / divisor.value);
  }
  multiply(divisor) {
    return BigDecimal.fromBigInt(this.value * divisor.value / BigInt("1" + "0".repeat(this.decimals)));
  }
  add(divisor) {
    return BigDecimal.fromBigInt(this.value + divisor.value);
  }
  subtract(divisor) {
    return BigDecimal.fromBigInt(this.value - divisor.value);
  }
  toString() {
    const s = this.value.toString().padStart(this.decimals + 1, "0");
    return ((s.slice(0, -this.decimals) || "0") + "." + s.slice(-this.decimals).replace(/\.?0+$/, "")).replace(/\.$/, "");
  }
};

export {
  BigDecimal
};
//# sourceMappingURL=/build/_shared/chunk-S5R57KEM.js.map
