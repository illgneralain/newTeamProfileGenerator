const employee = require("../lib/employee");

test("start employee instance", () => {
    const newbie = new employee();
    expect(typeof(newbie)).toBe("object");
});

test("sets name using constructor", () => {
    const name = "Alice";
    const newbie = new employee(name);
    expect(newbie.name).toBe(name);
});

test("set id using constructor", () => {
    const testValue = 100;
    const newbie = new employee("Woo", testValue);
    expect(newbie.id).toBe(testValue);
});

test("set email using constructor", () => {
    const testValue = "test@test.com";
    const newbie = new employee("Woo", 1, testValue);
    expect(newbie.email).toBe(testValue);
});

test("get name using getName", () => {
    const testValue = "Alice";
    const newbie = new employee(testValue);
    expect(newbie.getName()).toBe(testValue);
});

test("get id using getID", () => {
    const testValue = 100;
    const newbie = new employee("Woo", testValue);
    expect(newbie.getId()).toBe(testValue);
});

test("get email using getEmail", () => {
    const testValue = "test@test.com";
    const newbie = new employee("Woo", 1, testValue);
    expect(newbie.getEmail()).toBe(testValue);
});

test("getRole using getRole()", () => {
    const testValue = "Employee";
    const newbie = new employee("Woo", 1, "test@test.com");
    expect(newbie.getRole()).toBe(testValue);
});