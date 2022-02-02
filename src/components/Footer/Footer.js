import Box from "@mui/material/Box"

const AppFooter = (props) => {
  let footerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    borderTop: "1px solid #AAA",
    borderBottom: "1px solid #AAA",
    marginTop: "35em",
    bgcolor: "primary.main",
    color: "white",
    width: "100%",
    padding: "5px",
  }
  return (
    <Box sx={footerStyle}>
      <div>&nbsp;</div>
      <div>
        <strong textalign="center">Harrison Reich</strong><br />
        <strong textalign="center">React Portfolio</strong>
      </div>
    </Box>
  )
}

export default AppFooter;