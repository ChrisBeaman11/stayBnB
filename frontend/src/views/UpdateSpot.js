import React, { useState, useEffect, useContext } from "react";
import SpotForm from "../components/SpotForm";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UpdateSpot() {
  let { spotId } = useParams();
  const alLSpots = useSelector((state) => state.spots.allSpots);
  const getSpot = alLSpots[spotId];

  return (
    <>
      <SpotForm spot={getSpot} />
    </>
  );
}
