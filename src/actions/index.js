export const addAccount = (id, name, address, payment, cardNumber, expDate, cvvCode) => ({
    type: 'ADD_ACCOUNT',
    id,
    name,
    address,
    payment,
    cardNumber,
    expDate,
    cvvCode
});

export const editAccount = (id, name, address, payment, cardNumber, expDate, cvvCode) => ({
    type: 'EDIT_ACCOUNT',
    id,
    name,
    address,
    payment,
    cardNumber,
    expDate,
    cvvCode
});

export const deleteAccount = id => ({
    type: 'DELETE_ACCOUNT',
    id
});