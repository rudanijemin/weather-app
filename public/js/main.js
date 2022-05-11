const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const getInfo = async(event)=>{
    event.preventDefault();
    let cityval = cityName.value;

    // let url=https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    if(cityval === "")
    {
        city_name.innerText = "plz enter the name before the search"
    }
    else{
        let url ="https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=481bc2d6e02d6095205f266f5a8240f9"
        const response = await fetch(url);
    }
}

submitBtn.addEventListener("click", getInfo);