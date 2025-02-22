export const validateForm = () => {
    let isValid = true;
    const inputs = document.querySelectorAll("input[required]");

    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            input.classList.add("border-red-500");
            isValid = false;
        } else {
            input.classList.remove("border-red-500");
        }
    });

    return isValid;
};