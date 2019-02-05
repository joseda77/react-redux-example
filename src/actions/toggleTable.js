import { TOGGLE_TABLE } from '../constants/constant'

/** Objeto que se relaciona con las constates definidas previamente y que contiene informacion para los reducers */
const toggleTable = id => {
    return{
        type: TOGGLE_TABLE,
        id: id
    }
}

export default toggleTable