// Create an HTML5 page which displays an image with the size 200x200 pixels. 
// When the mouse is hovered on the image, the image must zoom to 800x800 pixels. 
// When the mouse is moved out of the image, the image must zoom out to 200x200 pixels.

document.getElementById('img').addEventListener('mouseover', function(){
    document.getElementById('img').style.width='800px';
    document.getElementById('img').style.height='800px';
})

document.getElementById('img').addEventListener('mouseleave', function(){
    document.getElementById('img').style.width='200px';
    document.getElementById('img').style.height='200px';
})