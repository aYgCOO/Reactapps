function Clock(){
     let time =new Date();
     return(<div>
          <h5 className="text-center">This is the current time Date: {time.toLocaleDateString()} - Time: {time.toLocaleTimeString()} <i></i></h5>
     </div>)
}
export default Clock;