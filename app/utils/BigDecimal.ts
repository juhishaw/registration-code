export class BigDecimal {
  decimals: number = 0
  value: bigint = BigInt(0)

  constructor(value: BigInt | number | string | boolean, decimals=18) {
    this.decimals = decimals

    let [ints, decis] = String(value).split(".").concat("")
    decis = decis.padEnd(this.decimals, "0")
    this.value = BigInt(ints + decis)
  }
  static fromBigInt(value: BigInt) : BigDecimal {
    return Object.assign(Object.create(BigDecimal.prototype), { value, decimals:18 })
  }
  divide(divisor: BigDecimal) : BigDecimal {
    return BigDecimal.fromBigInt(this.value * BigInt("1" + "0".repeat(this.decimals)) / divisor.value)
  }
  multiply(divisor: BigDecimal) : BigDecimal {
    return BigDecimal.fromBigInt(this.value * divisor.value / BigInt("1" + "0".repeat(this.decimals)))
  }
  add(divisor: BigDecimal) : BigDecimal {
    return BigDecimal.fromBigInt(this.value + divisor.value)
  }
  subtract(divisor: BigDecimal) : BigDecimal {
    return BigDecimal.fromBigInt(this.value - divisor.value)
  }
  toString() : string {
    const s = this.value.toString().padStart(this.decimals+1, "0")
    return ((s.slice(0, -this.decimals) || '0') + "." + s.slice(-this.decimals).replace(/\.?0+$/, "")).replace(/\.$/,'')
  }
}
