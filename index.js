({plugins: ['jsdom-quokka-plugin']})

const inputColour = document.getElementById("input");
const dropdown = document.getElementById("dropdown");

document.getElementById("btn").addEventListener("click", function() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColour.value.slice(1)}&mode=${dropdown.value}`)
        .then(res => res.json())
        .then(data => {
            const batchStyles = [];

            data.colors.forEach((color, i) => {
                const colorElement = document.getElementsByClassName(`color${i + 1}`)[0];
                const textElement = document.getElementsByClassName(`text${i + 1}`)[0];

                batchStyles.push({
                    colorElement,
                    textElement,
                    backgroundColor: color.hex.value,
                    content: color.hex.value
                });
            });

            applyBatchStyles(batchStyles);
        });
});

function applyBatchStyles(styles) {
    requestAnimationFrame(() => {
        styles.forEach(style => {
            style.colorElement.style.background = style.backgroundColor;
            style.textElement.style.content = style.content;
        });
    });
}
