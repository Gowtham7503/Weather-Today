function callerFun() {
    const input = document.getElementById("city");
    const city = input.value.trim();   
    if (!city) {
        alert("Please enter a city name");
        return;
    }


    localStorage.setItem("city", city);


    window.location.href = "weather.html";
}
