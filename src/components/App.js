import React from 'react';
import { createStore } from 'redux';
import reducer from "../reducers/reducer.js";
import addTableItem from "../actions/addTableItem.js";
import deleteTableItem from "../actions/deleteTableItem.js";
import incrementMoneyEarned from "../actions/incrementMoneyEarned.js";
import selectTable from "../actions/selectTable.js";
import toggleTable from "../actions/toggleTable.js";


/***Esto seria para con cada accion que realice cambios en el estado cada metodo lo aplique y sean enviado (dipatch)
 *  cuando sea necesario
 *  */
const store = createStore(reducer)

/**Aca se retorna la casilla sobre la que se trabaja */
const getSelectedTable = () => {
  var state =  store.getState()
  return state.selectedTable
}

/*Retorna las talbas que se encuentran con datos o activas*/
const getAvailableTables = () => {
  var state = store.getState()
  var tableAvailable = 0  
  for (let i = 0; i < state.tableStatusData.length; i++) {
    if(state.tableStatusData[i] === true) tableAvailable++
  }
  return tableAvailable
}

const getTableStatusData  = () => {
  var state  = store.getState()
  return state.tableStatusData
}

const getTableItems  = () => {
  var state = store.getState()
  var tableItems = []
  if (getSelectedTable() === null) tableItems = []
  else tableItems = state.tableData[getSelectedTable()]
  return tableItems
}

const getTotalBill = () => {
  var tableItems = getTableItems()
  var totalBill = 0
  for (let i = 0; i < tableItems.length; i++) {
    totalBill += tableItems[i].price;
  }

  return totalBill
}

const getMoneyEarned = () => {
  var state = store.getState()
  return state.moneyEarned
}

/**Incrementa el valor de lo ganado y manda un id de la tabla donde se realiza la operación */
const checkOut = () => {
  var totalBill = getTotalBill()
  store.dispatch(incrementMoneyEarned(totalBill))
  store.dispatch(toggleTable(getSelectedTable()))
}

store.subscribe(() => {
  console.log(`Selected Table: ${getSelectedTable()}`);
  console.log(`Tables Available: ${getAvailableTables()} / 16`);
  console.log(`Table Availability Status: ${getTableStatusData()}`);
  console.log(`Selected Table Items List:`, getTableItems());
  console.log(`Selected Table Bill: $${getTotalBill()}`);
  console.log(`Total Money Earned: $${getMoneyEarned()}`);
  console.log();
});

store.dispatch(selectTable(0));
store.dispatch(toggleTable(0));
store.dispatch(addTableItem("apples", 2, 0));
store.dispatch(addTableItem("bananas", 3, 0));
store.dispatch(deleteTableItem(0 , 1));

store.dispatch(selectTable(1));
store.dispatch(toggleTable(1));
store.dispatch(addTableItem("apples", 2, 1));
store.dispatch(addTableItem("bananas", 3, 1));
store.dispatch(addTableItem("carrots", 4, 1));

checkOut();
store.dispatch(selectTable(0));

console.log(store)
function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}


export default App;
