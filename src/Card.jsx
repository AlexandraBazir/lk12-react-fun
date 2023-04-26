import React from "react";
import {getTextColor, getColor, getNumber} from "./function";

const Card = ({
	color = "rgb(0,0,0)", 
	content = "0"
}) => {
	const st = {
		background: color,
		color: getTextColor(color)
	}
	const upd = () => {
		const data = JSON.parse(localStorage.getItem("nums"));
		const newData = data.map(el => {
			if (el.number === content && el.color === color) {
				el = {
					number: getNumber(100),
					color: getColor()
				}
			}
			return el;
		})
		localStorage.setItem("nums", JSON.stringify(newData));
		location.reload();
	}
	return <div className="num" style={st} onClick={upd}>{content}</div>
}

export default Card;