import FoodItems from "./components/Fooditems";
import Errormassage from "./components/Errormessage";
function App(){
     //<></> This is called fragments.
     return(<>
     <h3 className="container py-3 bg-success text-light display-6 mb-0">Healthy Foods</h3>
     <Errormassage></Errormassage>
     <FoodItems></FoodItems>
     </>)

}
export default App;