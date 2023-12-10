import {
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   Link
} from "react-router-dom"
import './App.css';
import Layout from "./components/Layout";
import Home from "./pages/Home"
import Register from "./pages/Register";
import LoginPage from './pages/Login';
import NotFound from "./pages/NotFound"

let router = createBrowserRouter(createRoutesFromElements(
   <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="features" element={<Home />} />
      <Route path="*" element={<NotFound />} />
   </Route>
))

function App() {
   return (
      <RouterProvider router={router} />
   );
}

export default App;