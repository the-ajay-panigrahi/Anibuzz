import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Gif from "./pages/Gif";
import Favourites from "./pages/Favourites";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="/:type/:slug" element={<Gif />} />
      <Route path="/favourites" element={<Favourites />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
