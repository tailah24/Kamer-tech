import React from 'react';
import Main from "./pages";
import { Switch, Route} from "react-router-dom";

function App() {
  return (
    <Switch>

   <Route exact path="/" component={Main}  />


   </Switch>
   
  );
}

export default App;
