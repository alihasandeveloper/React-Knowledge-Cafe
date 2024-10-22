import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Bookemarks from "./Components/Bookmarks/Bookemarks.jsx";

function App() {

    return (
        <>
            <Header/>
            <div className="md:flex">
                <Blogs/>
                <Bookemarks/>
            </div>
        </>
    )
}

export default App
