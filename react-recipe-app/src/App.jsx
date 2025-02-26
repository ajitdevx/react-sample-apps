import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";

// layouts and pages
import About from "./pages/About";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import RootLayout from "./Layouts/RootLayout";
import RecipeDetail from "./components/Recipe/RecipeDetail";

//router & routes
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="recipe" element={<Recipe />} />
            <Route path="recipe/:id" element={<RecipeDetail />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App;