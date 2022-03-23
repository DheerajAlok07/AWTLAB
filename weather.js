async function weather()
{
  
   let city=document.getElementById("temp");
   let url='https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=06daa443cbba20208d9ce537b29a5e1d';
   const response = await fetch(url);
   let data = await response.json();
   console.log(data); 
   let{main: {temp,temp_min,temp_max,pressure,humidity}}=data;
     console.log("temp:"+temp);
     console.log("temp_min:",+temp_min);
     console.log("temp_max:"+temp_max);
    console.log("pressure:"+pressure);
    console.log("humidity:"+humidity);
  }
  

