import React, { useState } from "react";

const Tracker = () => {
  const [timeStamp, setTimeStamp] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  fetch("http://api.open-notify.org/iss-now.json")
    .then((res) => res.json())
    .then((details) => {
      setTimeStamp(details.timestamp);
      setLatitude(details.iss_position.latitude);
      setLongitude(details.iss_position.longitude);
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
