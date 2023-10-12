const player = () => {
    // Variable keeps track of all the attack calls we have made.
    const attackCallList = [];

    // This method handles the player's attack call on (x, y)
    const attack = (x, y) => {
        // If (x, y) has been attacked already, then we return false because we cannot attack twice
        if(checkAttackCoord(x, y)){ return false };
        // We can attack (x, y)
        // Call pubsub event that we are attacking (x, y)

        // Make sure to add the attack call coords to the attackCallList for future checks
        attackCallList.push({x, y});
        return true;
    };

    // This method handles checking to see if we already made an attack call at (x, y)
    const checkAttackCoord = (x, y) => {
        let coord = {x, y};
        // I tried multiple different array methods and for some reason only this one works in this format.
        // I tried doing if(element === coord) but it never works. Doesn't do a deep check I guess?
        return attackCallList.some((element) => {
            if(element.x === coord.x && element.y === coord.y)
            {
                return true;
            }
        });
    };

    return {
        attack,
    };
}

export default player;