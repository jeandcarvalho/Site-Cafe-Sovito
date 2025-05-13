import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import App from "./App";


export const Routes = createBrowserRouter ([
   {
    path: "/",
    element: <App />,
    children: [
        {path: "", element: <Home/>},
    ]
   }  
])
   
   


