function Hello(){
     let myname = "Ayanabha";
     let age = 20;
     let fullname = () =>{
          return "Ayanabha Chatterjee";
     }
     return <h3>Hello this is a Dynamic component. My name is {myname} & my full name is {fullname()}. I am {age} years old.</h3>

}
export default Hello;