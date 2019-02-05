import { INCREMENT_MONEY_EARNED } from '../constants/constant'

/** Objeto que se relaciona con las constates definidas previamente y que contiene informacion para los reducers */
const incrementMoney = (amount) => {
    return {
        type: INCREMENT_MONEY_EARNED,
        amount: amount
    }
}

export default incrementMoney