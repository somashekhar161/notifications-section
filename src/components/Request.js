import { Box, Button, Stack } from "@mui/material";
import Profiles from "./Profile";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";

export default function Request({ confirm, manage, selectAll }) {
  const [checked, setChecked] = useState(false);
useEffect(()=>{
    setChecked(selectAll)
},[selectAll])
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
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
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            {!manage ? (
              <>
                <Button
                  className="btn-accept"
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "8px", md: "16px" },
                    padding:"7px 14px",
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
                  onClick={confirm}
                >
                  Accept
                </Button>
                <Button
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "8px", md: "16px" },
                    fontFamily: "Poppins",
                    padding:"7px 14px",
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
              </>
            ) : (
              <Checkbox checked={checked} onChange={handleChange} />
            )}
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
