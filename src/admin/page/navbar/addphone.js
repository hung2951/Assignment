import HeaderAdmin from "../../components/header";
import { addphone } from "../../../api/phone";
const addPhone = {
    async print() {
        return /*html*/ `
        <header class="bg-white shadow">
            ${HeaderAdmin.print()}
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Dashboard
                </h1>
            </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <!-- Replace with your content -->
                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                            <form id="formAddPhone">
                                <input type="text" class="border border-black" id="name" placeholder="Tên hãng">
                                <button>Thêm</button>
                            </form>
                        </div>
                    </div>
                    <!-- /End replace -->
                </div>
            </main>
            
            `
    },
    afterRender() {
        const formAddPhone = document.querySelector("#formAddPhone");
        formAddPhone.addEventListener("submit", (e) => {
            e.preventDefault();
            addphone({
                name: document.querySelector("#name").value,
            })
        })
    }
}

export default addPhone;