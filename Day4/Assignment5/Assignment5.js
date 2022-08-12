// Rewrite the previous assignment using async and await keywords.
//Creating Async function
async function GetVideo() {
    let myPromise = new Promise(function(res,rej) {
      setTimeout(function() {
        res("<b>Got Video,<b> ");
        }, 3000);
    });
    let result1 = await myPromise;
    document.write(result1);

    let result2 = await AddIntro();
    document.write(result2)

    let result3 = await AddSumary();
    document.write(result3)
  }

//Creating AddIntro function
function AddIntro(){
    return new Promise(function(res,rej){
        setTimeout(() => {
            res("<b>Intro Added,<b>  ");
            }, 3000)
    });
}

//Creating AddSummary function
function AddSumary(){
    return new Promise(function(res,rej){
        setTimeout(() => {
            res("<b>Summary Added<b> ");
            }, 3000)
    });
}
 
// Calling the async GetVideo Function
GetVideo();



