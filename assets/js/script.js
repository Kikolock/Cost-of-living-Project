

var cityFormEl = document.querySelector("#city-form");


var formSubmitHandler = function (event) {
	event.preventDefault();
	
	var cityName = document.getElementById('cityName'); 
	var countryName = document.getElementById('countryName');

		if (cityName && countryName) {
		getCityName(cityName.value, countryName.value);
			}
	
}

function getCityName(cityName, countryName) {

	
	const optionsForPrices = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9e4ee344femsh6a6226c9bee49aap12340ejsnef8844927025',
			'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
		}
	};
	
	
	fetch('https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=' + cityName + '&country_name=' + countryName, optionsForPrices)
	.then(response => response.json())
	.then(json => { //obtain data
	let data = {};
	for (const item of json.prices) {
	
		if (!data[item.category_name]){
			data[item.category_name]= [];
		}
		data[item.category_name].push(item);
	}
	
	const ElementUl = document.getElementById('table-contents');
	ElementUl.innerHTML= ""
	for (const category in data) {
		ElementUl.insertAdjacentHTML("beforeend",`<li> ${category} </li>`)
	}

	const ElementCat = document.getElementById('category-contents');
	ElementCat.innerHTML= ""
	
	for (const category in data) {
		let listItem= ""
		for (const item of data[category]) {
		
			listItem= listItem+`
			<tr>
			<th scope="row"><li></li></th>
			<td>${item.item_name}</td>
			<td class="d-flex justify-content-end"><b>${item.currency_code}  ${item.avg}</b></td>
			</tr>`
		}

		ElementCat.insertAdjacentHTML("beforeend",`<div>
		<h3>${category}</h3>
		<table class="table" >
		<tbody>${listItem}	
		</tbody>
		</table>
	  `)

		
	  }


	})
	.catch(err => console.error(err));
}


cityFormEl.addEventListener("submit", formSubmitHandler);



