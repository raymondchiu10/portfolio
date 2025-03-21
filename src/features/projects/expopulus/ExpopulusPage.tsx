import { fileNameParserJpg } from "../../../shared/fileNameParserJpg";
import expopulus from "src/images/jpg/expopulus.jpg";
import dags from "src/images/jpg/expopulus_dags.jpg";
import ironPigeons1 from "src/images/jpg/expopulus_ironpigeons.jpg";
import ironPigeons2 from "src/images/jpg/expopulus_ironpigeons2.jpg";
import finalForm from "src/images/jpg/expopulus_finalform.jpg";
import finalFormCarousel from "src/images/jpg/expopulus_finalform_carousel.jpg";

import expopuluswebp from "src/images/webp/expopulus.webp";
import dagswebp from "src/images/webp/expopulus_dags.webp";
import ironPigeons1webp from "src/images/webp/expopulus_ironpigeons.webp";
import ironPigeons2webp from "src/images/webp/expopulus_ironpigeons2.webp";
import finalFormwebp from "src/images/webp/expopulus_finalform.webp";
import finalFormCarouselwebp from "src/images/webp/expopulus_finalform_carousel.webp";
import { Link } from "react-router-dom";

const ExpopulusPage = () => {
	const { altString } = fileNameParserJpg(expopulus);
	const { altString: dagsAltString } = fileNameParserJpg(dags);
	const { altString: ipAltString } = fileNameParserJpg(ironPigeons1);
	const { altString: ip2AltString } = fileNameParserJpg(ironPigeons2);
	const { altString: ffAltString } = fileNameParserJpg(finalForm);
	const { altString: ffCarouselAltString } =
		fileNameParserJpg(finalFormCarousel);

	return (
		<section className="expopulus-page">
			<div className="expopulus-page__navigation">
				<div className="expopulus-page__navigation-list">
					<Link className="expopulus-page__link" to="#expopulus">
						<div>Ex Populus</div>
					</Link>
					<Link className="expopulus-page__link" to="#dags">
						<div>DAGs</div>
					</Link>
					<Link className="expopulus-page__link" to="#ironpigeons">
						<div>Iron Pigeons</div>
					</Link>
					<Link className="expopulus-page__link" to="#finalform">
						<div>Final Form</div>
					</Link>
				</div>
			</div>

			<div id="expopulus" className="expopulus-page__bg-parallax">
				<picture>
					<source srcSet={expopuluswebp} type="image/webp" />
					<source srcSet={expopulus} type="image/jpeg" />
					<img src={expopulus} alt={`${altString} Screenshot`} />
				</picture>
			</div>

			<article className="box-shadow bg-white">
				<div className="expopulus-page__summary">
					<div className="expopulus-page__summary-header">
						<h1>Ex Populus</h1>
					</div>

					<div className="expopulus-page__summary-content">
						<div className="expopulus-page__summary-element">
							<h2>Company & Team</h2>
							<p>
								Ex Populus is a next generation game production
								and publishing company that focuses on bridging
								new web3 technologies into modern games.
							</p>
							<a
								href="https://expopulus.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://expopulus.com
							</a>
						</div>

						<div className="expopulus-page__summary-element">
							<h2>Project goals</h2>
							<p>
								The goal of the project is to build a team of
								experienced and talented people to produce games
								that we would all enjoy to play seamlessly with
								web3 technologies. There are multiple projects
								in the company so goals will be expanded on
								after the fold.
							</p>
						</div>
						<div className="expopulus-page__summary-element">
							<h2>My role</h2>
							<p>
								I was part of a team of fullstack developers
								that were in charge of research and development
								of various web3 tools and integration of those
								tools to a web2 environment.
							</p>
							<p>
								I research multiple different tools and services
								for web3 wallet solutions, as well as
								streamlining blockchain interactions with
								traditional web2 platforms, as well as update
								and maintain multiple React (Vite) frontends.
							</p>
						</div>
					</div>
				</div>
			</article>

			<article>
				<div id="dags" className="expopulus-page__dags">
					<picture>
						<source srcSet={dagswebp} type="image/webp" />
						<source srcSet={dags} type="image/jpeg" />
						<img src={dags} alt={`${dagsAltString} Screenshot`} />
					</picture>
				</div>

				<div className="expopulus-page__tech">
					<div className="expopulus-page__tech-container">
						<h2>Decentralized Autonomous Gigaunits</h2>
						<h3>Project Summary</h3>
						<summary className="expopulus-page__tech-summary">
							<p>
								Decentralized Autonomous Gigaunits (DAGs) is the
								first collection of Non fungible tokens (NFTs)
								that have been released to be included in the Ex
								Populus trading card system.
							</p>
						</summary>

						<h3>My Role</h3>
						<p>
							Helped brainstorm, and create multiple UI elements
							and Communicated across multiple teams to ideate,
							promote, and develop website content as well as
							deploy and update information on the DAG trading
							cards. Also aided in monitoring NFT creation and
							troubleshoot issues involving the web2 and web3
							bridging.
						</p>
					</div>
				</div>
			</article>

			<article>
				<div id="ironpigeons" className="expopulus-page__iron-pigeons">
					<picture>
						<source srcSet={ironPigeons1webp} type="image/webp" />
						<source srcSet={ironPigeons1} type="image/jpeg" />
						<img
							src={ironPigeons1}
							alt={`${ipAltString} Screenshot`}
						/>
					</picture>
				</div>

				<div className="expopulus-page__tech">
					<div className="expopulus-page__tech-container">
						<h2>Iron Pigeons</h2>
						<h3>Project Summary</h3>
						<summary className="expopulus-page__tech-summary">
							<p>
								Iron Pigeons is another collection of NFTs that
								have been released to be included in the Ex
								Populus trading card system.
							</p>
						</summary>

						<div className="expopulus-page__tech-role">
							<div>
								<h3>My Role</h3>
								<p>
									Continued to communicate across multiple
									teams to ideate, promote, and develop
									website content as well as deploy and update
									information on the Iron Pigeons trading
									cards. Helped create reusable components
									that can be used across multiple projects to
									optimize future projects. Also aided in
									monitoring NFT creation and troubleshoot
									issues involving the web2 and web3 bridging.
								</p>
							</div>

							<figure className="expopulus-page__tech-image-supplement">
								<picture>
									<source
										srcSet={ironPigeons2webp}
										type="image/webp"
									/>
									<source
										srcSet={ironPigeons2}
										type="image/jpeg"
									/>
									<img
										src={ironPigeons2}
										alt={`${ip2AltString} Screenshot`}
									/>
								</picture>
								<figcaption>
									fig. 1 - reusable component made on the Iron
									Pigeons project.
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</article>

			<article>
				<div id="finalform" className="expopulus-page__final-form">
					<picture>
						<source srcSet={finalFormwebp} type="image/webp" />
						<source srcSet={finalForm} type="image/jpeg" />
						<img
							src={finalForm}
							alt={`${ffAltString} Screenshot`}
						/>
					</picture>
				</div>

				<div className="expopulus-page__tech">
					<div className="expopulus-page__tech-container">
						<h2>Final Form</h2>
						<h3>Project Summary</h3>
						<summary className="expopulus-page__tech-summary">
							<p>
								Final Form is a card strategy deck building
								auto-battler created by Ex Populus centered
								around building and collecting cards, in the
								form of NFTs in order to defeat other decks.
							</p>
						</summary>

						<div className="expopulus-page__tech-role">
							<div>
								<h3>My Role</h3>
								<p>
									Collaborated across multiple teams to aid in
									ideation, play testing, and developing
									website content as well as deploy and update
									website information on the Final Form
									progress. Helped create reusable components
									that can be used across multiple projects to
									optimize future projects. Also aided in
									monitoring NFT creation and troubleshoot
									issues involving the web2 and web3 bridging.
								</p>
							</div>

							<figure className="expopulus-page__tech-image-supplement">
								<picture>
									<source
										srcSet={finalFormCarouselwebp}
										type="image/webp"
									/>
									<source
										srcSet={finalFormCarousel}
										type="image/jpeg"
									/>
									<img
										src={finalFormCarousel}
										alt={`${ffCarouselAltString} Screenshot`}
									/>
								</picture>
								<figcaption>
									fig. 2 - reusable tab navigation component
									made on the Final Form website.
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default ExpopulusPage;
