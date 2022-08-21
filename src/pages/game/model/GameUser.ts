export default class GameUser {
    userId: string;
    hand: string;

    constructor(userId: string, hand: string) {
        this.userId = userId;
        this.hand = hand;
    }
}