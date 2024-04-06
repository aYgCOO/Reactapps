import Clockheading from "./components/Clockheading";
import Slogan from "./components/Slogan";
import Clock from "./components/Clock";
function App() {
  return (<>
    <div>
      <Clockheading></Clockheading>
    </div>
    <div className="container py-3 bg-light rounded-bottom border">
      <Slogan></Slogan>
      <Clock></Clock>
    </div>
  </>
  )
}
export default App;