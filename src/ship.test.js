const ship = require("./ship.js")


test("Testing ship parameters", () =>
{
    let newShip = ship(4);
    let newShip2 = ship(6);

    newShip.setSunk(true);

    for (let i = 0; i < 3; i++) 
    {
        newShip.hit();
    }

    expect(newShip.getLength()).toBe(4);
    expect(newShip.isSunk()).toBe(true);
    expect(newShip.checkHitCount()).toBe(3);
});