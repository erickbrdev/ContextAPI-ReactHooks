import React, { useState, useEffect } from "react";

export default function Location() {
  const [location, setLocation] = useState({})

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePosition)

    return () => navigator.geolocation.clearWatch(watchId)
  }, [])

  function handlePosition({ coords }) {
    const { latitude, longitude } = coords;

    setLocation({ latitude, longitude });
  }
  
  return(
    <div>
      <h2>useEffect</h2>
      Latidude: {location.latitude}<br />
      Longitude: {location.longitude}
    </div>
  )
}
