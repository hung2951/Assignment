import { getAll, remove } from "../../../api/user";
import { reRender } from "../../../utils/reRender";
import HeaderAdmin from "../../components/header";
const listUser = {
  async print() {
    const { data } = await getAll();
    return /*html*/ `
            <header class="bg-white shadow">
            ${HeaderAdmin.print()}
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Danh sách tài khoản
                </h1>
            </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <!-- Replace with your content -->
                    <a href="/admin/signup" class="hover:text-blue-700 underline text-lg">Thêm tài khoản</a>
                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
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
                                      Họ và tên
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Email
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Vai trò
                                    </th>
                                    
                                  </tr>
                                </thead>
                                ${data.map((post, index) => /*html*/`
                                    <tbody class="bg-white divide-y divide-gray-200">
                                    <tr>
                                    <td class="px-6">${index + 1}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">${post.username}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">${post.email}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">${post.role == 0 ? "Khách hàng" : "Quản trị"}</div>
                                    </td>      
                                    <td>
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
            reRender(listUser, "#app");
          });
        }
      })
    });
  }
}

export default listUser;