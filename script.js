function preventLink() {
  const link = document.querySelector("a");
  link.addEventListener("click", (e) => e.preventDefault());
}
