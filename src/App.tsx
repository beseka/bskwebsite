import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BsaPage from "./pages/BsaPage";
import BsaPostPage from "./pages/BsaPostPage";
/*import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage"; */
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/bsa" element={<BsaPage />} />
        <Route path="/bsa/:slug" element={<BsaPostPage />} />

        {/* <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />*/}
      </Routes>
    </>
  );
}
