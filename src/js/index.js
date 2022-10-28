const colorPicker = document.getElementById("color");

const changeFormColor = () => {
  let formToChange = document.getElementById("form2");
  formToChange.style.backgroundColor = colorPicker.value;
}

colorPicker.addEventListener("change", changeFormColor, false);