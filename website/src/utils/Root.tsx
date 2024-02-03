import { Outlet, ScrollRestoration } from "react-router-dom";

export function Root() {
	return (
		<main>
			<ScrollRestoration />
			<Outlet />
		</main>
	);
}