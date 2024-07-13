// JavaScript for changing button color
document.getElementById('changeColorBtn').addEventListener('click', function() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate random color hex code
    this.style.backgroundColor = randomColor;
});
