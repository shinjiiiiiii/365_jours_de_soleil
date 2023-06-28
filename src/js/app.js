import '../css/style.css';
import '../css/reset.css';


const cards = document.getElementById('cards')

const data = {
    articles: [
        {
            title: "lun",
            day: "20",
            img: "assets/img/chance-storm.png",
            deg_max: "14",
            deg_min: "6"
        },
        {
            title: "mar",
            day: "21",
            img: "assets/img/smoke.png",
            deg_max: "8",
            deg_min: "1"
        },
        {
            title: "mer",
            day: "22",
            img: "assets/img/sleet.png",
            deg_max: "6",
            deg_min: "-6"
        },
        {
            title: "jeu",
            day: "23",
            img: "assets/img/snow.png",
            deg_max: "4",
            deg_min: "-2"
        },
        {
            title: "ven",
            day: "24",
            img: "assets/img/sunny.png",
            deg_max: "14",
            deg_min: "10"
        },
        {
            title: "sam",
            day: "25",
            img: "assets/img/thunder-storm.png",
            deg_max: "16",
            deg_min: "12"
        },
        {
            title: "dim",
            day: "26",
            img: "assets/img/fog.png",
            deg_max: "8",
            deg_min: "5"
        },
        {
            title: "lun",
            day: "27",
            img: "assets/img/wind.png",
            deg_max: "4",
            deg_min: "-3"
        },
        

    ]
}


function genArticle(articles){
    
    cards.innerHTML = ``

    for(const article of articles ){
        cards.innerHTML += `
        <article>
        <h3>${article.title}</h3>
        <p>${article.day}</p>
        <img src="${article.img}" alt="image meteo"> 
        <div>
          <span id="span_red">${article.deg_max}</span>|<span id="span_blue">${article.deg_min}</span>
        </div>
        
      </article>
        `
    }

}genArticle(data.articles)