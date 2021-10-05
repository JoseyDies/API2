function stars(){
    let count = 500;
    let scene = document.querySelector('.scene');
    let i = 0;
    while(i < count){
        let star = document.createElement("i");
        let x = Math.floor(Math.random () * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x+ 'px';
        star.style.top = y+ 'px';
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';

        star.style.animationDuration = 5+duration+ 's';
        star.style.animationDelay = duration+ 's';


        scene.appendChild(star);
        i++
    };
};
stars();


let queryUrl = "https://api.nasa.gov/planetary/apod?";
let queryKey = "api_key=I2ilCKrFnEOhwwypJa6r1FOnvF4BZ6ApbXQuaypF&date=";

const form = document.getElementById("submitDate");
form.addEventListener('submit', function (e){  //"a function that gets run every time it hears the event"
    e.preventDefault();
    console.log(e);
    let queryDate = document.getElementById("formControlDefault").value; 
    let queryFull = queryUrl + queryKey + queryDate;

    fetch(queryFull)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        let date = data["date"];
        let explanation = data["explanation"];
        let hdurl = data["hdurl"];
        let media_type = data["media_type"];
        let title = data["title"];
        let url = data["url"];
        document.getElementById("wrapper-url").src = url;
        document.getElementById("wrapper-date").innerHTML = date;
        document.getElementById("wrapper-title").innerHTML = title;
        document.getElementById("wrapper-explanation").innerHTML = explanation;
        document.getElementById("wrapper-hdurl").href = hdurl;
    });
});





