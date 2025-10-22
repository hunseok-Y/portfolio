import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import PortFolio from "./pages/portFolio";
import Project from "./pages/project";
import Contact from "./pages/contact";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <PortFolio />,
			},
			{
				path: "/project",
				element: <Project />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);
