
import { Box, Stack, Button, Typography } from "@mui/material";


import Modal from "@mui/material/Modal";

export default function ConfirmModal({open,handleClose}){

  const style = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "150px;",
    width: { xs: "250px", md: " 600px;" },
    backdropFilter: " blur(20px);",
    position: "absolute;",

    background: "#131313;",
    border: "1px solid #323232;",
    boxShadow: "0px 4px 25px rgba(255, 255, 255, 0.1);",
    borderRadius: "10px;",
    p: "45px",
  };

    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Box>
              <Typography
                id="modal-modal-title"
                varient="body1"
                sx={{
                  fontFamily: "Raleway",
                  fontSize: { xs: "20px", md: "25px" },
                }}
              >
                Accept Selected requests?
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 1,
                  fontSize: { xs: "15px", md: "20px" },
                  color: "#8E8E8E",
                }}
              >
                Are Are you sure you want to accept selected the requests?
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
                spacing={2}
              >
                <Button
                  variant="text"
                  sx={{
                    color: "#fff",
                    fontSize: { sm: "14px", md: "18px;" },
                    fontFamily: "Inter",
                  }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: "#E82352",
                    fontSize: { sm: "14px", md: "18px;" },
                    fontFamily: "Inter",
                  }}
                  onClick={handleClose}
                >
                  Accept
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Modal>
    )
}