import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../Pages/Home";
import styled from "styled-components";
import Header from "../components/Header";
import Pie from "../components/Pie";
import { VideoProvider } from "../Context/index";
// import Main from "../components/Main";
import GlobalStyled from "../components/GlobalStyles";

import NewVideo from "../Pages/NewVideo";
import Error404 from "../components/Error";

const BackColor = styled.div`
  background: var(--backColor);
  width: 100%;
  height: 100%;
`;
const ContainerApp = styled.div`
  width: 100%;
  height: 100%;
`;

function AppRouter() {
  return (
    <VideoProvider>
      <BrowserRouter>
        <GlobalStyled />
        <BackColor>
          <ContainerApp>
            <Header />
            {/* <Main /> */}

            <Routes>
              <Route index element={<Inicio />} />
              <Route path="/" element={<Inicio />} />
              <Route path="newvideo" element={<NewVideo />}></Route>
              <Route path="*" element={<Error404 />}></Route>
            </Routes>
            <Pie />
          </ContainerApp>
        </BackColor>
      </BrowserRouter>
    </VideoProvider>
  );
}

export default AppRouter;
