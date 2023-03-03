import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Profiles({
  picSrc,
  Name = "Name",
  subName = "subName",
}) {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      <Box
        sx={{
          width: "60px;",
          height: "60px;",
          borderRadius: "50px",
          backgroundColor: "blue",

          marginRight: { xs: "10px", sm: "19px" },
        }}
      >
        <img src={require(`${picSrc}`)} alt="profilePicture" />
      </Box>
      <Box>
        {" "}
        <Typography
          varient="body1"
          sx={{ fontSize: { xs: "14px", sm: "20px" }, lineHeight: "20px" }}
        >
          {Name}
        </Typography>
        <Typography
          varient="body1"
          sx={{
            fontSize: { xs: "12px", sm: "18px" },
            color: "#7e7f7e",
            lineHeight: "20px",
          }}
        >
          {subName}
        </Typography>
      </Box>
    </Stack>
  );
}
