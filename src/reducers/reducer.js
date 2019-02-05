import { combineReducers } from 'redux';
import {
    ADD_TABLE_ITEM,
    TOGGLE_TABLE,
    DELETE_TABLE_ITEM,
    INCREMENT_MONEY_EARNED,
    SELECT_TABLE
} from '../constants/constant';

/** Vector que contendrá los objetos de la informacion de cada campo como: id, comida, etc. */
var initialTableData  = []

for (let i = 0; i < 16; i++){
    initialTableData.push([])
}

/* Acá se llena un vector con espacios en false, esto es para 
   decir que campos fueron seleccionados  */
var initialTableStatusData = new Array(4).fill(false)


/** Aca el estado adquiere el valor de la variable definida previamente, las acciones que aqui se ven son
 * agregar item a la tabla principal(la comida o predidos), borrar item de la tabla principal, etc.
 */
const tableData = (state  = initialTableData, action) => {
    var stateCopy
    switch (action.type){
        case ADD_TABLE_ITEM:
            stateCopy = [];
            for (let i = 0; i < 4; i++){
                stateCopy.push(state[i].slice())
            }
            stateCopy[action.tableId].push(action.item)
            return stateCopy
        case DELETE_TABLE_ITEM:
            stateCopy = []
            for (let i = 0; i < 4; i++){
                stateCopy.push(state[i].slice())
            }
            stateCopy[action.tableId].splice(action.id,1)
            return stateCopy
        case TOGGLE_TABLE:
            stateCopy = []
            for (let i = 0; i < 4; i++){
                stateCopy.push(state[i].slice())
            }
            stateCopy[action.id] = []
            return stateCopy
        default:
            return state
    }
}

/** Acá se inicializa el estado en 0, esto es el costo de los pedidos, se va modificando
 * cada que se agrega o quita un pedido
 */
const moneyEarned = (state = 0, action) => {
    switch (action.type){
        case INCREMENT_MONEY_EARNED:
            return state + action.amount
        default:
            return state    
    }
}

/** Aca se inicializa el state en null, state tomará los valores de cada posicion de la tabla (id) y en caso de ser
 * seleccionado retornará dicho id
 */
const selectedTable  =  (state = null, action)  => {
    switch(action.type){
        case SELECT_TABLE: 
            if(state === action.id){
                return null
            }else {
                return action.id
            }
        default: 
            return state
    }
}

/** Se iniciliza el state con la variable de arreglo inicializada previamente con booleanos, 
 * en caso de que una casilla de la tabla haya sido seleccionada y aun este activa esta retornará null
 */
const tableStatusData = (state = initialTableStatusData, action) => {
    switch(action.type){
        case TOGGLE_TABLE:
            var stateCopy = state.slice()
            stateCopy[action.id] = !stateCopy[action.id]
            return stateCopy;
        default:
            return state
    }
}

const reducer = combineReducers({
    moneyEarned,
    selectedTable,
    tableStatusData,
    tableData
})

export default reducer;