import { Link } from "react-router-dom";
import { Box, Stack, Button, Typography } from "@mui/material";
import Request from "./Request";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";



export default function Requests() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
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
        <Request confirm={handleOpen} />
        
        <ConfirmModal open={open} handleOpen={handleOpen} handleClose={handleClose}/>
      </Stack>
    </>
  );
}
