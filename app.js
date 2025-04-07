
const products = [
  { id: 1, name: "تيشيرت رجالي", price: 45, image: "https://via.placeholder.com/200x150?text=Shirt" },
  { id: 2, name: "فستان نسائي", price: 85, image: "https://via.placeholder.com/200x150?text=Dress" },
  { id: 3, name: "حذاء أطفال", price: 60, image: "https://via.placeholder.com/200x150?text=Kids+Shoes" },
];

let cart = [];
let form = { name: "", phone: "", address: "" };

function addToCart(product) {
  cart.push(product);
  render();
}

function updateForm(field, value) {
  form[field] = value;
}

function render() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <div style="padding: 20px;">
      <h1 style="text-align:center;">المتجر</h1>
      <div style="display: grid; gap: 15px; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));">
        ${products.map(p => `
          <div style="background:#fff; border-radius:12px; box-shadow:0 0 6px rgba(0,0,0,0.1); padding:10px;">
            <img src="${p.image}" style="width:100%; height:150px; object-fit:cover; border-radius:8px;">
            <div style="font-weight:bold;">${p.name}</div>
            <div style="color:green;">${p.price} د.ل</div>
            <button onclick='addToCart(${JSON.stringify(p)})' style="width:100%;">أضف إلى السلة</button>
          </div>
        `).join("")}
      </div>

      <hr style="margin:30px 0;">
      <h2>🛒 السلة</h2>
      ${cart.length === 0 ? "<p>السلة فارغة</p>" :
        `<ul>${cart.map(i => `<li>${i.name} - ${i.price} د.ل</li>`).join("")}</ul>`}
      <p><strong>الإجمالي (شامل التوصيل): ${
        cart.reduce((a, i) => a + i.price, 0) + 15
      } د.ل</strong></p>

      <hr style="margin:30px 0;">
      <h2>📦 بيانات التوصيل</h2>
      <input placeholder="الاسم الكامل" oninput="updateForm('name', this.value)" style="width:100%; margin-bottom:10px;" />
      <input placeholder="رقم الهاتف" oninput="updateForm('phone', this.value)" style="width:100%; margin-bottom:10px;" />
      <input placeholder="العنوان" oninput="updateForm('address', this.value)" style="width:100%; margin-bottom:10px;" />
      <button style="width:100%;">تأكيد الطلب</button>
    </div>
  `;
}

render();
