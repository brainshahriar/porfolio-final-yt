import "./App.scss";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <>
            <Sidebar />
            <main className="main">
            <Home />
              <div className="content">
              <About />
              </div>
                
            </main>
        </>
    );
}

export default App;
