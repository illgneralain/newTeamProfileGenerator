const engineer = require("../lib/engineer");

test("set Github account using constructor", () => {
    const testValue = "githubUser";
    const newbie = new engineer("Woo", 1, "test@test.com")
    expect(typeof(newbie)).toBe("object");
});

test("using getRole()", () => {
    const testValue = "Engineer";
    const newbie = new engineer("Woo", 1, "test@test.com", "GitHubUser");
    expect(newbie.getRole()).toBe(testValue);
});

test("get github username", () => {
    const testValue = "githubUser";
    const newbie = new engineer("Woo", 1, "test@test.com", testValue);
    expect(newbie.getGithub()).toBe(testValue);
});

