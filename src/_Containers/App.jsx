import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "../_Components/Shared/Header.jsx";
import List from "../_Components/List/list.jsx";
import DetailedList from "../_Components/DetailedList/detailedList.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/:name" component={DetailedList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
