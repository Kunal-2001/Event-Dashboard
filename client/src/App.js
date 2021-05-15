import React, { useContext, useState, useEffect } from "react";
import Register from "./AuthComponent/Register";
import Login from "./AuthComponent/Login";
import Table from "./UI2.0/AttendeeTable/Table";
import Landing from "./Landing/landing";
import ProtectedRoute from "./ProtectedRoute";
import NewDash from "./UI2.0/EventDashboard/newdashboard.js";
import NewPeople from "./UI2.0/InvitationDesk/newpeople";
import AddEvent from "./UI2.0/NewEvent/addevent";
import NewCalendar from "./UI2.0/EventCalender/newcalendar";
import PageNotFound from "./404Component/PageNotFound";
import Profile from "./UI2.0/UserDashboard/newprofile";
import Settings from "./UI2.0/Settings/settings";
// import usePersist from "./components/Persist";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Axios from "axios";
import { State } from "./ContextFiles/Context";

function App(props) {
  const { setUserData, setData, isAuth } = useContext(State);
  let history = useHistory();

  useEffect(() => {
    const checkForUserLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await Axios.post("/validToken", null, {
        headers: { "x-auth-token": token },
      });
      if (tokenResponse.data) {
        const userdataRes = await Axios.get("/authUser", {
          headers: { "x-auth-token": token },
        });
        // console.log(userdataRes.data);
        setUserData({
          token,
          user: userdataRes.data,
        });
        setData(userdataRes.data);
        // history.push("/user");
      }
    };
    checkForUserLoggedIn();
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuth ? <Profile /> : <Landing />}
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signIn">
          <Register />
        </Route>
        <ProtectedRoute exact path="/newpeople">
          <NewPeople />
        </ProtectedRoute>
        <ProtectedRoute exact path="/newcalendar">
          <NewCalendar />
        </ProtectedRoute>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <ProtectedRoute
          exact
          path="/addevent"
          component={AddEvent}
        ></ProtectedRoute>
        <ProtectedRoute exact path="/user" component={Profile}></ProtectedRoute>
        <ProtectedRoute exact path="/user/:id">
          <NewDash />
        </ProtectedRoute>
        <ProtectedRoute exact path="/table">
          <Table />
        </ProtectedRoute>
        {/* Invalid Route Page Not Found 
        Don't add routes after this */}
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
