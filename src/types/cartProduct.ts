import { ProductType } from "./product";

export interface CartProduct extends ProductType {
  quantity: number;
}
