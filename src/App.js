import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/Shop";
import NavigationBar from "./routes/navigation-bar/NavigationBar";
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
