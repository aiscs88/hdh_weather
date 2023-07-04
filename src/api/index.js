import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API;
const BASE_URL = process.env.REACT_APP_OPENWEATHER_BASE;
const CITY = process.env.REACT_APP_CITY;
const url = `${BASE_URL}?q=${CITY}&units=metric&appid=${API_KEY}`


const getWeatherData = async () => {
	return await axios.get(url).then((response) => {
		return response.data;
	}).catch((reason) => {
		console.log("Got an error " + reason);
	})
}

export {
	getWeatherData
};