const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    email: ''
}

function reducer (state, action) {
    switch(action.type) {
        case 'changeValue':
            return {...state, [action.field]: action.value}
        case 'reset':
            return initialState
        default:
            throw new Error()
    }
}

export {initialState, reducer}
