class Memory {
    colors = ['red', 'orange', 'blue', 'gray', 'green', 'brown', 'yellow', 'pink', 'black', 'indigo']
    gameSizeArray = []
    gameObj = {}
    constructor(gameSize) {
        this.gameSize = gameSize
    }

    generateGameSize() {
        for (let i = 1; i <= this.gameSize; i++) {
            this.gameSizeArray.push(i);
        }
        this.gameSizeArray.sort(() => 0.5 - Math.random());
    }
    generateGameObject() {
        const colorsInGame = this.colors.slice(0, this.gameSize / 2);
        let counter1 = 0;
        let counter2 = 1;
        for (let i of colorsInGame) {
            this.gameObj[i] = [this.gameSizeArray[counter1], this.gameSizeArray[counter2]];
            counter1 += 2;
            counter2 += 2;
        }
    }
    startGameObject() {
        this.generateGameSize();
        this.generateGameObject();
    }
}


const game = new Memory(10);
game.startGameObject()