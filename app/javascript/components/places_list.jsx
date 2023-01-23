import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function PlacesList() {
  const [loading, setLoading] = useState(true)
  const [loadedPlaces, setLoadedPlaces] = useState([])

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }
}
class PlacesList extends React.Component {
  render() {
    return (
      <div>Places list rendered in react</div>
    )
  }
}

const placesList = ReactDOM.createRoot(document.getElementById("places-list-container"));
placesList.render(<PlacesList/>)
