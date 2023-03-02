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
      <Box sx={{ bgcolor: "#282929" }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} lg={8}></Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                minHeight: "100vh",
                height: "100vh",
                backgroundColor: "#111011",
                padding: "0px 20px",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  width: "0",
                  height: "0",
                },
              }}
            >
              <Routes>
                <Route path="/" element={<Notification />} />
                <Route path="/Requests" element={<Requests />} />
              </Routes>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
