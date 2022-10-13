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

	if (cityName && countryName) {
		getCityName(cityName, countryName);
		cityName.innerText = '';
		countryName.innerText = '';
	}
	//  else {
	// 	alert("Please enter a City and Country name");
	// }
	

}


// function renderResults(results) {
//     const list = document.getElementById('resultsList');
//     results.forEach(result => {
//         const element = document.createElement("li");
//         element.innerText = result;
//         list.appendChild(element);
//     });
// }



// // displayPrices(response.prices)
// const results = jsonData.map(element => element.prices)
// 	    renderResults(results);

function getCityName(cityName, countryName) {

	console.log(cityName, countryName)
	
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



// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9e4ee344femsh6a6226c9bee49aap12340ejsnef8844927025',
// 		'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
// 	}
// };

// fetch('https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=Toronto&country_name=Canada', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

cityFormEl.addEventListener("click", formSubmitHandler);
