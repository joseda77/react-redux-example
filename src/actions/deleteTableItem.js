import { DELETE_TABLE_ITEM } from '../constants/constant'

/** Objeto que se relaciona con las constates definidas previamente y que contiene informacion para los reducers */
const deleteTableItem = (tableId, id) => {
    return {
        type: DELETE_TABLE_ITEM,
        tableId: tableId,
        id: id
    }
}

export default deleteTableItem