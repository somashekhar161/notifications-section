import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function Profiles({picSrc, Name="Name", subName="subName" }) {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
    >
      <Box
        sx={{
          width: "60px;",
          height: "60px;",
          borderRadius: "50px",
          backgroundColor: "blue",
          marginRight:"19px"
        }}
      ><img src={require(`${picSrc}`)} alt="picture"/></Box>
      <Box>
        {" "}
        <Typography varient="body1" sx={{fontSize:"20px" }} >
          {Name}
        </Typography>
        <Typography varient="body1" sx={{fontSize: "18px",color:"#7e7f7e"}} >
          {subName}
        </Typography>
      </Box>
    </Stack>
  );
}
