import Navbar from "./components/navbar/Navbar";
import Login from "./components/auth/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./components/auth/Register";
import axios from "axios";
import Create from "./components/blog/Create";
import Home from "./pages/home/Home";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import MyBlog from "./pages/myBlog/MyBlog";
import Update from "./pages/updateBlog/Update";
import Search from "./pages/search/Search";
import AuthCheck from "./components/AuthCheck/AuthCheck";
import Protected from "./components/AuthCheck/Protected";
import PageNotFound from "./components/pageNotFound/PageNotFound";


axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.post['Accept'] = "application/json";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthCheck />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<Protected />}>
          <Route path="/create" element={<Create />} />
          <Route path="/blog/myblog" element={<MyBlog />} />
          <Route path="/blog/update/:id" element={<Update />} />
        </Route>

        <Route path="/blogdetails/:id" element={<BlogDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
