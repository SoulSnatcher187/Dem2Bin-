function convertBinary() {
    let binaryInput = document.getElementById("binaryInput").value;

    if (/^[01]+$/.test(binaryInput)) {
        let decimalOutput = parseInt(binaryInput, 2);

        document.getElementById("decimalOutput").textContent = `Decimal Equivalent: ${decimalOutput}`;
    } else {
        alert("Invalid input. Please enter a valid binary number (consisting of 0s and 1s).");
    }
}