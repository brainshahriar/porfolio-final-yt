import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Services from "./components/Services/Services";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <>
            <Sidebar />
            <main className="main">
            <Home />
              <div className="content">
              <About />
              <Services/>
              <Resume/>
              <Portfolio/>
              <Contact/>
              </div>
                
            </main>
        </>
    );
}

export default App;
