function toggleDropdown(contentId) {
    var dropdown = document.getElementById(contentId);
    dropdown.style.display = (dropdown.style.display === "none" || dropdown.style.display === "") ? "block" : "none";
}
