export const markerReducer=(state=[],action)=>{
    if(action.type==='markerLocation') {
        console.log(action, "Reducer called")
     return [action.data,...state]
    }
    else{
     return state
    }
 }