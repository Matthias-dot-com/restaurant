export default function createMenu() {
  const container = document.createElement("div");

  const title = document.createElement("div");
  title.textContent = "Our Menu";

  container.appendChild(title);
  return container;
}
