export const items = [
  {
    id: 1,
    title: "همبرگر مخصوص",
    price: 10000,
    count: 0,
    image: "src/images/Berguer.jpg",
  },
  {
    id: 2,
    title: "همبرگر معمولی",
    price: 8000,
    count: 0,
    image: "src/images/Berguer.jpg",
  },
  {
    id: 3,
    title: " همبرگر مخصوص قارچ و پنیر",
    price: 20000,
    count: 0,
    image: "src/images/Berguer.jpg",
  },
  {
    id: 4,
    title: "همبرگر معمولی با قارچ و پنیر",
    price: 10000,
    count: 0,
    image: "src/images/Berguer.jpg",
  },
  {
    id: 5,
    title: "سیب زمینی سرخ کرده",
    price: 10000,
    count: 0,
    image: "src/images/french_fries.png",
  },
  {
    id: 6,
    title: "سیب زمینی سرخ کرده ویژه",
    price: 25000,
    count: 0,
    image: "src/images/french_fries.png",
  },
  {
    id: 7,
    title: "نوشابه",
    price: 5000,
    count: 0,
    image: "src/images/soda.png",
  },
  {
    id: 8,
    title: "نوشابه رژیمی",
    price: 6000,
    count: 0,
    image: "src/images/soda.png",
  },
  {
    id: 9,
    title: "سالاد سزار",
    price: 25000,
    count: 0,
    image: "src/images/salad.png",
  },
  {
    id: 10,
    title: "سالاد فصل",
    price: 8000,
    count: 0,
    image: "src/images/salad.png",
  },
];

export const taxPercent = 9;
export let discountPercent = 0;

export function addItem(id) {
  const item = items.find((i) => i.id === id);
  if (item) item.count++;
}
export function removeItem(id) {
  const item = items.find((i) => i.id === id);
  if (item && item.count > 0) item.count--;
}

export function applyDiscount(code) {
  const normalized = code.trim().toLowerCase();

  switch (normalized) {
    case "bronze":
      discountPercent = 10;
      break;
    case "silver":
      discountPercent = 15;
      break;
    case "gold":
      discountPercent = 20;
      break;
    default:
      discountPercent = 0;
  }
  return discountPercent;
}

export function getTotalItems() {
  return items.reduce((sum, i) => sum + i.price * i.count, 0);
}

export function getTax() {
  return (getTotalItems() * taxPercent) / 100;
}

export function getDiscount() {
  return ((getTotalItems() + getTax()) * discountPercent) / 100;
}

export function getTotalPrice() {
  return (getTotalItems() + getTax() - getDiscount()).toFixed(0);
}

export function submitOrder() {
  discountPercent = 0;
  for (const item of items) {
    item.count = 0;
  }
}
