const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");


const getInfo = async(event)=>{
    event.preventDefault();
  
    let cityVal = cityName.value;

        //  let url=https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    try{
        if(cityVal === "")
        {
            city_name.innerText = "plz write the name before the search";
        }
        else{
            let url ="https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=481bc2d6e02d6095205f266f5a8240f9"
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];  //data array ma ave etle tene array ma store karava pade

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;  // url google ma past kari ne joyu
            const tempMood = arrData[0].weather[0].main;

            //condition to check sunny or cloudy

            if(tempMood == "Clear")
            {
                temp_status.innerHTML=
                    "<i class=`fas fa-sun` style=`color: #eccc68;`></i>";
            }
            else if(tempMood == "Clouds")
            {
                temp_status.innerHTML=
                    "<i class=`fas fa-clouds` style=`color: #f1f2f6;`></i>";
            }
            else if(tempMood == "Rain")
            {
                temp_status.innerHTML=
                    "<i class=`fas fa-rain` style=`color: #a4b0be;`></i>"
            }
            else
            {
                temp_status.innerHTML=
                    "<i class=`fas fa-sun` style=`color: #eccc68;`></i>"
            }
        }
    }
    catch{
        city_name.innerText = "plz enter the city name properly";
    }
      
}

submitBtn.addEventListener("click",getInfo);