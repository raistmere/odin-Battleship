import player from "./player.js";

test("Can player attack?", () => {
    let player1 = player();

    // Check to see if the player can attack that cell
    expect(player1.attack(0, 0)).toBe(true);
    // Test to make sure that if the cell cannot be attacked
    expect(player1.attack(0, 0)).toBe(false);
})

