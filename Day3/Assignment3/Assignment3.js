// Create an HTML5 page which contains a textbox. 
// The user will enter an email id in the textbox. Next to the textbox, put a button titled Add Another Email. 
// When the button is clicked, write JS code to add another textbox and a button next to it titled Remove Email.
// When the button is clicked, the button and the textbox should be removed.

document.getElementById('label2').style.display='none';
document.getElementById('text2').style.display='none';
document.getElementById('button2').style.display='none';

function submit1(){
    document.getElementById('label2').style.display='inline';
    document.getElementById('text2').style.display='inline';
    document.getElementById('button1').style.display='none';
    document.getElementById('button2').style.display='inline';
}

function submit2(){

    document.getElementById('label2').style.display='none';
    document.getElementById('text2').style.display='none';
    document.getElementById('button1').style.display='inline';
    document.getElementById('button2').style.display='none';
}