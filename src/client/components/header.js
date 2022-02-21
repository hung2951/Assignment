import Logo from "./logo";
import Navbar from "./navbar";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { reRender } from "../../utils/reRender";
const Header = {
  async print() {
    return /*html*/ `
        
        <div class="bg-[#00483d] rounded-b-lg flex justify-evenly w-[1200px] m-auto mb-4 h-[90px]">
          ${Logo.print()}
          <form class="w-96 pt-5 flex" id="formSearch" action="/search">
            <input type="text" name="value" id="querySearch" class="w-[90%] h-10 pl-2" placeholder="Tìm kiếm sản phẩm...">
            <input type="submit" id="btnSearch" value="Tìm kiếm" class="border-2 max-h-10 text-white px-3 hover:text-[#39ebd07a]">
            <!-- <button class="h-9"><a class="border-2"><i class="fas fa-search text-white"></i></a></button>  -->
          </form>
          <div class="phone-sp flex mt-3 border-r-2 px-10 max-h-[60px]">
            <p><i class="fas fa-phone-alt text-white px-3 pt-5"></i></p>
            <div class="text-white">
              <p>Hotline hỗ trợ</p>
              <span><a href="#" class="text-xl">1900 999 111</a></span>
            </div>
          </div>
          <div class=" mt-3 text-white">
            <a href="/cart">
              <p><i class="fas fa-cart-plus fa-2x pt-2 mx-auto"></i></p>
              <p class="text-sm text-center pt-1">Giỏ hàng<p/>
            </a>
          </div>
          <div class="border-r-2 max-h-[60px] max-w-0 mt-3 mx-0"></div>
          <div class="pt-3 text-white w-24 relative ">
            ${localStorage.getItem('user') ?/*html*/`
                <div class="group">
                  
                  ${JSON.parse(localStorage.getItem('user')).role == 1 ?/*html*/`
                   <a href="/admin">
                    <p class="text-center"><i class="fas fa-user-circle fa-2x"></i></p>
                    <p class="capitalize text-center" id="username"></p>      
                  </a>
                  <button class="absolute mt-5 text-center rounded-sm h-8 leading-8 hover:text-[#083a32] w-full group-hover:mt-0 transition-all opacity-0 text-black group-hover:opacity-100 bg-white" id="logout">
                    Đăng xuất
                  </button>
                `:/*html*/`
                    <a href="">
                    <p class="text-center"><i class="fas fa-user-circle fa-2x"></i></p>
                    <p class="capitalize text-center" id="username"></p>      
                    </a>
                    <button class="absolute mt-5 text-center rounded-sm h-8 leading-8 hover:text-[#083a32] w-full group-hover:mt-0 transition-all opacity-0 text-black group-hover:opacity-100 bg-white" id="logout">
                      Đăng xuất
                    </button> 
                `}                    
                  
                </div>
                
              `:/*html*/ `
                <a href="/signin">
                  <p class="text-center"><i class="fas fa-user-circle fa-2x"></i></p>
                  <p class="text-center hover:text-[#39ebd07a] duration-300">Đăng nhập</p>
                </a>
              `}
          </div>
        </div>
        ${await Navbar.print()}
        `
  },
  afterRender() {
    const username = document.querySelector("#username");
    const logout = document.querySelector("#logout");
    if (localStorage.getItem('user')) {
      username.innerHTML = JSON.parse(localStorage.getItem('user')).username;
      logout.addEventListener("click", () => {

        toastr.success("Đã đăng xuất");
        localStorage.removeItem("user");
        reRender(Header, "header")
      })
    }
  }
}
export default Header;