const gameboard = require("./gameboard.js")
const ship = require("./ship.js")


test("Testing gameboard functions", () => {
    let gameboard1 = gameboard();
    let newShip = ship(3);
    let newShip2 = ship(5);

   

    // TEST: Want to make sure we always have the correct amount of cells on the board. Should be 100 cells (10x10).
    expect(gameboard1.getTotalCells()).toBe(100);
    // TEST: Check to see if we can place the new ship on the board. Should return true or false.
    // If the expect is false, that means that the ship can not be added due to placement error. This means that we have to pick different placement.
    // True means that we can place it on the board.
    expect(gameboard1.canWeAddShip(newShip, 1, 1, "up")).toBe(true);
    // TEST: Check to see if adding a new ship works.
    expect(gameboard1.getActiveShips()).toBe(1);
    // TEST: Check to see if the board cell has the correct shipRef
    expect(gameboard1.getBoardCell(1, 1).shipRef).toStrictEqual(newShip);
    // TEST: Check to see if the board cell has the correct shipREF length (Deeper check)
    expect(gameboard1.getBoardCell(1, 1).shipRef.getLength()).toBe(newShip.getLength());
    // TEST: Checking to see if the newShip on the board is passed by reference not value.
    // Calling newShip.hit() and check to see if it reflects on the board.
    newShip.hit();
    expect(newShip.checkHitCount()).toBe(1); // Should pass because we just called it.
    expect(gameboard1.getBoardCell(1, 1).shipRef.checkHitCount()).toBe(1); // If it's passed by ref, then this should also be 1

});

