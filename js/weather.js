const fetchWeather = async (cityName) => {
    const apiKey = "755999c058dcde6c6d93e46ecc357f87";
    const output = document.getElementById("output");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        const description =
            data.weather[0].description.replace(/\b\w/g, c => c.toUpperCase());

        output.innerHTML = `
            <h1 class="gradient-text">${data.name}</h1>

            <p class="temp">${Math.floor(data.main.temp)}°C</p>

            <div class="weather-info">
                <p><strong>Feels Like:</strong> ${Math.floor(data.main.feels_like)}°C</p>
                <p><strong>Min Temp:</strong> ${Math.floor(data.main.temp_min)}°C</p>
                <p><strong>Max Temp:</strong> ${Math.floor(data.main.temp_max)}°C</p>
                <p><strong>Condition:</strong> ${description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            </div>
        `;

    } catch (err) {
        output.innerHTML = `<p>Unable to fetch weather data</p>`;
        console.error(err);
    }
};

const UNSPLASH_KEY = "JcPnxBu28xtUCgVrTdwQZ6PMLmfCPOZ1I4dqOffG5lg";

async function fetchCityPhoto(city) {
    try {
        const res = await fetch(
            `https://api.unsplash.com/search/photos?query=${city} city&per_page=15&orientation=landscape`,
            {
                headers: {
                    Authorization: `Client-ID ${UNSPLASH_KEY}`
                }
            }
        );

        const data = await res.json();

        if (data.results && data.results.length > 0) {
            const imageUrl = data.results[0].urls.regular;

            document.body.style.backgroundImage = `url(${imageUrl})`;
        } else {
            console.warn("No images found for city");
        }

    } catch (err) {
        console.error("Failed to load city image", err);
    }
}
