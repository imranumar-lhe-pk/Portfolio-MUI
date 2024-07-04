import { LinkedIn, Login, Logout } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import linkedIn from "../../Assets/Logo Linkedin.svg";
import dribbble from "../../Assets/dribbble-ball-mark.svg";
import Be from "../../Assets/Logo Be.svg";
function NavBaar() {
  return (
    <AppBar>
      <Toolbar
        sx={{
          mx: { sm: "6vw" },

          display: { xs: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: { sm: "flex" } }} gap={3}>
          <Typography
            textAlign="center"
            fontWeight="bold"
            sx={{ mt: { xs: 3, sm: 1 } }}
          >
            Cristopher Galarce
          </Typography>
          <Typography
            fontSize="12px"
            color="#AF48FF"
            bgcolor="#F5EDFF"
            borderRadius={3}
            px={1.2}
            py={1}
            sx={{ visibility: { xs: " hidden", sm: "visible" } }}
          >
            Now available
          </Typography>
        </Box>
        <Box display="flex" sx={{ gap: { xs: 2, sm: 5 } }}>
          <Box>
            <img src={linkedIn} width={22} />
          </Box>
          <Box>
            <img src={Be} width={28} />
          </Box>
          <Box>
            <img src={dribbble} width={22} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBaar;
