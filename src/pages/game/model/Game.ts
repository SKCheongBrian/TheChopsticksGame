import GameUser from "./GameUser";

export default class Game {
    id: string;
    gameUsers: GameUser[];

    constructor(id, gameUsers: GameUser[] ) {
        this.id = id;
        this.gameUsers = gameUsers;
    }
}