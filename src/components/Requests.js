import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import Profiles from "./Profile";

export default function Requests() {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        pt={"20px"}
      >
        <Box sx={{ width: "100%" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Stack
                direction="row"
                justifyContent="start"
                alignItems="center"
                spacing={2}
              >
                <Link to="/">
                  <img src={require(`./arrow_left.png`)} alt="go-back" />
                </Link>
                <Typography variant="body1" sx={{ fontSize: "20px" }}>
                  Follow Requests
                </Typography>
              </Stack>
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontFamily: "Poppins" }}
            >
              Manage
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Profiles
              picSrc={"./fire_character.png"}
              Name="AmazingMe047#04097"
              subName="Aparna A V"
            />
            <Button
              className="btn-accept"
              sx={{
                color: "#fff",
                fontSize: "8px",
                fontFamily: "Poppins",
                background: "#D40E3D;",
                boxShadow: " inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                backdropFilter: " blur(12.5px);",

                borderRadius: "5px;",
                ":hover": {
                  background: "#D40E3D50;",
                  color: "white",
                },
              }}
            >
              Accept
            </Button>
            <Button
              sx={{
                color: "#fff",
                fontSize: "8px",
                fontFamily: "Poppins",
                background:
                  " linear-gradient(180deg, rgba(255, 44, 44, 0.1) 0%, rgba(244, 65, 65, 0.0514914) 48.51%, rgba(253, 34, 34, 0.1) 100%);",
                border: " 1px solid #FD2222;",
                boxShadow: "inset 0px 4px 25px rgba(255, 255, 255, 0.25);",
                backdropFilter: "blur(12.5px);",

                borderRadius: "5px;",
                ":hover": {
                  background: "#FD222250;",
                  color: "white",
                },
              }}
            >
              Ignore
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
