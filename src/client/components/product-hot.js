import { getByHot } from "../../api/product";
import { formatPrice } from "../../utils/formatPrice";

const Hot = {
    async print() {
        const { data } = await getByHot();
        return /*html*/ `
            <div class="product-sale-title text-black font-bold ml-5 mt-10 py-5 text-xl uppercase">
                <p><i class="fab fa-gripfire"></i> Hot</p>
            </div>
            <div class="grid grid-cols-4 mb-10 rounded-lg ">
                ${data.map((post) => `
                    <div class="group apple-product-item text-center border-2 shadow-xl mx-5 mb-5 rounded-lg">
                        <div class="apple-product-item-img py-5">
                            <a href="/detail/${post.id}">
                            <img class="w-[450px] mx-auto"
                                src="${post.img}">
                            </a>
                        </div>
                        <div class="product-sale-item-title pb-5">
                            <a href="">
                                <p>${post.name}</p>
                            </a>
                            <div class="flex justify-center">
                                <p class="text-red-600 font-bold text-xl">${formatPrice(`${post.price}`)}  <u>đ</u></p>
                            </div>
                        </div>
                    </div>        
                `).join("")}
                
            </div>
        `

    }
}
export default Hot;