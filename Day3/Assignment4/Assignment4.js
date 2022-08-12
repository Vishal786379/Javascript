// Create an HTML5 page which displays a dropdown list. The drop down list must contain the following data:
// India
// Australia
// New Zealand
// England
// When the user selects a country name, write JS code to display the list of cities in another dropdown list.

var stateWiseCity = {
    India: ["Mumbai","Jaipur", "Pune", "Bengaluru","Kolkata"],
    Astralia: ["Melbourne","Sydney", "Perth","Brisbane", "Victoria"],
    NewZealand: ["Dunedin","Auckland","Christchurch", "Napier","Wellington"],
    England: ["Manchester","Cambridge","Preston","London", "Oxford"]
}
function subCity(value) {
    if (value.length >= 0) {
        var citiesOptions = "";
        for (cityId in stateWiseCity[value]) {
            document.getElementById("selectcity").style.display = 'inline';
            citiesOptions += "<option>" + stateWiseCity[value][cityId] + "</option>";
        }
        document.getElementById("selectcity").innerHTML = citiesOptions;

    }
}

