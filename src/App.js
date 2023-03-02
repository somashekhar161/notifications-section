import "./App.css";

import { Routes, Route,useNavigate } from "react-router-dom";

import Notification from "./components/Notification";
import Requests from "./components/Requests";
import { createTheme, Divider, ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Box, Stack, Button } from "@mui/material";

function App() {
  

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
   
  };
  const handleClose = () => {setOpen(false);
    navigate("/");}
  const [manage, setManage] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const handleManage = () => {
    setManage((state) => !state);
  };
  const handleSelectAll = () => {
    setSelectAll((state) => !state);
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["Raleway"],
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#282929" }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} xl={6}></Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Box>
              <Box
                sx={{
                  minHeight: "100vh",
                  height: "100vh",
                  backgroundColor: "#111011",
                  padding: { xs: "0px 20px", md: "0px 30px" },
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": {
                    width: "0",
                    height: "0",
                  },
                }}
              >
                <Routes>
                  <Route path="/" element={<Notification />} />
                  <Route
                    path="/Requests"
                    element={
                      <Requests
                        handleManage={handleManage}
                        manage={manage}
                        handleSelectAll={handleSelectAll}
                        selectAll={selectAll}
                        open={open}
                        handleOpen={handleOpen}
                        handleClose={handleClose}
                      />
                    }
                  />
                </Routes>
              </Box>
              <Box
                sx={{
                  position: "fixed",
                  bottom: 0,
                  display: !manage ? "none" : "",
                  width: { xs: "100%", md: "50%" },
                  background: " #181818;",
                  boxShadow: "inset 0px 4px 10px rgba(255, 255, 255, 0.1);",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Button
                    variant="text"
                    sx={{
                      color: "#FF0000",
                      fontSize: { sm: "14px", md: "18px;" },
                      fontFamily: "Poppins",
                    }}
                    onClick={handleOpen}
                  >
                    Delete
                  </Button>
                  <Divider
                    orientation="vertical"
                    sx={{
                      borderBottomWidth: "1px",
                      borderColor: "#C6C6C6",
                      paddingTop: "15px",
                    }}
                  />
                  <Button
                    variant="text"
                    sx={{
                      color: "#8a8a8b",
                      fontSize: { sm: "14px", md: "18px;" },
                      fontFamily: "Poppins",
                    }}
                    onClick={handleOpen}
                  >
                    Accept
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
