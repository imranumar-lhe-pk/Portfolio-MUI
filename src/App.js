import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "./Components/Theme/Primary";
import { Container } from "@mui/material";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Components from "./Components/Portfolio/Components";
import FeaturedComponents from "./Components/Features/FeaturedComponents";
import FinalComponents from "./Components/FInalPortfolio/FinalComponents";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container>
          <Routes>
            <Route path="/" element={<Components />} />
            <Route
              path="/FeaturedComponents"
              element={<FeaturedComponents />}
            />
            <Route path="/FinalComponents" element={<FinalComponents />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
