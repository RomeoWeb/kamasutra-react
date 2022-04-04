import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="main-wrapper">
            <NavBar />
            <Routes>
              <Route path="/dialogs/*" element={ <Dialogs />} />
              <Route path="/profile" element={<Profile />} />

              {/* <Route path="/dialogs/*" render = { () => <Dialogs />} />
              <Route path="/profile"   render = { () => <Profile />} /> */}

              {/* <Route path="/dialogs/*" element = { () => <Dialogs />} />
              <Route path="/profile"   element = { () => <Profile />} /> */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
