import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbarcomp from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import LoginComp from './components/Login/Logincomp';
import SigninComp from './components/Signin/Signincomp';


function App(){
  return(
    <div>
    <Navbarcomp/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutus" element={<About/>}></Route>
      <Route path="/contactus" element={<Contact/>}></Route>
      <Route path="/coursesoffered" element={<Courses/>}></Route>
      <Route path= "/login" element= {<LoginComp/>}></Route>
      <Route path="/signup" element={<SigninComp/>}></Route>
      </Routes>
          </div>
  )

}
export default App;
