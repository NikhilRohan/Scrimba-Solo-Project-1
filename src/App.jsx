import "./App.css";
import * as React from "react";
import ViewOne from "./components/ViewOne/ViewOne";
import ViewTwo from "./components/ViewTwo/ViewTwo";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function App() {
  const [alignment, setAlignment] = React.useState("dark");
  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <div className="appClass">
      <ViewOne />
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Theme"
      >
        <ToggleButton value="dark" variant="contained" color="primary">
          Dark
        </ToggleButton>
        <ToggleButton value="light" variant="contained" color="secondary">
          Light
        </ToggleButton>
      </ToggleButtonGroup>
      <ViewTwo />
    </div>
  );
}

export default App;
