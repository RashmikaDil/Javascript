function validation(){
    const name = document.getElementById("name").value;
    nameError.textContent = "";
    let isValid = true;
    if (name.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
   }
}