function convertToCelsius() {
    const fahrenheitInput = parseFloat(document.getElementById("celsiusInput").value);
    const celsius = (fahrenheitInput - 32) * (5/9);
    document.getElementById("resultFahrenheit").textContent = celsius.toFixed(2);
}

function convertToFahrenheit() {
    const celsiusInput = parseFloat(document.getElementById("fahrenheitInput").value);
    const fahrenheit = (celsiusInput * 9/5) + 32;
    document.getElementById("resultCelsius").textContent = fahrenheit.toFixed(2);
}
