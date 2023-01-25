import MainRoot from "../components/MainRoot";
import About from "../page/About";
import Portfolio from "../page/Portfolio";
import Services from "../page/Services";
import Blog from "../page/Blog";
import Myform from "../page/Myform"
import Home from "../page/Home";


 const ROUTES = [{
    path: "/",
    element: <MainRoot />,
    children: [{
        path: "",
        element: <Home/>
    },{
        path: "about",
        element: <About/>
    },
    {
        path: "portfolio",
        element: <Portfolio/>
    },
    {
        path: "blog",
        element: <Blog/>
    },
    {
        path: "services",
        element: <Services/>
    },
    {
        path: "form",
        element:<Myform/>
    }
       
   ]
}]
export default ROUTES