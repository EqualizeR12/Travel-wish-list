const hotels = document.getElementById('variant');

function openNewWin () {
    myWin = open("hotels/Coliseum/hotelsColiseum.html");
}

hotels.addEventListener('click', openNewWin);
