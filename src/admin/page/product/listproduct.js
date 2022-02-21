import { getAll, remove } from "../../../api/product";
import { formatPrice } from "../../../utils/formatPrice";
import { reRender } from "../../../utils/reRender";
import HeaderAdmin from "../../components/header";

const listProduct = {
  async print() {
    const { data } = await getAll();
    return /*html*/ `
            <header class="bg-white shadow">
            ${HeaderAdmin.print()}
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Danh sách sản phẩm
                </h1>
            </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <!-- Replace with your content -->
                    <a href="/admin/add-product" class="hover:text-blue-700 underline text-lg">Thêm sản phẩm</a>
                    <div class="px-4 py-6 sm:px-0">
                        <div class="">
                        <div class="flex flex-col mt-5">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                              <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                  <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      STT
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Ảnh
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Tên sản phẩm
                                    </th>
                                   
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Giá
                                    </th>
                                    
                                  </tr>
                                </thead>
                                ${data.map((post, index) => /*html*/`
                                    <tbody class="bg-white divide-y divide-gray-200">
                                    <tr>
                                    <td class="px-6">${index + 1}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <img src="${post.img}" width="130px">
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">${post.name}</div>
                                    </td>
                                    
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">${formatPrice(`${post.price}`)} <u>đ</u></div>
                                    </td>   
                                    <td>
                                      <button class="hover:text-blue-600 underline text-sm"><a href="/admin/product/edit/${post.id}">Sửa</a></button>
                                      <button data-id=${post.id} class="btn hover:text-red-600 underline text-sm">Xóa</button>
                                    </td>
                                    </tr>
                                    <!-- More people... -->
                                    </tbody>
                                    `).join("")
      }  
                              </table>
                            </div>
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

    // lấy toàn bộ danh sách button có class là .btn
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
          remove(id).then(() => {
            reRender(listProduct, "#app");
          });
        }
      })
    });
  }
}

export default listProduct;