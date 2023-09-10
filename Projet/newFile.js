for (i = 0; i < btnLike.length; i++) {
    var favbtn = btnlike[i];
    favbtn.addEventListener('click', function (event) {
        buttonclicked = event.target;
        buttonclicked.classList.toggle("is-active");
    });
}
