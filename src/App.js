import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./shared/footer/Footer";
import Header from "./shared/header/Header";
import Slider from "./shared/home/Slider";
import Tanitim from "./shared/home/Tanitim";
import Yemekler from "./shared/yemekler/Yemekler";
import products from "./yemekler.json";

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Slider />
                <Tanitim />
              </Fragment>
            }
          ></Route>
          <Route path="/yemekler"  element={<Yemekler urunler={products}/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
