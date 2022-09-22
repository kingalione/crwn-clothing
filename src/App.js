import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/Shop";
import NavigationBar from "./routes/navigation-bar/NavigationBar";
import Home from "./routes/home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
