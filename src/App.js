import React from 'react'
import "./scss/app.scss";
import { Header } from "./components";
import { Cart, Home, NotFound } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const SearchContext = React.createContext("light");

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  return (
  
    <BrowserRouter>
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <div className="App">
          <div className="wrapper">
            <Header />
            <div className="content">
              <div className="container">
                <Routes>
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/cart"} element={<Cart />} />
                  <Route path={"*"} element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
