import Navbar from "./navbar";

const Header = {
    print() {
        return /*html*/ `
        <header class="bg-[#0b8c5d] mb-5">
        <div class=" flex justify-between w-[1200px] m-auto mb-4 h-[90px]">
          <figure class="logo pt-3 ">
            <a href="/">
              <img src="http://static.ybox.vn/2020/2/0/1582473564897-Poly.png" alt="" width="120px">
            </a>
          </figure>
          <form action="" class="w-96 pt-5 flex">
            <input type="text" class="w-[90%] h-10 pl-2" placeholder="Tìm kiếm sản phẩm...">
            <input type="submit" value="Tìm kiếm" class="border-2 max-h-10 text-white px-3 hover:text-[#00483d]">
            <!-- <button class="h-9" type="submit"><a href="" class="border-2"><i class="fas fa-search text-white"></i></a></button>  -->
          </form>
          <div class="phone-sp flex mt-3 border-r-2 px-10 max-h-[60px]">
            <p><i class="fas fa-phone-alt text-white px-3 pt-5"></i></p>
            <div class="text-white">
              <p>Hotline hỗ trợ</p>
              <span><a href="#" class="text-xl">1900 999 111</a></span>
            </div>
          </div>
          <div class="border-r-2 mt-3 pr-12 max-h-[60px] text-white">
            <a href="/signin">
              <p class="text-center"><i class="fas fa-user-circle fa-2x"></i></p>
              <p class="hover:text-[#00483d] duration-300">Đăng nhập</p>
            </a>
          </div>
          <div class="group relative pt-5 text-white pr-14 mx-5">
            <a href="#">
              <p><i class="fas fa-cart-plus fa-2x"></i></p>
              <div
                class="absolute mt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all decoration-slate-500">
                <p class="bg-gray-100 rounded text-black h-10 menu-title mr-5 w-40 leading-10">Giỏ hàng của bạn</p>
              </div>
            </a>
          </div>
        </div>
        ${Navbar.print()}
    
      </header>
        `
    }
}
export default Header;