({plugins: ['jsdom-quokka-plugin']})


const inputColour = document.getElementById("input");
const dropdown = document.getElementById("dropdown");

document.getElementById("btn").addEventListener("click", function() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColour.value.slice(1)}&mode=${dropdown.value}`)
        .then(res => res.json())
        .then(data => {
            data.colors.forEach((color, i, array) => {
                document.getElementsByClassName(`color${i + 1}`)[0].style.background = color.hex.value;
                document.getElementsByClassName(`text${i + 1}`)[0].style.content = color.hex.value;
                console.log(array)
            });
        });
});
