import { Box, Stack, Typography } from "@mui/material";
import ProfileRequests from "./ProfileRequests.js";
import ProfileLikes from "./ProfileLikes.js";

export default function Notification() {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        pt={"10px"}
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

        <ProfileRequests />
        <Typography variant="body1" sx={{ fontSize: "20px" }}>
          New
        </Typography>
        <ProfileLikes/>
       
        <ProfileLikes/>
       
        <ProfileLikes/>
        <Typography variant="body1" sx={{ fontSize: "20px" }}>
         This Week
        </Typography>
        <ProfileLikes/>
       
        <ProfileLikes/>
       
        <ProfileLikes/>
        <Typography variant="body1" sx={{ fontSize: "20px" }}>
         This Week
        </Typography>
        <ProfileLikes/>
       
        <ProfileLikes/>
       
        <ProfileLikes/>
      </Stack>
    </>
  );
}
