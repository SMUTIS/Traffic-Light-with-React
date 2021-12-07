import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selecteColor, setSelectedColor] = useState("green");
	return (
		<div className="container">
			<div className="jumbotron d-flex flex-row bd-highlight mb-3 p-5 fondo">
				<div className="col-3 ml-5">
					<div className="traffic-light">
						<div
							onClick={() => setSelectedColor("red")}
							className={
								"light red" +
								(selecteColor === "red" ? " glow" : "")
							}></div>
						<div
							onClick={() => setSelectedColor("yellow")}
							className={
								"light yellow" +
								(selecteColor === "yellow" ? " glow" : "")
							}></div>
						<div
							onClick={() => setSelectedColor("green")}
							className={
								"light green" +
								(selecteColor === "green" ? " glow" : "")
							}></div>
					</div>
				</div>
				<div className="col texto">
					<h1 className="titulo text-center">
						TRAFFIC LIGHT WITH REACT
					</h1>
					<h3 className="subtitulo text-center">
						Please Click on the lights and make it glow!!
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Home;
