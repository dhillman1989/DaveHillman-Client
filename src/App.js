import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//external imports

//Redux
import { Provider } from "react-redux"; 
import store from "./store";


//components
import PrivateRoute from "./routing/PrivateRoute";
import Navbar from "./Navbar";
import SplashHeader from "./SplashHeader";
import MainContent from "./MainContent";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Upload from "./Upload";
import UploadEdit from "./UploadEdit"
import Blog from "./Blog";

//styles
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <SplashHeader />
            <MainContent />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/blog">
            <Blog/>
          </Route>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/dashboard/upload" component={Upload} />
            <PrivateRoute exact path="/dashboard/upload/edit/:id" component={UploadEdit} />
          </Switch>
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}
