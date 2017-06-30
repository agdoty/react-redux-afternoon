const initialState = {
   loanType: 'Home Purchase',
   propertyType: 'Single Family Home'
}

const UPDATE_LOAN_PROP_TYPE = "update/UPDATE_LOAN_AND_PROP_TYPE"

function reducer(state=initialState, action){ //current state then action you want to perform

    switch(action.type){
        case UPDATE_LOAN_PROP_TYPE:
            return{
                loanType: action.payload.loanType,
                propertyType: action.payload.propertyType
            }
        
        default:
            return state
    }

} 
//Action Creator
export function updateLoanPropType(loanPropType){
    return{
        type: UPDATE_LOAN_PROP_TYPE,
        payload: loanPropType
    }
}

export default reducer; //export reducer so store can see it