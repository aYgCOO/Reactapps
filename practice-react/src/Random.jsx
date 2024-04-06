function Random(){
     let random = Math.random()*10;
     return <div>
     <h5 style={{'color': '#f97316'}}>This is a random number generator.</h5>
     <p>This is a random number {random} with  2 decimal places</p>
     </div>

}
export default Random;