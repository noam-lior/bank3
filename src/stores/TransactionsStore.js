import { observable, action } from "mobx";
export class TransactionsStore {
  @observable transactions = [
    { amount: 3200, vendor: "Elevation", category: "Salary" },
    { amount: -7, vendor: "Runescape", category: "Entertainment" },
    { amount: -20, vendor: "Subway", category: "Food" },
    { amount: -98, vendor: "La Baguetterie", category: "Food" }
  ]

}

export default TransactionsStore