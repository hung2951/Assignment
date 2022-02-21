import { get, getByCate } from "../../api/product";
import { addToCart } from "../../utils/cart";
import { formatPrice } from "../../utils/formatPrice";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Apple = {
  async print() {

    const iphone = await getByCate("r2jAbe1");
    const macbook = await getByCate("16");
    const apple = [...iphone.data.products, ...macbook.data.products];
    return /*html*/ `
            <div class="apple ">
                <div class="apple-title"><i class="fab fa-apple"></i>
                  Apple</div>
                <div class="grid grid-cols-4 gap-5 mb-10 ">
                ${apple.map(item => `
                  <div class="group apple-product-item w-fit rounded-lg bg-white text-center">
                    <a href="/detail/${item.id}">
                      <div class="apple-product-item-img py-5">       
                          <img class="w-[300px] mx-auto"
                            src="${item.img}">
                      </div>
                      <div class="apple-product-item-title">                        
                          <p class="font-bold">${item.name}</p>
                          <p class="text-red-600 font-bold text-xl">${formatPrice(`${item.price}`)}  <u>đ</u></p>
                      </div>
                    </a>
                    <div
                      class="bg-red-600 text-white mt-5 rounded-b-lg h-10 leading-10 opacity-0 group-hover:mt-5 group-hover:opacity-100 transition-all">
                      <button data-id="${item.id}" class="btn"><i class="fas fa-cart-plus"></i><span> Thêm vào giỏ hàng</span></button>
                    </div>
                  </div>
                
                `).join("")}
                  
                </div>
            </div>  
    `
  },
  afterRender() {
    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
      btn.addEventListener('click', async function () {
        const id = btn.dataset.id;
        const { data } = await get(id);
        addToCart({ ...data, quantity: 1 }, () => {
          toastr.success(`Đã thêm ${data.name} vào giỏ hàng!`)
        })
      })
    })
  }
}
export default Apple;