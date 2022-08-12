// Consider the following scenario:
// There are 3 functions, namely, GetVideo(), AddIntro() and AddSummary(). Each method returns a Promise. The Promise when resolved must return a string after 3 seconds like this:
// GetVideo() à returns Got Video
// AddIntro() à returns Intro Added
// AddSummary() à returns Summary Added
// Invoke the GetVideo() function. The final result must be displayed as:
// Got Video, Intro Added, Summary Added

function GetVideo() {
    return new Promise(function (res, rej) {
        setTimeout(() => {
            res("<b>Got Video</b>"+", ");
        }, 3000);
        AddIntro().then(resolveFunction);
        AddSummary().then(resolveFunction);
    });
}
let resolveFunction = (value) => {
    document.write(value)
}

GetVideo().then(resolveFunction);

function AddIntro() {
    return new Promise(function (res, rej) {
        setTimeout(() => {
            res("<b>Intro Added<b>"+", ");
        }, 3000);
    });
}

function AddSummary() {
    return new Promise(function (res, rej) {
        setTimeout(() => {
            res("<b>Summary Added</b>");
        }, 3000);
    });
}