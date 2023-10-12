
const ship = (length) => {

    // Variables
    let sunk = false;
    let hitCount = 0;

    // Returns the length of the ship.
    const getLength = () => {
        return length;
    }

    // Checks to see if the ship has been sunked.
    const isSunk = () => {
        return sunk;
    }

    // Changes the state of the ship sunk variable.
    const setSunk = (bool) => {
        sunk = bool;
    }

    // Adds a hit to the ship hitCount
    const hit = () => {
        hitCount++;
    }

    // Checks the hitCount of the ship
    const checkHitCount = () => {
        return hitCount;
    }

    return {
        getLength,
        isSunk,
        setSunk,
        hit,
        checkHitCount,
    }
};

export default ship;