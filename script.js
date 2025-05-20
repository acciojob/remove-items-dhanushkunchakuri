function remove() {
  let dropdown = document.getElementById("colorSelect");
  const selectedIndex = dropdown.selectedIndex;

  if (selectedIndex !== -1) {
    dropdown.remove(selectedIndex);
  }
}
