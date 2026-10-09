function calculateAge() {
    let age = document.getElementById("userAge").value;
    let minimumAge = age / 2 + 7;
    let maximumAge = (age - 7) * 2;

    document.getElementById("results").innerHTML = `minimum: ${minimumAge}, maximum: ${maximumAge}`
}