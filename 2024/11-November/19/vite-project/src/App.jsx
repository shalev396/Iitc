import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//mui imports
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
function App() {
  const [count, setCount] = useState(0);
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Avatar {...stringAvatar("Kent Dodds")} />
        <Avatar {...stringAvatar("Jed Watson")} />
        <Avatar {...stringAvatar("Tim Neutkens")} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="https://picsum.photos/50/50" />
        <Avatar alt="Travis Howard" src=" " />
        <Avatar alt="Cindy Baker" src="https://picsum.photos/51/51" />
      </Stack>
      <TextField
        id="outlined-basic"
        label="i am a label"
        variant="standard"
        placeholder="i am a placeholder"
        sx={{
          input: {
            color: "red",
          },
        }}
        color="success"
      />
    </>
  );
}

export default App;
