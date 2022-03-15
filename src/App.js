import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
      <div className="main-wrapper">
        <NavBar />
        <Profile />
      </div>
      </div>
      <Footer /> 
      </div>
  );
}

export default App;
