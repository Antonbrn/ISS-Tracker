import React, { useState } from "react";

const Tracker = () => {
  const [timeStamp, setTimeStamp] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then((res) => res.json())
    .then((data) => {
      setTimeStamp(data.timestamp);
      setLatitude(data.latitude);
      setLongitude(data.longitude);
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
