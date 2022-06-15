import "./scss/app.scss";
import { Categories, Sort, Header, PizzaBlock } from "./components";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <PizzaBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
