import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { HomePage } from "./page/HomePage";
import { TodoPage } from "./page/TodoPage";

function App() {
  return (
    <BrowserRouter basename="/react-todo">
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/todo" component={TodoPage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
