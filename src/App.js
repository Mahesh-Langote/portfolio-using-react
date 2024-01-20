 
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import Nav from './components/nav'
import Header  from "./components/header";
import  About  from "./components/about";
import Qualification from './components/qualification';
import Internship from './components/internship';
import Project from './components/project';
import Technicals from './components/technical';
import Certification from './components/certification';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
    <body data-spy="scroll" data-target=".navbar" data-offset="51">
     
       <Nav /> 
       <Header />
       <About />
       <Qualification />
       <Internship/>
       <Project />
       <Technicals />
       <Certification />
       <Contact />
       <Footer />

    </body>
   </>
  );
}

export default App;
