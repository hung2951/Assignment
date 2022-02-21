import { getByCate } from "../../api/product";
import { formatPrice } from "../../utils/formatPrice";
import Footer from "../components/footer";
import Header from "../components/header";

const ProductCates = {
    async print(id) {
        const { data } = await getByCate(id)
        console.log(data)
        return /*html*/`
            <div class="bg-[#0b8c5d]">
                <header>
                    ${await Header.print()}
                </header>
                
                <div class=" w-[1200px] mx-auto bg-white rounded-md min-h-[200px]  px-10">
                    <div class="text-center py-5 text-3xl font-bold capitalize">
                    ${data.cateName}
                    </div>
                    <div class="grid grid-cols-3 gap-5">
                    ${data.products.map(item =>/*html*/`
                    <a href="/detail/${item.id}">
                        <div class="group border-2 border-gray-300 overflow-hidden my-5 rounded-xl pt-5 pb-10 ">                    
                            <img class="w-96 mx-auto group-hover:scale-105 group-hover:duration-500" src="${item.img}">
                            <p class="text-center capitalize text-xl py-3 hover:text-blue-800">${item.name}</p>
                            <p class="text-center font-bold text-xl">${formatPrice(`${item.price}`)} <u>đ</u></p>
                        </div>
                    </a>
                    `).join("")}
                        
                    </div>

                    
                </div>
               

                ${Footer.print()}
            </div>
        `
    },
    afterRender() {

        Header.afterRender();
    }
}

export default ProductCates;