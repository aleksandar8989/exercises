var indeksSlike = 1;

function prethodna() {
    if (indeksSlike == 1) {
        indeksSlike = 5;
    } else {
        indeksSlike--;
    }
    document.getElementById('dog').src =
        'images/dogs0' + indeksSlike + ".jpg";
}

function sledeca() {
    if (indeksSlike == 5) {
        indeksSlike = 1;
    } else {
        indeksSlike++;
    }
    document.getElementById('dog').src =
        'images/dogs0' + indeksSlike + ".jpg";
}