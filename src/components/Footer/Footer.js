import Box from "@mui/material/Box"

const AppFooter = (props) => {
  let footerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    marginTop: "36em",
    bgcolor: "primary.main",
    color: "white",
    width: "100%",
    padding: "5px",
  }
  return (
    <Box sx={footerStyle}>
      <div>&nbsp;</div>
      <div>
        <strong textAlign="center">Harrison Reich</strong><br />
        <strong textAlign="center">React Portfolio</strong>
      </div>
    </Box>
  )
}

export default AppFooter;