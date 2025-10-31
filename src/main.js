import "./style.css";
import { renderOrder } from "./components/order.js";
import { renderResid } from "./components/resid.js";

export function renderApp() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.setAttribute("dir", "rtl");

  const wrapper = document.createElement("div");
  wrapper.className =
    "flex flex-col md:flex-row gap-5 justify-center items-start w-full p-4 bg-[#00688e]";

  wrapper.appendChild(renderOrder());
  wrapper.appendChild(renderResid());

  app.appendChild(wrapper);
}
window.renderApp = renderApp;
renderApp();
