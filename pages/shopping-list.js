function addItem() {
  const container = document.getElementById("container");
  const input = document.getElementById("fname");

  const inputValue = input.value;

  if (inputValue.trim() !== "") {
    const newItem = document.createElement("li");

    newItem.textContent = inputValue;

    container.appendChild(newItem);

    input.value = "";
  }
}
