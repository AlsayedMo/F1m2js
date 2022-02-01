const mobilegamesvak = document.getElementById('mobile');
const pcgamesvak = document.getElementById('pc');


function zetInMobilegamesla(mobile){
    console.log(mobile);

    const nieuwElement = document.createElement ('h2');
    nieuwElement.innerHTML = mobile;
    mobilegamesvak.appendChild(nieuwElement);

}
function zetInPCGamesla(pc){
    console.log(pc)

    const nieuwElement = document.createElement ('h2');
    nieuwElement.innerHTML = pc;
    pcgamesvak.appendChild(nieuwElement);
}