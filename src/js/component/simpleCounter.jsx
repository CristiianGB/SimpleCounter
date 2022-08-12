import React, { useEffect, useState } from "react";
import IconoReloj from "./iconoReloj/iconoReloj.jsx";
import Contador from "./contadores/contador.jsx";
import "./iconoReloj/iconoReloj-styles.css"

//include images into your bundle

//create your first component
const SimpleCounter = () => {
	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(false);
	const [timeString, setTimeString] = useState([])
	useEffect(()=>{
		let interval;
		if (running){
			interval = setInterval(()=>{
				setTime((counter) => counter + 1);
			}, 1000);
		}
		else if (!running){
			clearInterval(interval);
		};
		return () => clearInterval(interval);
	}, [running]);
	useEffect(() => {
		setRunning(true);
	}, []);
	useEffect(() => {
		setTimeString(time.toString().split("").reverse());
	}, [time]);
	return (
		<>
		<div className="col-2 d-flex">
            <i className="fa-regular fa-clock w-100 d-flex align-items-center justify-content-center text-white p-5 fa-5x mx-5"></i>
        </div>
		<Contador number={timeString[5]}/>
		<Contador number={timeString[4]}/>
		<Contador number={timeString[3]}/>
		<Contador number={timeString[2]}/>
		<Contador number={timeString[1]}/>
		<Contador number={timeString[0]}/>
		</>
		
	)
};

export default SimpleCounter;