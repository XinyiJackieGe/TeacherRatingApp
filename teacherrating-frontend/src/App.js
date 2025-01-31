import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./Components/Signin";
import SignUp from "./Components/Signup";
import PrimarySearchAppBar from "./Components/SearchAppBar";
import TeacherGrid from "./Components/TeacherGrid";
import AddTeacher from "./Components/AddTeacher";
import TeacherDetail from "./Components/TeacherDetail";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <SignIn></SignIn>
          </Route>
          <Route exact path="/home">
            <PrimarySearchAppBar showBar={true}></PrimarySearchAppBar>
            <TeacherGrid></TeacherGrid>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route exact path="/addteacher">
            <PrimarySearchAppBar showBar={false}></PrimarySearchAppBar>
            <AddTeacher></AddTeacher>
          </Route>
          <Route path="/detail">
            <PrimarySearchAppBar showBar={false}></PrimarySearchAppBar>
            <TeacherDetail></TeacherDetail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
