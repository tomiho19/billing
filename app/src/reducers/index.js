const accounts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    address: action.address,
                    payment: action.payment,
                    cardNumber: action.cardNumber,
                    expDate: action.expDate,
                    cvvCode: action.cvvCode,
                }
            ]
        case 'EDIT_ACCOUNT':
            return state.map(account =>
                (account.id === action.id)
                    ? {...account,
                        id: action.id,
                        name: action.name,
                        address: action.address,
                        payment: action.payment,
                        cardNumber: action.cardNumber,
                        expDate: action.expDate,
                        cvvCode: action.cvvCode,
                    }
                    : account
            )
        case 'DELETE_ACCOUNT':
            return state.slice().filter(el=>el.id !== action.id)
            ;
        default:
            return state
    }
}
export default accounts





