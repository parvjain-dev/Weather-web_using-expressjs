const submitbtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const cityName = document.getElementById('cityName');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

const datahide = document.querySelector(".middle_layer")
	const getInfo = async (event)=>{ 
	event.preventDefault();
	alert("site not working");
	let cityVal = cityName.value;
	if (cityVal== "") {
		  city_name.innerHTML="Please Enter Correct value";
		  datahide.classList.add('data_hide');
	} else {
		try {
			let url =`api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=a6e5920057d8b0a0a41d2d50dcd53468 `;
		const response =await fetch(url);
		const data = await response.json();
		//console.log(data);
	const arrData = [data];
	city_name.innerText=`${arrData[0].name} ,${arrData[0].sys.country}`;
	temp.innerText= arrData[0].main.temp;
	const img = arrData[1].weather[0].main;
	// console.log(img);
	// temp_status.innerHTML = img;

	           if (img =="Clear") {
				temp_status.innerHTML = "<i class= 'fas fa-sun' style='color: #eccc68; '></i>";
			   }
			   else if(img=="Clouds"){
				temp_status.innerHTML = "<i class= 'fas fa-cloud' style='color: #f1f2f6; '></i>";
			   }
			   else if(img=="Rain"){
				temp_status.innerHTML = "<i class= 'fas fa-cloud-rain' style='color: #a4b0be; '></i>";
			   }else{
				temp_status.innerHTML = "<i class= 'fas fa-cloud' style='color: #f1f2f6; '></i>";
			   }

			   datahide.classList.remove('data_hide');
		} catch(error) {
			city_name.innerHTML="Please Enter the city name properly";
			console.log(error);
			datahide.classList.add('data_hide');
		}
	}
}
submitbtn.addEventListener('click' , getInfo);

// api.openweathermap.org/data/2.5/weather?q={city name}&appid=a6e5920057d8b0a0a41d2d50dcd53468