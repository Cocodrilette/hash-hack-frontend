enum OrderType {
  BUY = "BUY",
  SELL = "SELL",
}

enum AccountType {
  RETIREMENT = "RETIREMENT",
  INSTITUTIONAL = "INSTITUTIONAL",
}

export enum Direction {
  LONG = 0,
  SHORT = 1,
}

export interface RevealType {
  tickerSymbol: string;
  orderType: OrderType;
  accountType: AccountType;
  quantity: number;
  price: number;
  timeInForce: number;
  direction: Direction;
}

export interface CommitmentType {
  hash: string;
  revealed: boolean;
  blockNumber: number;
}
