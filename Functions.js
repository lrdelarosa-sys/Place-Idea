function choose(place) {

    const result = document.getElementById("result");

    switch(place) {
        case "Venice Grand Canal":
            result.innerHTML = "❤️ You chose Venice Grand Canal!";
            break;

        case "Met Live":
            result.innerHTML = "🛍️ You chose Met Live!";
            break;

        case "Bonifacio High Street":
            result.innerHTML = "🌆 You chose Bonifacio High Street!";
            break;
    }
}

window.onload = function(){

    setTimeout(function(){

        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";

    },1000);

}

