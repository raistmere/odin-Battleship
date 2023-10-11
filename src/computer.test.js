const computer = require("./computer.js");

let computer1 = computer();

// This test checks to see if the computer can attack.
test("Call attack()", () => {
    expect(computer1.attack()).toBe(true);
});