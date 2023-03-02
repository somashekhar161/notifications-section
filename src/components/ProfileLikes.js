import { Box, Stack, Typography } from "@mui/material";
import Profiles from "./Profile";
export default function ProfileLikes() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Profiles
          picSrc="./thunder_cat.png"
          Name="MeeraCat#5455"
          subName="Liked your profile."
        />
        <Box
          sx={{
            backgroundColor: "#E8235200",
            width: "34px",
            height: "34px",
            borderRadius: "100px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "12px",
              textAlign: "center",
              padding: "3px",
              color: "#8C8C8C",
              lineHeight: "14.09px",
            }}
          >
            5h
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
