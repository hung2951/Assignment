import { getCatesType } from "../../api/category";

const Navbar = {
    async print() {
        const dataPhone = await getCatesType("phone");
        const dataLap = await getCatesType("laptop");
        const dataAccessory = await getCatesType("accessory");
        const dataSound = await getCatesType("sound");
        const dataSale = await getCatesType("sale");
        return /*html*/ `
            <div class="mb-5">
            <ul class="mx-auto flex relative bg-[#00483d] w-[1200px] justify-around items-center rounded-lg pt-1 text-white h-14">
                <li class="group">
                    <a class="nav-bar">
                    <p><i class="fas fa-mobile-alt"></i></p>
                    <p class="">Điện thoại</p>
                    </a>
                    <div
                    class="grid grid-cols-2 mt-0 w-full  border-2  absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                    <ul class="menu-item">
                        <li class="menu-item-title">Hãng sản xuất</li>
                        <div class="menu-item-info grid grid-cols-5 text-sm leading-8 ">
                        ${dataPhone.data.map((post) =>/*html*/`
                            <li><a href="/${post.cateName}/${post.id}">${post.cateName}</a></li>
                        `).join("")}
                        
                        </div>
                    </ul>
                    <div class="py-8">
                        <a href="">
                        <img class="w-4/6 float-right pr-8"
                            src="https://cdn.tgdd.vn/Files/2021/10/13/1390185/ip13-gbh-2_1280x720-800-resize.jpg">
                        </a>
                    </div>
                    </div>
                </li>
                <li class="group">
                    <a class="nav-bar">
                    <p><i class="fas fa-laptop"></i></p>
                    <p>Laptop</p>
                    </a>
                    <div
                    class="grid grid-cols-2 mt-0 border-2 w-full absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                    <ul class="menu-item">
                        <li class="menu-item-title">Hãng sản xuất</li>
                        <div class="menu-item-info grid grid-cols-4 text-sm leading-8 ">
                        ${dataLap.data.map((post) =>/*html*/`
                            <li><a href="/${post.cateName}/${post.id}">${post.cateName}</a></li>
                        `).join("")}
                        </div>
                    </ul>
                    <div class="py-8">
                        <a href="">
                        <img class="w-4/6 float-right pr-8"
                            src="https://macstores.vn/wp-content/uploads/2017/03/banner-macbook-air.jpg">
                        </a>
                    </div>
                    </div>
                </li>
                <li class="group ">
                    <a class="nav-bar">
                    <p><i class="fas fa-charging-station"></i></p>
                    <p>Phụ kiện</p>
                    </a>
                    <div
                    class="pb-10 mt-0 border-2 w-full absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                    <ul class="menu-item">
                        <div class="menu-item-info grid grid-cols-4 text-sm leading-8 font-bold">
                            ${dataAccessory.data.map((post) =>/*html*/`
                                <li><a href="/${post.cateName}/${post.id}">${post.cateName}</a></li>
                            `).join("")}
                        </div>
                    </ul>
                    </div>
                </li>
                <li class="group">
                    <a class="nav-bar">
                    <p><i class="fas fa-headphones-alt"></i></p>
                    <p>Âm thanh</p>
                    </a>
                    <div
                    class="pb-10 grid grid-cols-2 mt-0 border-2 w-full absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                    <ul class="menu-item">
                        <div class="menu-item-info grid grid-cols-4 text-sm leading-8 font-bold">
                            ${dataSound.data.map((post) =>/*html*/`
                                <li><a href="/${post.cateName}/${post.id}">${post.cateName}</a></li>
                            `).join("")}
                        </div>
                    </ul>
                    </div>
                </li>
                <li class="group">
                    <a class="nav-bar">
                    <p><i class="fas fa-sim-card"></i></p>
                    <p>Sim thẻ</p>
                    </a>
                </li>
                 
                <li class="group">
                    <a class="nav-bar">
                    <p><i class="fas fa-bolt"></i></p>
                    <p>Flash sale</p>
                    </a>
                    <div
                    class="pb-10 grid grid-cols-2 mt-0 border-2 w-full absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                    <ul class="menu-item">
                        <li class="menu-item-title uppercase"><a href="">ưu đãi hot</a></li>
                        <div class="menu-item-info text-sm leading-8">
                            ${dataSale.data.map((post) =>/*html*/`
                                    <li><a href="/${post.cateName}/${post.id}">${post.cateName}</a></li>
                                `).join("")}
                        </div>
                    </ul>
                    </div>
                </li>
            </ul>
            <div>
            </div>
        </div>
        `
    }
}
export default Navbar;