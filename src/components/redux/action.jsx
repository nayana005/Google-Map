export const markerData = (store) =>{
    console.log(store, "action called")
   return {
    type: 'markerLocation',
    data: store
   }
}