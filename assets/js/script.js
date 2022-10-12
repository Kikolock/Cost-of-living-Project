var cityFormEl = document.querySelector("#city-form");
// // var headerWrapperEl = document.querySelector("#header-wrapper");
// // var searchFormEl = document.querySelector("#search-form")
// // var displayCity = document.querySelector("#display-city")
// // var cityContainerEl = document.querySelector("#city-container") 
// // var comparisonButtonEl = document.querySelector("#comparison-buttons")

var formSubmitHandler = function (event) {
	event.preventDefault();
	//get value from the input element
	var cityName = document.getElementById('cityName').value; 
	//console.log(cityName.value.trim())

	var countryName = document.getElementById('countryName').value;

	console.log({ cityName, countryName })

	if (cityName.value && countryName.value) {
		getCityName(cityName.value);
		cityName.innerText = '';
		countryName.innerText = '';
	};

	// 	if(countryName.value) {
	// 		getCityName(cityName.value.trim());
	// 		countryName.innerText = ''; 
	// 	} else {
	// 		alert("Please enter a City and Country name");
	// 	}
	// };
}




function getCityName(cityName, countryName) {

	console.log(city, country)
	
	const optionsForPrices = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9e4ee344femsh6a6226c9bee49aap12340ejsnef8844927025',
			'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
		}
	};
	
	fetch('https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=' + cityName + '&country_name=' + countryName, optionsForPrices)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}


cityFormEl.addEventListener("click", formSubmitHandler);