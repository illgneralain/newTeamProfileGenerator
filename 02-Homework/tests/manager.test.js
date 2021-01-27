const manager = require("../lib/manager");
const employee = require("../lib/employee");

test("set office number", () => {
    const testValue = 100;
    const newbie = new manager("Woo", 1, "test@test.com", testValue);
    expect (newbie.officeSpace).toBe(testValue);
});

test("getrole by number", () => {
    const testValue = "Manager";
    const newbie = new manager("Woo", 1, "test@test.com", 100);
    expect(newbie.getRole()).toBe(testValue);
});

test("get office number", () => {
    const testValue = 100;
    const newbie = new manager("Woo", 1, "test@test.com", testValue);
    expect (newbie.officeSpace).toBe(testValue);
});