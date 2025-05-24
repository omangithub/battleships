import Linkedlist from "./linked-list.js"

export const testFunction = function (a) {
   return "hello"
}

export const Ship = class {
    constructor (length, numberOfHits, coordinates, shipType) {
      this.length = length;
      this.numberOfHits = numberOfHits;
      this.sunk = false;
      this.coordinates = coordinates;
      this.shipType = shipType;
    }

    hit() {
    this.numberOfHits++;
    }

    isSunk () {
    if (this.numberOfHits===this.length) {
        this.sunk=true;
    }
    }
}

function battleship () {

}

const Gameboard = class {
    constructor (boardSize = 10, numOfShips = 5, shipsArr = []) {
        this.boardSize = boardSize
        this.numOfShips = numOfShips;
        this.shipsArr = shipsArr;
        let board = []
    }

    buildBoard () {
        for (let i=0;i<this.boardSize;i++) {
            board[i]=new Linkedlist(length=10)
        }
    }

    initializeBoard () {
        let carrier = new Ship(5, 0,[[2,2],[2,3][2,4],[2,5][2,6]],"Carrier");
        let battleship = new Ship(4, 0,[[4,4],[4,5][4,6],[4,7]],"Battleship");
        let cruiser = new Ship(3, 0,[[6,2],[6,3][6,4]],"Cruiser");
        let submarine = new Ship(3, 0,[[6,7],[6,8][6,9]],"Submarine");
        let destroyer = new Ship(2, 0,[[8,3],[8,4]],"Destroyer");
        }
    } 
    }

    buildBoard () {

    }

    receiveAttack (hori, vert) {
    let hitShip = false;
//    for(i=0;i<this.gridArrVert.length;i++) {
//        if (this.gridArrHori[i]===hori) {
//        for (j=0;j<this.gridArrVert.length;j++)
//    }}
    
    if (hori===true && vert===true) {
        ships[]hit
    }
    }
}

