import Appheading from './components/Appheading';
import Todoadd from './components/Todoadd';
import List from './components/List';
function App(){
  return (<div>
    <Appheading></Appheading>
  <div className='container bg-light rounded-bottom py-5 border'>
    <center>
    <Todoadd></Todoadd>
    <List></List>
    <List></List>
    </center>


  </div></div>)
}
export default App;