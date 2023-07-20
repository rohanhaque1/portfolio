import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home_page from "../layout/Home_page/Home_page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home_page />
            }
        ]
   }
])

export default router;