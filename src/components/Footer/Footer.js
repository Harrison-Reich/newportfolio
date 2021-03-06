import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';

const AppFooter = (props) => {
  let footerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    marginTop: "3em",
    bgcolor: "primary.main",
    color: "white",
    width: "100%",
    padding: "5px",
  }
  return (
    <Box sx={footerStyle}>
      <div>&nbsp;</div>
      <div>
        <Typography variant="subtitle1" align="center">Harrison Reich's Portfolio Website</Typography>
      </div>
    </Box>
  )
}

export default AppFooter;