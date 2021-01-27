const intern = require("../lib/intern");

test("set school using constructor", () => {
    const testValue = "NYU";
    const newbie = new intern("Woo", 1, "test@test.com", testValue);
    expect(newbie.school).toBe(testValue);
});

test("using getRole() to return", () => {
    const testValue = "Intern";
    const newbie = new intern("Woo", 1, "test@test.com", "NYU");
    expect(newbie.getRole()),toBe(testValue);
});

test("get school via function", () => {
    const testValue = "NYU";
    const newbie = new intern("Woo", 1, "test@test.com", testValue);
    expect(newbie.getSchool()).toBe(testValue);
});