import { items, addItem, removeItem } from "../data.js";

export function renderOrder() {
  const container = document.createElement("div");
  container.className =
    "flex items-center justify-center flex-col bg-[#00c8c4] rounded-[10px] px-5";

  const title = document.createElement("h1");
  title.className = "text-2xl font-bold text-center my-4 text-white";
  title.textContent = "رستوران مک دونالد شعبه تهران";
  container.appendChild(title);

  const orderGrid = document.createElement("div");
  orderGrid.className =
    "grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-4 pb-5";

  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className =
      "flex items-center p-4 bg-[#def3fd] rounded-xl shadow-sm w-100 ";

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${
      item.image
    }" class="w-20 h-20 object-cover rounded-lg mr-4" />

      <div class="flex-1 mr-3">
        <h3 class="font-bold text-black">${item.title}</h3>
        <p class="text-sm text-gray-500 mb-2">${item.price} تومان</p>
        <div class="flex justify-between flex-row">
        <div class="flex items-center">
                    <button class="add px-2  bg-[#008292] text-white rounded rounded-bl-none rounded-tl-none">+</button>
          <input type="text" value="${item.count}" id="count-${
      item.id
    }" class="w-12 text-center shadow-sm" readonly />
          <button class="remove px-2  bg-[#008292] text-white rounded rounded-br-none rounded-tr-none">-</button>
          </div>

          <span class="  text-gray-700 font-semibold">${
            item.count * item.price
          } تومان</span>
        </div>

      </div>
    `;

    orderGrid.appendChild(itemDiv);
  });
  container.appendChild(orderGrid);
  return container;
}
