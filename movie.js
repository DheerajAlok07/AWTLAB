async function movies()
{
    let cityname=document.getElementById("test");
    let url='https://imdb-api.com/en/API/MostPopularMovies/k_p5b5jy25';
 const res=await fetch(url);
 let data=await res.json();
 console.log(data);
 
let {items}=data;
items.forEach(element => {
    let{title,rank}=element;
    console.log("movie name is"+title+"and rank is"+rank);
});