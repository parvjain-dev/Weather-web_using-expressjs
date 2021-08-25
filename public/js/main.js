const submitbtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const cityName = document.getElementById('cityName');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const temp_real_val = document.getElementById('temp_real_val');
const day = document.getElementById('day');
const today_date = document.getElementById('today_date');

const datahide = document.querySelector(".middle_layer")
	const getInfo = async (event)=>{ 
	event.preventDefault();

	//alert("site not working");
	let cityVal = cityName.value;

	if (cityVal=== "") {
		  city_name.innerText="Please Enter Correct value";
		  datahide.classList.add('data_hide');
	} else {

		     try {

			let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=a6e5920057d8b0a0a41d2d50dcd53468 `

		    const response =await fetch(url);
   //console.log(url);
		const data = await response.json();
		//console.log(data);
	        const arrData = [data];
	city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
	// temp.innerText= arrData[0].main.temp;
	temp_real_val.innerText = arrData[0].main.temp;
	const tempMood = arrData[0].weather[0].main;
	// console.log(img);
	// temp_status.innerHTML = img;

	if (tempMood == "Clear") {
		temp_status.innerHTML =
			"<i class='fas  fa-sun' style='color: #eccc68;'></i>";
		} else if (tempMood == "Clouds") {
		temp_status.innerHTML =
			"<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
		} else if (tempMood == "Rain") {
		temp_status.innerHTML =
			"<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
		} else {
		temp_status.innerHTML =
			"<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";

		}
			   datahide.classList.remove('data_hide');
			   cityVal = "";
		} catch(error) {
			cityVal = " ";
            datahide.classList.add("data_hide");
            city_name.innerText =  `please enter the proper city name`;
            console.log('please add the proper city name');
			console.log(error);
			// city_name.innerHTML="Please Enter the city name properly";
			// console.log(error);
			// datahide.classList.add('data_hide');
		}
	}
}
submitbtn.addEventListener('click' , getInfo);

// api.openweathermap.org/data/2.5/weather?q={city name}&appid=a6e5920057d8b0a0a41d2d50dcd53468








const getday = () =>{
    const currentday = new Date();
	console.log(currentday);
   var weekday = new Array(7);
   weekday[0]= "Sunday";
   weekday[1]= "Monday";
   weekday[2]= "Tuesday";
   weekday[3]= "Wednesday";
   weekday[4]= "Thrusday";
   weekday[5]= "Friday";
   weekday[6]= "Saturday";
   var n = weekday[currentday.getDay()];  //yeh getDay() alag hai yeh apn ko ek number dega voh number ki value apn uss array se lelenge
   console.log(n);
return n;
   };

   const getcurrtime =()=>{
	var months = ["Jan" , "Feb" , "Mar" , "Apr " , "May" , "June" ,
	 "July" , "Aug" , "Sept" , "Oct" , "Nov" , "Dec"]
	const currenttime = new Date();
	console.log(currenttime);
	var month = months[currenttime.getMonth() ];//yeh getMonth() alag hai yeh apn ko ek number dega voh number ki value apn uss array se lelenge
	var day = currenttime.getDate();
 //    console.log(`${month}/${day}`);

	return  `${day} ${month} `;
}
//   currdate.innerHTML =  getday() + " | " +getcurrtime();
day.innerHTML=getday();
today_date.innerHTML=getcurrtime();