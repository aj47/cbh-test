const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns valid key when given empty object", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey.length).toBeLessThan(256);
    expect(trivialKey.length).toBeGreaterThan(0);
    expect(typeof trivialKey).toBe("string");
  });
  it("Returns valid key when given non string partition key", () => {
    let trivialKey = deterministicPartitionKey({ partitionKey: 123 });
    expect(trivialKey.length).toBeLessThan(256);
    expect(trivialKey.length).toBeGreaterThan(0);
    expect(typeof trivialKey).toBe("string");
    trivialKey = deterministicPartitionKey({
      partitionKey: { nonString: true },
    });
    expect(trivialKey.length).toBeLessThan(256);
    expect(trivialKey.length).toBeGreaterThan(0);
    expect(typeof trivialKey).toBe("string");
    trivialKey = deterministicPartitionKey({ partitionKey: true });
    expect(trivialKey.length).toBeLessThan(256);
    expect(trivialKey.length).toBeGreaterThan(0);
    expect(typeof trivialKey).toBe("string");
    trivialKey = deterministicPartitionKey({ partitionKey: "as" });
    expect(trivialKey.length).toBeLessThan(256);
    expect(trivialKey.length).toBeGreaterThan(0);
    expect(typeof trivialKey).toBe("string");
  });
  it("Returns same key when given valid partition key", () => {
    const validKey =
      "3c981d0b259b92c2ed5f0eb0afe0608ef5311beb96b976038a733d93c144d6e0319b8be28111161c61d6c630ffa6f0f76327fba131a0c78e4bf4b1b43b28ea14";
    const trivialKey = deterministicPartitionKey({ partitionKey: validKey });
    expect(trivialKey).toBe(validKey);
  });
});
