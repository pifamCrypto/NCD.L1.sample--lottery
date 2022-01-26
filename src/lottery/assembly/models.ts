import { logging, Context, u128, ContractPromiseBatch, PersistentSet } from "near-sdk-as";

import { AccountId } from "../../utils";

/*
    Information about a numbers game.
 */
@nearBindgen
export class Lottery {
    public definition: LotteryDefinition = new LotteryDefinition();
    public numberOfPlayers: u32 = 0;

    private bets: PersistentSet<Bet> = new PersistentSet<Bet>("b");

    addBet(player: AccountId, number: u32):void {
        var bet = new Bet();
        bet.player = player;
        bet.number = number;

        this.bets.add(bet);

        this.numberOfPlayers++;

        logging.log("new bet added");
    }
}

/*
    This class defines a lottery
 */
@nearBindgen
export class LotteryDefinition {
    public minNumber: u32 = 0;
    public maxNumber: u32 = 0;
    public creator: AccountId;
}

/*
    
 */
@nearBindgen
export class Bet {
    public player: AccountId;
    public number: u32;
}

@nearBindgen
export class GameInfo {}
