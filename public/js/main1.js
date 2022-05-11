const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");


const getInfo = async(event)=>{
    event.preventDefault();
  
    let cityval = cityName.value;

        //let url=https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    try{
        if(cityVal === "")
        {
            city_name.innerText = "plz write the name before the search"
        }
        else{
            let url ="https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=481bc2d6e02d6095205f266f5a8240f9"
            const response = await fetch(url);
            console.log(response);
        }
    }
    catch{
        city_name.innerText = "plz enter the city name properly"
    }
      
}

submitBtn.addEventListener("click",getInfo);