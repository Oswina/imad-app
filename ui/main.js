console.log('Loaded!');

//change text of main text division
var element = document.getElementById('main text');

element.innerHTML = 'New value';

//move the image
var img = document.getElementById('madi');
img.onclick = function() {
    img.style.marginLeft='100px';
};
