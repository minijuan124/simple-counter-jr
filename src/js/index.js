//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import { checkPropTypes } from "prop-types";

//import your own components
// import { Home } from "./component/home.js";

function Counter(props) {
	return (
		<div className="box">
			<div className="fourth">{props.fourthDigit % 10}</div>
			<div className="third">{props.thirdDigit % 10}</div>
			<div className="second">{props.secondDigit % 10}</div>
			<div className="first">{props.firstDigit % 10}</div>
		</div>
	);
}
Counter.propTypes = {
	fourthDigit: PropTypes.number,
	thirdDigit: PropTypes.number,
	secondDigit: PropTypes.number,
	firstDigit: PropTypes.number
};
let counter = 0;
setInterval(function() {
	const fourth = Math.floor(counter / 1000);
	const third = Math.floor(counter / 100);
	const second = Math.floor(counter / 10);
	const first = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<Counter
			firstDigit={first}
			secondDigit={second}
			thirdDigit={third}
			fourthDigit={fourth}
		/>,
		document.querySelector("#app")
	);
}, 1000);
