import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";

//import main components
import Header from "./components/Header/Header";
import RoomBar from "./components/RoomBar/RoomBar";
import SendBox from "./components/Dashboard/SendBox";

// import Dashboard/Channels components
// import One from "./components/Dashboard/1/One";
import General from "./components/Dashboard/Channels/General";
import Chatapp from "./components/Dashboard/Channels/Chatapp";
import Random from "./components/Dashboard/Channels/Random";

//import Dashboard/DirectMessages components
import Speedo from "./components/Dashboard/DirectMessages/Speedo";
import Satellite from "./components/Dashboard/DirectMessages/Satellite";
import Friend from "./components/Dashboard/DirectMessages/Friend";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-1/6">
          <RoomBar />
        </div>
        <div className="flex w-5/6 justify-evenly">
          <BrowserRouter>
            <Switch>
              <Route path="/channels/chat-app">
                <Chatapp />
              </Route>
              <Route path="/channels/general">
                <General />
              </Route>
              <Route path="/channels/random">
                <Random />
              </Route>
              <Route path="/directmessages/satellite">
                <Satellite />
              </Route>
              <Route path="/directmessages/speedo">
                <Speedo />
              </Route>
              <Route path="/directmessages/friend">
                <Friend />
              </Route>
              {/* <Route exact path="/one">
                <One />
              </Route>
              <Route path="/one/:type">
                <One />
              </Route> */}
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
