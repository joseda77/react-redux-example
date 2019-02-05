import { SELECT_TABLE } from '../constants/constant'

/** Objeto que se relaciona con las constates definidas previamente y que contiene informacion para los reducers */
const selectTable = id => {
    return {
        type: SELECT_TABLE,
        id: id
    }
}

export default selectTable