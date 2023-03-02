import "./App.css";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import Notification from "./components/Notification";
import Requests from "./components/Requests";
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Raleway"],
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#282929",minHeight: "100vh", }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={8}></Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Routes>
              <Route path="/" element={<Notification />} />
              <Route path="/Requests" element={<Requests />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
