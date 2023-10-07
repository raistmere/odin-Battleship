const gameboard = require("./gameboard.js")
const ship = require("./ship.js")


test("Testing gameboard functions", () => {
    let gameboard1 = gameboard();
    let newShip = ship(3);

    // TEST: Want to make sure we always have the correct amount of cells on the board. Should be 100 cells (10x10).
    expect(gameboard1.getTotalCells()).toBe(100);
    // TEST: Check to see if we can place the new ship on the board. Should return true or false.
    // If the expect is false, that means that the ship can not be added due to placement error. This means that we have to pick different placement.
    // True means that we can place it on the board.
    expect(gameboard1.canWeAddShip(newShip, 0, 0, "down")).toBe(true);
    // TEST: We want to check to see when we CANNOT place a ship on the board.
    // We need to check for edge cases in the board array. board[0][11] is not possible.
    expect(gameboard1.canWeAddShip(newShip, 0, 10, "down")).toBe(false);
    // TEST: Check to see if adding a new ship works.
    expect(gameboard1.getActiveShips()).toBe(1);
    // TEST: Check to see if the board cells has the correct shipRef
    // In this case, newShip has 3 length, therefore 3 board cells should have the same shipRef
    // We added the newShip to the board with an down direction. So we check cells down 2 from (x, y) coords
    expect(gameboard1.getBoardCell(0, 0).shipRef).toStrictEqual(newShip);
    expect(gameboard1.getBoardCell(0, 1).shipRef).toStrictEqual(newShip);
    expect(gameboard1.getBoardCell(0, 2).shipRef).toStrictEqual(newShip);
    // TEST: Check to see if the same board cells has the correct shipREF length (Deeper check)
    expect(gameboard1.getBoardCell(0, 0).shipRef.getLength()).toBe(newShip.getLength());
    expect(gameboard1.getBoardCell(0, 1).shipRef.getLength()).toBe(newShip.getLength());
    expect(gameboard1.getBoardCell(0, 2).shipRef.getLength()).toBe(newShip.getLength());
    // TEST: Checking to see if the newShip on the board is passed by reference not value.
    // Calling newShip.hit() and check to see if it reflects on the same board cells.
    newShip.hit();
    expect(newShip.checkHitCount()).toBe(1); // Should pass because we just called it.
    expect(gameboard1.getBoardCell(0, 0).shipRef.checkHitCount()).toBe(1); // If it's passed by ref, then this should also be 1
    expect(gameboard1.getBoardCell(0, 1).shipRef.checkHitCount()).toBe(1); // If it's passed by ref, then this should also be 1
    expect(gameboard1.getBoardCell(0, 2).shipRef.checkHitCount()).toBe(1); // If it's passed by ref, then this should also be 1
    // TEST: Check to see if the board can receive an attack command from the player
    // true = ship exist and can be attack, false = ship does not exist
    // Reason: We might need a return value for attacking to give the player a visual feedback.
    expect(gameboard1.getAttack(0, 0)).toBe(true); // There is a ship at (x, y), so this should return true
    expect(gameboard1.getAttack(1, 0)).toBe(false); // There is no ship at (x, y), so this should return false
    // TEST: Check to see if the board cell at (0, 0) did get hit and check state
    // Check to see if the newShip did get attacked at (0, 0)
    expect(gameboard1.getBoardCell(0, 0).state).toBe(1); // There is a ship on the cell so it will be a hit.
    expect(gameboard1.getBoardCell(0, 0).shipRef.checkHitCount()).toBe(2); // There was a hit, so the ship should have 2 hits now (1 from previous test)
    expect(gameboard1.getBoardCell(1, 0).state).toBe(-1); // This checks an empty cell for a miss test
    // TEST: Check to see if we can keep track of all the misses (totalMissCount, missPosList)
    expect(gameboard1.getMissCount()).toBe(1); // This should be 1 beacause of the above miss test.
    // TEST:Check to see if we can keep track of all the hit positions on the board
    expect(gameboard1.getHitCount()).toBe(1); // Hit count for this should be 1 because we only did one getAttack() call. The newShip.hit() is not a getAttack() call.
});
