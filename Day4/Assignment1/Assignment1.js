// Run the following code & examine the output carefully:
// for(var i=1 ; i<10 ; i++)
// {
// setTimeout(() => {
// console.log(i);
// }, 1000)
// }
// Refactor the code to produce the following output after 1 second:


for (let i = 1; i <= 10; i++) {

    setTimeout(() => {

        document.write(i+"<br>");

    }, 1000)

}