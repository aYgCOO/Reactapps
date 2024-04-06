const Errormassage =()=>{
     let Fooditem = ['Dal', 'Roti', 'Milk', 'Green Vegetables', 'Salad'];
     return(<>
     {Fooditem.length === 0 && <h5>I am still hungry</h5>}
     </>)

}
export default Errormassage;