import * as React from "react";
import ReactMapGL from "react-map-gl";

function App() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="400px"
      height="400px"
      onViewportChange={setViewport}
    />
  );
}

export default App;
