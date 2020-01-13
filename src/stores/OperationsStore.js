import { observable, action } from "mobx";
export class OperationsStore {

    @observable amount
    @observable vendor
    @observable category

    @action handleChange = e => {
        const name = e.traget.id
        const value = e.target.value
        this[name]=value
    }
}

export default OperationsStore