import { Box, Hidden, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Profiles from "./Profile";
import Divider from "@mui/material/Divider";

export default function Notification() {
  return (
    <>
      <Box
        sx={{
            minHeight: "100vh",
          
          overflow:"Hidden",
          backgroundColor: "#111011",
          padding: "32px 34px",
        }}
      >
      
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Box sx={{ width: "100%" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="body1" sx={{ fontSize: "20px" }}>
                Notifications
              </Typography>

              <img src={require("./close-icon.png")} alt="close"></img>
            </Stack>
          </Box>
          <Link to="/Requests" style={{ color: "#FFF", width: "100%" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Profiles
              picSrc="./fire_character.png"
                Name="Follow Requests"
                subName="Approve or ignore requests"
              />
              <Box
                sx={{
                  backgroundColor: "#E82352",
                  width: "34px",
                  height: "34px",
                  borderRadius: "100px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    textAlign: "center",
                    padding: "3px",
                  }}
                >
                  24
                </Typography>
              </Box>
              
            </Stack>
            <Divider  sx={{borderBottomWidth: "1px",borderColor:"#C6C6C6" ,paddingTop:"15px"}}/>
          </Link>
          
          
        </Stack>
      </Box>
    </>
  );
}
