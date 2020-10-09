import React, { useState, useEffect } from "react";

const Tracker = () => {
  const [timeStamp, setTimeStamp] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  //Fetch data from api
  fetch("http://api.open-notify.org/iss-now.json")
    .then((res) => res.json())
    .then((data) => {
      setTimeStamp(data.timestamp);
      setLatitude(data.iss_position.latitude);
      setLongitude(data.iss_position.longitude);
    });

  return (
    <div className="tracker">
      <div>
        <h2>
          <span className="bold-text">Timestamp: </span>
          {timeStamp}
        </h2>
      </div>
      <div>
        <h2>
          <span className="bold-text">Latitude: </span>
          {latitude}
        </h2>
      </div>
      <div>
        <h2>
          <span className="bold-text">Longitude: </span>
          {longitude}
        </h2>
      </div>
    </div>
  );
};

export default Tracker;
