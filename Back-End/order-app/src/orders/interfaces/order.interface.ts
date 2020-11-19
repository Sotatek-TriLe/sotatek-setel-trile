export interface Order {
  id: number;
  productList: string;
  status: Status;
}
export enum Status {
  Created = 1,
  Confirmed = 2,
  Cancelled = 3,
  Delivered = 4,
}
