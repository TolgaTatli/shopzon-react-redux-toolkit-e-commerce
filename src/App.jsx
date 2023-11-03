import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PageContainer>
    </>
  );
}

export default App;
