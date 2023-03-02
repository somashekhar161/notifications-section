import { Link } from "react-router-dom";
import { Box, Stack, Button, Typography } from "@mui/material";
import Request from "./Request";

import ConfirmModal from "./ConfirmModal";

export default function Requests({
  handleManage,
  manage,
  handleSelectAll,
  selectAll,
  open,
  handleOpen,
  handleClose,
}) {
  return (
    <>
      <ConfirmModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
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
                <Link to="/" onClick={manage && handleManage}>
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
              {!manage ? (
                <Button
                  variant="text"
                  sx={{
                    color: "#fff",
                    fontSize: { sm: "14px", md: "18px;" },
                    fontFamily: "Inter",
                  }}
                  onClick={handleManage}
                >
                  Manage
                </Button>
              ) : (
                <Button
                  variant="text"
                  sx={{
                    color: "#fff",
                    fontSize: { sm: "14px", md: "18px;" },
                    fontFamily: "Inter",
                  }}
                  onClick={handleSelectAll}
                >
                  Select all
                </Button>
              )}
            </Typography>
          </Stack>
        </Box>
        <Request selectAll={selectAll} manage={manage} confirm={handleOpen} />
        <Request selectAll={selectAll} manage={manage} confirm={handleOpen} />
        <Request selectAll={selectAll} manage={manage} confirm={handleOpen} />
        <Request selectAll={selectAll} manage={manage} confirm={handleOpen} />
        <Request selectAll={selectAll} manage={manage} confirm={handleOpen} />
        <Request selectAll={selectAll} manage={manage} confirm={handleOpen} />
        <Request selectAll={selectAll} manage={manage} confirm={handleOpen} />
        <Request selectAll={selectAll} manage={manage} confirm={handleOpen} />
        <Request selectAll={selectAll} manage={manage} confirm={handleOpen} />
        <Request selectAll={selectAll} manage={manage} confirm={handleOpen} />
      </Stack>
    </>
  );
}
