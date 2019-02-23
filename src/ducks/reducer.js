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

const UPDATE_STEP1 = "UPDATE_STEP1";
const UPDATE_STEP2 = "UPDATE_STEP2";
const UPDATE_STEP3 = "UPDATE_STEP3";
const CANCEL = "CANCEL"

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_STEP1:
        // console.log(action.payload)
        // console.log(state)
        console.log('hit')
            return {
                ...state, 
                name: action.payload.name, 
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zipcode: action.payload.zipcode,
            }
        case UPDATE_STEP2:
            return { ...state, imgUrl: action.payload }
        case UPDATE_STEP3:
            return { ...state, mtgAmt: action.payload.mtgAmt, rent: action.payload.rent }
        case CANCEL:
            return {...state, initialState}
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

export function updateStep2(payload){
    return {
        payload,
        type: UPDATE_STEP2
    }
}

export function updateStep3(payload){
    return {
        payload,
        type: UPDATE_STEP3
    }
}

export function cancel(payload){
    return {
        payload,
        type: CANCEL
    }
}

export default reducer;