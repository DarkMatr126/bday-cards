function open () {
    document.getElementById('message').style.display = 'block';
    document.getElementById('arnell').style.display = 'block';
    setTimeout(() => {
        document.getElementById('swoosh').style.display = 'block';
        setTimeout(() => {
            document.getElementById('swoosh').style.display = 'none';
        }, 5000);
    }, 2000);
}

function close () {
    document.getElementById('message').style.display = 'none';
    document.getElementById('arnell').style.display = 'none';
    document.getElementById('swoosh').style.display = 'none';
}

var playing = false;

function keepPlaying () {
    close();

    var randY = Math.floor(Math.random()*tiles.length - 1)
    var randX = Math.floor(Math.random()*tiles[0].length);

    playing = true;

    clicked(randX,randY);
}