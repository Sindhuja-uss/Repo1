async function convertIngredient() {
    const ingredient = document.getElementById("ingredientInput").value;
    const quantity = parseFloat(document.getElementById("quantityInput").value);

    const response = await fetch(`/convert?ingredient=${ingredient}&quantity=${quantity}`);
    const data = await response.json();

    document.getElementById("resultText").innerText = data.message;
}
