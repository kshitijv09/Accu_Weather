import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const Input = (props) => {
  const [location, setLocation] = useState("New Delhi");

  const locationHandler = (event) => {
    //console.log(event.target.value);
    setLocation(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //console.log(location);

    props.newLoc(location);
    setLocation("");
  };

  return (
    <form onSubmit={submitHandler} className="input">
      <TextField
        className="input"
        size="small"
        label="Location"
        variant="filled"
        color="success"
        focused
        onChange={locationHandler}
        value={location}
        inputProps={{
          style: {
            height: "20px",
          },
        }}
        InputLabelProps={{ style: { fontSize: "1.2rem", fontWeight: "1000" } }}
      />
      <Button
        type="submit"
        variant="outlined"
        style={{ padding: "10px" }}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </form>
  );
};
export default Input;
