export const addContacts = (id, name, number) => {
    return {
        type: "contacts/addContact",
        payload: {
            id,
            name,
            number,
        }
    }
}

export const deleteContacts = id => {
    return {
        type: "contacts/deleteContact",
        payload: id,
    }
}


export const filterAction = filter => {
    return {
        type: "filter/setFilter",
        payload: filter,
    }
}