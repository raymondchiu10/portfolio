import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AboutPage } from "./AboutPage";

describe("about page render", () => {

	it("renders the page", () => {
		const {asFragment} = render(<AboutPage />);
		expect(asFragment()).toMatchSnapshot();
	});

	it("renders the profile image", () => {
		render(<AboutPage />);
		const imageElement = screen.getByAltText("Raymond Chiu");
		expect(imageElement).toBeInTheDocument();
	});

	it("renders the CTA link", () => {
		render(<AboutPage />);
		const linkElement = screen.getByText("LinkedIn");
		console.log(linkElement);
		expect(linkElement).toBeInTheDocument();
	})
});
