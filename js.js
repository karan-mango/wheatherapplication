const apikey='63813771e8fd82eeb53525cdc9880645';

const apilink='https://api.openweathermap.org/data/2.5/weather?';

const temp=document.querySelector('.temp').innerHTML;
const city=document.querySelector('.city').innerHTML;
const weatherimg=document.querySelector('.weatherimg');
const weatherinfo=document.querySelector('.weather-info');


async function checkwheather(city){
//    const response =await fetch( apilink+'q='+city+'&appid='+apikey+'&units=metric');



   const response =await fetch( apilink+`q=${city}&appid=${apikey}&units=metric`);

   
   var data=await response.json();
   console.log(data);
   //    city=data.name
   document.querySelector('.city').innerHTML=data.name;
   document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+' °C';
   document.querySelector('.humidity .content .value').innerHTML=data.main.humidity+' %';

   document.querySelector('.wind-speed .content .value').innerHTML=data.wind.speed+' km/h';

   if(data.weather[0].main=='Clouds'){
    weatherimg.src='./images/clouds.png'
   }
   else if(data.weather[0].main=='Clear'){
    weatherimg.src='./images/clear.png'
   }
   else if(data.weather[0].main=='Rain'){
    weatherimg.src='./images/rain.png'
   }
   else if(data.weather[0].main=='Mist'){
    weatherimg.src='./images/mist.png'
   }
   else if(data.weather[0].main=='Drizzle'){
    weatherimg.src='./images/drizzle.png'
   }


   weatherinfo.style.display='contents';

}


const btn=document.querySelector('.search-icon');


btn.addEventListener('click',()=>{
    let city=document.querySelector('#inp1');
    city=city.value;
    checkwheather(city);
})

let inp1=document.querySelector('#inp1');

inp1.addEventListener("keypress", function(event) {
    
    if (event.key === "Enter" || event.keyCode === 13) {

        let city=document.querySelector('#inp1');
    city=city.value;
    checkwheather(city);

      
    }
});