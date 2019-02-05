import { ADD_TABLE_ITEM } from "../constants/constant"

/** Objeto que se relaciona con las constates definidas previamente y que contiene informacion para los reducers */

const addTableItem = (name, price, id) => {
    return {
        type: ADD_TABLE_ITEM,
        tableId: id,
        item:{
            name: name,
            price: price
        }
    }
}

export default addTableItem