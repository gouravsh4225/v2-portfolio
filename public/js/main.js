document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
            document.querySelector("#main--container").style.visibility = "hidden";
            document.querySelector("#loader--wrapper").style.visibility = "visible"
    } else {
        document.querySelector("#loader--wrapper").style.display = "none";
        document.querySelector("#main--container").style.visibility = "visible";
    }
};