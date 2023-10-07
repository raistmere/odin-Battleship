const gameboard = () => {
    // This variable is the main board that holds all the data for all the cells
    let board = [];
    //  This variable holds all the active ships on the board (For this specific board).
    let activeShips = [];
    // This variable holds all the miss attempts positions on the board (x, y)
    let missPosList = [];
    // This variable holds all the hit attempts positions on the board (x, y)
    let hitPosList = [];

    const initilization = () =>
    {
        // Create board with default values
        for (let i = 0; i < 10; i++) 
        {
            board.push([]);

            for (let j = 0; j < 10; j++) 
            {
                board[i].push
                (
                    {
                        //State keeps track if the cell has been attacked
                        // 0 = nothing, -1 = miss, 1 = hit
                        state: 0,
                        // This holds the reference to a ship object
                        shipRef: null,
                    }
                );          
            };
        };
    };

    const getActiveShips = () => {
        return activeShips.length;
    };

    const canWeAddShip = (ship, x, y, direction) => {
        // Check to see what direction the rear of the boat is heading based on (x, y) front position.
        if(direction === "down")
        {
            // Check to see if the cells we need is empty or avaliable for ship placement.
            for (let i = 0; i < ship.getLength(); i++) 
            {
                // Check the edge case where the ship might go out of bounds of the array.
                if((y + 1) > 10) { return false; }

                // Check to see if there are any other ships already on the board cells.
                if(board[(y + i)][x].shipRef !== null)
                {
                    // This return false allows us to tell whoever called the method that we are "NOT GOOD TO GO *Thumbs down*".
                    return false; 
                }
            }

            // At this point, the cells are empty and we can go ahead and add the ship to the board.
            // Add ship to activeShips array
            activeShips.push(ship);
            // Add ship references to the board cells based on the (x, y) + ship length offset.
            for (let i = 0; i < ship.getLength(); i++) 
            {
                board[(y + i)][x].shipRef = ship;
            }

            // This return true allows us to tell whoever called the method that we are "GOOD TO GO! *Thumbs up*".
            return true;
        }
    };

    // This method handles receiving an attack from the current player.
    const getAttack = (x, y) => {
        // Get the cell data
        let cell = getBoardCell(x, y);
        // Check to see if the cell has a ship on it
        if(cell.shipRef)
        {
            // Because there is a ship, we go ahead and declare a hit. (1 = hit for the state)
            cell.state = 1;
            // Because there is a ship, we want to make sure to call the hit() for that ship.
            cell.shipRef.hit();
            // Make sure to add to the hitPosList to keep track of all the hits we made
            hitPosList.push({x, y});
            // Return true that we hit a ship
            return true;
        }
        // If there is no ship on the cell, we want to declare a miss.
        else
        {
            // Because there is no ship, we go ahead and declare a miss (-1 = miss)
            cell.state = -1;
            // Make sure to add the miss position to the missPosList for tracking misses
            missPosList.push({x, y});
            // Return false that we missed our attack
            return false;
        }
    }

    const getMissCount = () => {
        return missPosList.length;
    }

    const getHitCount = () => {
        return hitPosList.length;
    }

    const getBoardCell = (x, y) => {
        return board[y][x];
    }

    const getTotalCells = () => {
        let total = 0;
        board.forEach(element => {
            total += element.length;
        });

        return total;
    }

    initilization();

    return {
        getActiveShips,
        canWeAddShip,
        getAttack,
        getMissCount,
        getHitCount,
        getBoardCell,
        getTotalCells,
    };
};

module.exports = gameboard;