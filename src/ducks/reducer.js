const initialState = {
    name: ``,
    address: ``,
    city: ``,
    state: ``,
    zipcode: ``,
    imgUrl: ``,
    mtgAmt: ``,
    rent: ``

}

const UPDATE_STEP1 = "UPDATE_STEP1"

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_STEP1:
        // console.log(action.payload)
        // console.log(state)
       
            return {
                ...state, 
                name: action.payload.name, 
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zipcode: action.payload.zipcode,
            }
        default:
            return state;
    }
}

export function updateStep1(payload){
    return {
        payload,
        type: UPDATE_STEP1
    }
}

export default reducer;