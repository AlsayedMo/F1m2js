const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');


let seizoenen = [
    {
        "title":"seizoenen",
        "image":"img/seasons.jpg",
        "backGround":"burlywood"
    },
    {
        "title":"lente",
        "image":"img/spring.jpeg",
        "backGround":"burlywood"
    },
    {
        "title":"zomer",
        "image":"img/Summer.jpg",
        "backGround":"burlywood"
    },
    {
        "title":"autumn",
        "image":"img/autumn.jpg",
        "backGround":"burlywood"
    },
    {
        "title":"winter",
        "image":"img/winter.jpg",
        "backGround":"burlywood"
    },   
];

function show (index){
    myTitle.innerHTML = seizoenen[index].title;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround;
}