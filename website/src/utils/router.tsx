import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../features/homepage/routes/Homepage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
]);