import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import CreateSpotButton from "../SpotForm/CreateSpotButton";
import { useHistory } from "react-router-dom";
import ManageSpots from "../../views/ManageSpots";

function Navigation({ isLoaded }) {
  let history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="NavContainer">

      <h1 onClick = {() => history.push('/')}className = "logo">airbnb</h1> <h1/>
    <div className="SubNav">
      {sessionUser && <CreateSpotButton/>}
      {

          isLoaded && (
            
              <ProfileButton user={sessionUser} />


          )
      }
      </div>
    </div>
  );
}

export default Navigation;
