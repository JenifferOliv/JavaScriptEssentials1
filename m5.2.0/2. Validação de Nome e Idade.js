function validateUser(name, age) {
    if (typeof name === "string" && name.trim() !== "" &&
        typeof age === "number" && age >= 0) {
        return true;
    }
    return false;
}
