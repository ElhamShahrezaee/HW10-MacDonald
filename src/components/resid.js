import {
  items,
  getTotalItems,
  getTax,
  getDiscount,
  applyDiscount,
  getTotalPrice,
  discountPercent,
  submitOrder,
} from "../data.js";

export function renderResid() {
  const container = document.createElement("div");
  container.className =
    "p-6 bg-[#00c8c4] rounded-[10px] text-black shadow  max-w-md ";

  container.innerHTML = `
    <div class="space-y-2">
      <div class="flex justify-between">
        <span>جمع کل سفارشات:</span>
        <span>${getTotalItems()} تومان</span>
      </div>
      <div class="flex justify-between">
        <span>حق سرویس و کارمزد:</span>
        <span>${getTax()}  تومان</span>
      </div>
      <div class="flex justify-between">
        <span>تخفیف (${discountPercent}%):</span>
        <span>${getDiscount()}  تومان</span>
      </div>
    </div>

    <div class="mt-4 flex ">
      <input id="discountCode"
             type="text"
             placeholder="کد تخفیف خود را وارد نمایید."
             class="flex-1 bg-white rounded rounded-tl-none rounded-bl-none px-3 py-2 text-sm outline-none" />
      <button id="applyDiscountBtn" class="bg-[#008292] text-white px-4 rounded rounded-tr-none rounded-br-none  flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="3">
<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg>
</button>
    </div>

    <div class="flex justify-between items-center bg-[#ffdb02] rounded p-2 items-center  mt-4 pt-3 text-lg font-semibold">
      <span>مبلغ قابل پرداخت:</span>
      <span>${getTotalPrice()}  تومان</span>
    </div>

    <button id="submitOrderBtn"
            class="w-full mt-5 bg-[#008292] text-white py-2 rounded-lg hover:bg-blue-700 transition">
      ثبت سفارش
    </button>
  `;

  const discountInput = container.querySelector("#discountCode");
  const applyBtn = container.querySelector("#applyDiscountBtn");
  const submitBtn = container.querySelector("#submitOrderBtn");

  applyBtn.addEventListener("click", () => {
    const code = discountInput.value.trim();
    applyDiscount(code);
    renderApp();
  });

  submitBtn.addEventListener("click", () => {
    console.log(getTotalPrice());
    if (getTotalPrice() == 0) {
      alert("آیتمی انتخاب نشده است. لطفا ابتدا سفارش خود را وارد نمایید.");
      return;
    }
    submitOrder();
    renderApp();
    alert("سفارش شما ثبت شد!");
  });

  return container;
}
