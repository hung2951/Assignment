import { $ } from "../../utils";
import { decreaseItemInCart, increaseItemInCart, removeItemInCart } from "../../utils/cart";
import { formatPrice } from "../../utils/formatPrice";
import { reRender } from "../../utils/reRender";
import Footer from "../components/footer";
import Header from "../components/header";


const Cart = {
    async print() {
        let cart = [];
        cart = JSON.parse(localStorage.getItem('cart'));
        let tong = 0;
        return /*html*/ `
        <div class="bg-[#0b8c5d]">
            <header>
            ${await Header.print()}
            </header>
            
            <table class="cart">
            ${cart == "" ?/*html*/`
                <div class="w-[1200px] mx-auto rounded-md bg-white min-h-[200px] text-center ">
                    <div class="pt-10 leading-[100px]">
                        <p class="text-xl">Không có sản phẩm nào trong giỏ hàng, vui lòng quay lại!</p>
                        <a href="/" class="hover:underline bg-red-600 text-white px-2 py-3 rounded-md">Quay lại trang chủ</a>
                    </div>
                    
                </div>
            ` :/*html*/`
                <thead >
                    <tr>
                        <th>Sản phẩm</th>
                        <th>Price</th>
                        <th>Số lượng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${cart.map((item) => /*html*/`
                        <tr>
                            <td><img src="${item.img}" width="100px" class="inline">${item.name}</td>
                            <td class="px-4 font-bold text-red-600">${formatPrice(`${item.price}`)} <u>đ</u></td>
                            <td>
                                <button  data-id="${item.id}" class="btn decrease text-xl pr-2">-</button>
                                ${item.quantity}    
                                <button  data-id="${item.id}" class="btn increase text-xl pl-2">+</button>
                            </td>
                            <td>
                                <button data-id="${item.id}" class="btn remove text-black hover:text-red-600 hover:underline pr-5">xóa</button>
                            </td>
                            <td hidden>
                                ${tong += item.price * item.quantity}
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
                <tfoot>
                    <tr>
                        <td class="font-bold">
                            Tổng:
                        </td>
                        <td class="font-bold text-red-600 text-xl">${formatPrice(`${tong}`)} <u>đ</u></td>
                    </tr>
                </tfoot>
            `}
                
            </table>
          ${Footer.print()}
            </div>
        `
    },
    afterRender() {

        const btns = $('.btn');
        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                const id = btn.dataset.id;
                if (btn.classList.contains('increase')) {
                    increaseItemInCart(id, function () {
                        reRender(Cart, "#app");
                    });
                } else if (btn.classList.contains('decrease')) {
                    decreaseItemInCart(id, function () {
                        reRender(Cart, "#app");
                    });

                } else {
                    removeItemInCart(id, function () {
                        reRender(Cart, "#app");
                    });
                }
            })
        });

        Header.afterRender();
    }
}

export default Cart;