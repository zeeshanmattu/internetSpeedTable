import React from "react";
import ReactDOM from "react-dom";

class PlacesList extends React.Component {
  render () {
    return(
      <div>
        <h1>Places List</h1>
      </div>
    )
  }
}


const PlacesList = ReactDOM.createRoot(document.getElementById('places-list-container'));
PlacesList.render(< PlacesList />)
