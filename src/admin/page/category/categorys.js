import HeaderAdmin from "../../components/header";
import { addCates, getCatesType, removeCates } from "../../../api/category";
import { reRender } from "../../../utils/reRender";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const categories = {
    async print() {
        const dataPhone = await getCatesType("phone");
        const dataLap = await getCatesType("laptop");
        const dataAccessory = await getCatesType("accessory");
        const dataSound = await getCatesType("sound");
        const dataSale = await getCatesType("sale");
        return /*html*/ `
            <header class="bg-white shadow">
                ${HeaderAdmin.print()}
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Danh mục
                    </h1>
                </div>
                </header>
                <main>
                    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <!-- Replace with your content -->
                        <div class="px-4 py-6 sm:px-0">
                            <div class="border-4 border-dashed border-gray-200 rounded-lg min-h-full">
                                <div>
                                    <form id="formCates">
                                        <div class="flex justify-center py-2">
                                            <label class="mr-5">Tên hãng:
                                                <input type="text" class="border w-96 h-10 rounded-sm block mt-2 pl-3 border-black" id="catesName" name="catesName" placeholder="Tên hãng">
                                            </label>
                                            <label>Loại danh mục:
                                                <select id="cateType" name="cateType" class="border w-96 h-10 rounded-sm block mt-2 pl-3 border-black">
                                                    <option value="phone">Điện thoại</option>
                                                    <option value="laptop">Laptop</option>
                                                    <option value="accessory">Phụ kiện</option>
                                                    <option value="sound">Âm thanh</option>
                                                    <option value="sale">Flash sale</option>
                                                </select>
                                            </label>
                                        </div>  
                                        <div class="w-full flex justify-center">
                                            <button class="btn-formCates">Thêm</button>
                                        </div>                        
                                    </form>
                                    <div class="grid grid-cols-5 my-4 gap-2 px-5">
                                        <div>
                                            <p class="text-center font-bold">Điện thoại</p>
                                            ${dataPhone.data.map((post, index) =>/*html*/ `
                                            <div class="flex text-center">
                                                <p class="capitalize">${index + 1}. ${post.cateName} -</p>
                                                <button data-id=${post.id} class="btn pl-3 text-red-600 underline hover:font-bold">xóa</button>
                                            </div>
                                            `).join("")}  
                                        </div>
                                        <div>
                                            <p class="text-center font-bold">Laptop</p>
                                            ${dataLap.data.map((post, index) =>/*html*/ `
                                            <div class="flex">
                                                <p class="capitalize">${index + 1}. ${post.cateName} -</p>
                                                <button data-id=${post.id} class="btn pl-3 text-red-600 underline hover:font-bold">xóa</button>
                                            </div>
                                            `).join("")}  
                                        </div>   
                                        <div>
                                            <p class="text-center font-bold">Phụ kiện</p>
                                            ${dataAccessory.data.map((post, index) =>/*html*/ `
                                            <div class="flex">
                                                <p class="capitalize">${index + 1}. ${post.cateName} -</p>
                                                <button data-id=${post.id} class="btn pl-3 text-red-600 underline hover:font-bold">xóa</button>
                                            </div>
                                            `).join("")}  
                                        </div>   
                                        <div>
                                            <p class="text-center font-bold">Âm thanh</p>
                                            ${dataSound.data.map((post, index) =>/*html*/ `
                                            <div class="flex">
                                                <p class="capitalize">${index + 1}. ${post.cateName} -</p>
                                                <button data-id=${post.id} class="btn pl-3 text-red-600 underline hover:font-bold">xóa</button>
                                            </div>
                                            `).join("")}  
                                        </div>   
                                        <div>
                                            <p class="text-center font-bold">Flash sale</p>
                                            ${dataSale.data.map((post, index) =>/*html*/ `
                                            <div class="flex text-center">
                                                <p class="capitalize">${index + 1}. ${post.cateName} -</p>
                                                <button data-id=${post.id} class="btn pl-3 text-red-600 underline hover:font-bold">xóa</button>
                                            </div>
                                            `).join("")}  
                                        </div>   
                                           
                                        
                                    </div> 
                                   
                                </div>
                                
                            </div>
                        </div>
                        <!-- /End replace -->
                    </div>
                </main>
            
            `
    },
    afterRender() {
        //điện thoại
        const formCates = document.querySelector("#formCates");
        formCates.addEventListener("submit", (e) => {
            e.preventDefault();
            addCates({
                cateName: document.querySelector("#catesName").value,
                cateType: document.querySelector("#cateType").value,
            }).then(window.location.href = "/admin/category")
            toastr.success("Đã thêm");
        })



        //xóa
        const buttons = document.querySelectorAll('.btn');
        // tạo vòng lặp để lấy ra từng button
        buttons.forEach(button => {
            // sử dụng dataset để lấy id từ data-*
            const id = button.dataset.id;
            // click vào button thì xóa phần tử trong mảng
            // dựa vào ID vừa lấy được
            button.addEventListener('click', () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    removeCates(id).then(() => {
                        reRender(categories, "#app");
                    });
                }
            })
        });
    }
}

export default categories;