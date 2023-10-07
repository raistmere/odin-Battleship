const gameboard = () => {
    let board = [];
    let activeShips = [];

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
                        cellState: -1,
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
        switch (direction) 
        {
            case "up":
                for (let i = y; i > 0; i--) 
                {
                    if(board[i][x].shipRef !== null) { return false; }
                }

                activeShips.push(ship);
                for (let i = y; i > 0; i--) 
                {
                    addShip(ship, x, y);
                    console.log(board[i][x].shipRef);
                }

                return true;
        }

        return false;
    };

    const addShip = (ship, x, y) => {

        board[y][x].shipRef = ship;
    };

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
        addShip,
        getBoardCell,
        getTotalCells,
    };
};

module.exports = gameboard;