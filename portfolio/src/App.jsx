import { Button, Navbar, TextInput, Textarea } from "flowbite-react";
import { FloatingLabel } from "flowbite-react";
import Nav from "./Components/Navbar/Nav";
import Test from "./Components/Navbar/Test/Test";


function App() {
  return <div className=" bg-body-bg text-gray-200">

  <section>
  <Nav/>
  </section>

  <section>Parallax</section>
  <section>Services</section>
  <section>Parallax</section>
  <section>Portfolio1</section>
  <section>Portfolio2</section>
  <section>Portfolio3</section>
  <section>Contact</section>

  </div>;
}

export default App;
