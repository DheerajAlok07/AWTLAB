async function movies()
{
    let cityname=document.getElementById("test");
    let url='https://imdb-api.com/en/API/SearchTitle/k_p5b5jy25/'+cityname.value;
 const res=await fetch(url);
 let data=await res.json();
 console.log(data);
 
let {results}=data;
results.forEach(element => {
    let{title,year}=element;
    console.log("movie name is"+title+"and year is"+year);
});