import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Homeclass from "./Classcomponents/Homeclass"
import Aboutclass from "./Classcomponents/Aboutclass"
import Contactclass from "./Classcomponents/Contactclass"
import Greeting from "./Greeting"


function App(){
  let name="Adarsh";
  let age = 22;
  return(
    <div>
    <h1>Hello EveryOne</h1>
    <h3>Welcome to React</h3>
    <Home />
    <Homeclass />
    <About />
    <Aboutclass />
    <Contact />
    <Contactclass />
    <Greeting fn={name} age={age} favcolor="Skyblue"/>

  </div>
  )
}
export default App;