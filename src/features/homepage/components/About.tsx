import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import expopulus from "@/images/expopulus_screenshot.jpg";
import dags from "@/images/expopulus_dags_screenshot.jpg";
import finalForm from "@/images/expopulus_finalform_carousel_screenshot.jpg";
import ironPigeons1 from "@/images/expopulus_ironpigeons_screenshot.jpg";
import ironPigeons2 from "@/images/expopulus_ironpigeons_screenshot2.jpg";
import frameOne1 from "@/images/frameonesoftware_screenshot.jpg";
import frameOne2 from "@/images/frameonesoftware_screenshot2.jpg";
import rxToMe from "@/images/rxtome_screenshot.jpg";
import xaiGames1 from "@/images/xai_games_screenshot.jpg";
import xaiGames2 from "@/images/xai_games_sentrynodes_screenshot.jpg";

const test = [
	frameOne1,
	frameOne2,
	expopulus,
	dags,
	finalForm,
	ironPigeons1,
	ironPigeons2,
	rxToMe,
	xaiGames1,
	xaiGames2
];

export const About = () => {

	function createSlide(item: string) {
		const startWord = "images/";
		const startString = item.indexOf(startWord);
		const endString = item.indexOf(".jpg");
		const updatedString = item.slice(startString + startWord.length, endString).split("_").join(" ");

		return (
			<div
				key={updatedString}
				className="about_carousel_item"
			>
				<img
					src={item}
					alt={updatedString}
				/>
			</div>
		);
	}

	return (
		<section className="about">
			<div className="about_container">
				<h3 className="about_container_header">Projects I have worked on:</h3>
			</div>

			<div className="about_carousel">
				<Carousel
					centerMode={true}
					infiniteLoop={true}
					autoPlay={true}
					interval={4000}
					showArrows={true}
					showIndicators={false}
					stopOnHover={true}
					swipeable={true}
				>
					{test.map(createSlide)}
				</Carousel>
			</div>

		</section>
	);
}