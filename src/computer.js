const computer = () => {
    // Variable keeps track of all the attack calls the computer has made.
    const attackCallList = [];

    const attack = () => {
        // Keeps track of the current attack coords
        let coord;
        // Flag bool that is used to check if the attack coords is valid
        let pass = false;
        // We want to make sure that the attack coord is valid and we haven't attacked that coords before.
        // Loop till we get a valid coord to attack
        while(!pass)
        {
            // Randomly get an attack coord
            coord = findAttackCoord();
            // Check to see if that attack coord is valid coord to attack
            if(!checkAttackCoords(coord))
            {
                pass = true;
            }
        }

        // Attack coord is valid, so we can now call the attack event that the board will receive.
        //pubsub attack event publish call

        return true;
    };

    // This method handles generating a new attack coordinate based on a 10x10 grid
    const findAttackCoord = () => {
        let x;
        let y;

        x = Math.floor((Math.random()) * 10);
        y = Math.floor((Math.random()) * 10);

        return {x, y};
    };

    // This method handles checking to see if the attack coords is valid by comparing to the current
    // attackCallList elements.
    const checkAttackCoords = (coord) => {
        return attackCallList.some((element) => element.x === coord.x && element.y === coord.y);
    }

    return{
        attack,
    };
};

export default computer;