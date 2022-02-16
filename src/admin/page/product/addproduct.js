import { add } from "../../../api/product";
import HeaderAdmin from "../../components/header";
import axios from "axios";
import { getAllCates } from "../../../api/category";
const addProduct = {
    async print() {

        const { data } = await getAllCates();


        return /*html*/ `
            <header class="bg-white shadow">
            ${HeaderAdmin.print()}
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Thêm sản phẩm
                </h1>
            </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <a href="/admin/list-product" class="underline hover:text-blue-600">Quay lại&raquo;</a>
                    <!-- Replace with your content -->
                    <div class="px-4 py-6 sm:px-0">
                        <div class="">
                            <form id="formAddProduct">
                                <label for="">Tên sản phẩm:
                                    <input type="text" id="name" name="name" placeholder="Tên sản phẩm">
                                </label>
                                <p id="checkName"></p>
                                <label for="">Giá:
                                    <input type="number" min="0" id="price" value="0" name="price" placeholder="Giá sản phẩm">
                                </label>
                                <label for="">Loại sản phẩm:
                                    <select id="cateId" name="cateId">
                                        ${data.map((post) =>/*html*/`
                                            <option value="${post.id}" class="capitalize">${post.cateName}</option>
                                        `).join("")}
                                    </select>
                                </label>                              
                                      
                                <label for="">Hình ảnh:
                                    <input type="file" class="h-14" id="img" name="img">
                                </label>   
                                <p id="checkImg"></p>  
                                <div>
                                    <label id="btnProduct">
                                        Sản phẩm mới
                                        <input type="radio" value="1" id="productHot" name="productHot">  
                                    </label> 
                                    <label id="cancel" class="underline text-sm text-red-600">Hủy
                                        <input hidden type="radio" value="0" checked id="productHot" name="productHot">
                                    </label>
                                </div>                                             
                                
                                <button type="submit">Thêm</button>
                            </form>
                        </div>
                    </div>
                    <!-- /End replace -->
                </div>
            </main>
        `
    },
    afterRender() {
        const formAddProduct = document.querySelector('#formAddProduct');

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/hungtv/image/upload";
        const CLOUDINARY_PRESET = "s9esu1dx";
        document.querySelector("#cancel").style.display = "none"
        document.querySelector("#btnProduct").onclick = () => {
            console.log(1)
            document.querySelector("#cancel").style.display = "inline"
        };
        document.querySelector("#cancel").onclick = function () {
            console.log(12)
            document.querySelector("#cancel").style.display = "none"
        };
        formAddProduct.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = formAddProduct.name.value;
            const price = formAddProduct.price.value;
            const img = formAddProduct.img.value;
            const productHot = formAddProduct.productHot.value;
            console.log(productHot)
            if (name == "") {
                document.querySelector("#checkName").innerHTML = "Vui lòng nhập tên sản phẩm!"

            } else if (!formAddProduct.img.files[0]) {
                document.querySelector("#checkImg").innerHTML = "Vui lòng chọn ảnh!"
                console.log(1)
            }
            else {
                // Lấy giá trị input file
                const file = formAddProduct.img.files[0];

                // append vào object formData
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', CLOUDINARY_PRESET)


                // call api cloudinary
                const response = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                })
                // call api thêm bài viết
                add({
                    "name": document.querySelector('#name').value,
                    "img": response.data.url,
                    "price": document.querySelector('#price').value,
                    "productCateId": formAddProduct.cateId.value,
                    "hot": formAddProduct.productHot.value,
                }).then(res => window.location.href = "list-product");
            }


        })
    }
}

export default addProduct;