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
        <div class="mb-5">
          <ul
            class="mx-auto flex bg-[#00483d] w-[1200px] justify-around items-center relative rounded-lg pt-1 text-white h-14">
            <li class="group">
              <a href="" class="nav-bar">
                <p><i class="fas fa-mobile-alt"></i></p>
                <p class="">Điện thoại</p>
              </a>
              <div
                class="grid grid-cols-2 mt-0 w-full  border-2  absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                <ul class="menu-item">
                  <li class="menu-item-title">Hãng sản xuất</li>
                  <div class="menu-item-info grid grid-cols-5 text-sm leading-8 ">
                    <li><a href="">Sam sung</a></li>
                    <li><a href="">Apple</a></li>
                    <li><a href="">Xiaomi</a></li>
                    <li><a href="">Oppo</a></li>
                    <li><a href="">Nokia</a></li>
                    <li><a href="">Vivo</a></li>
                    <li><a href="">Bphone</a></li>
                    <li><a href="">Realme</a></li>
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
              <a href="" class="nav-bar">
                <p><i class="fas fa-laptop"></i></p>
                <p>Laptop</p>
              </a>
                <div
                class="grid grid-cols-2 mt-0 border-2 w-full absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                    <ul class="menu-item">
                    <li class="menu-item-title">Hãng sản xuất</li>
                    <div class="menu-item-info grid grid-cols-4 text-sm leading-8 ">
                        <li><a href="">Asus</a></li>
                        <li><a href="">Macbook</a></li>
                        <li><a href="">Hp</a></li>
                        <li><a href="">Dell</a></li>
                        <li><a href="">Lenovo</a></li>
                        <li><a href="">Imac 2021</a></li>
                        <li><a href="">Microsoft</a></li>
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
              <a href="" class="nav-bar">
                <p><i class="fas fa-charging-station"></i></p>
                <p>Phụ kiện</p>
              </a>
              <div
                class="pb-10 mt-0 border-2 w-full absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                <ul class="menu-item">
                  <div class="menu-item-info grid grid-cols-4 text-sm leading-8 font-bold">
                    <li><a href="">Phụ kiện apple</a></li>
                    <li><a href="">Phụ kiện máy tính</a></li>
                    <li><a href="">Sạc dự phòng</a></li>
                    <li><a href="">Củ sạc, dây cáp</a></li>
                    <li><a href="">Loa</a></li>
                    <li><a href="">Túi sách</a></li>
                    <li><a href="">Loa</a></li>
                  </div>
                </ul>
              </div>
            </li>
            <li class="group">
              <a href="" class="nav-bar">
                <p><i class="fas fa-headphones-alt"></i></p>
                <p>Âm thanh</p>
              </a>
              <div class="pb-10 grid grid-cols-2 mt-0 border-2 w-full absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                    <ul class="menu-item">
                        <li class="menu-item-title"><a href="">Loa</a></li>
                        <div class="menu-item-info grid grid-cols-3 text-sm leading-8 border-r-2">
                            <li><a href="">Energizer</a></li>
                            <li><a href="">Huawei</a></li>
                            <li><a href="">LG</a></li>
                            <li><a href="">Marshall</a></li>
                            <li><a href="">SoundPEATS</a></li>
                            <li><a href="">Tekin</a></li>
                            <li><a href="">Sony</a></li>
                            <li><a href="">Samsung</a></li>
                            <li><a href="">Apple</a></li>
                        </div>
                    </ul>
                    <ul class="menu-item">
                        <li class="menu-item-title"><a href="">Tai nghe</a></li>
                        <div class="menu-item-info grid grid-cols-3 text-sm leading-8 ">
                            <li><a href="">Sony</a></li>
                            <li><a href="">MJBLacbook</a></li>
                            <li><a href="">AKG</a></li>
                            <li><a href="">realme</a></li>
                            <li><a href="">Plantronics</a></li>
                            <li><a href="">Samsung</a></li>
                            <li><a href="">Pioneer</a></li>
                            <li><a href="">OPPO</a></li>
                            <li><a href="">Huawei</a></li>
                            <li><a href="">PHILIPS</a></li>
                        </div>
                    </ul>
                </div>
            </li>
            <li class="group">
              <a href="" class="nav-bar">
                <p><i class="fas fa-sim-card"></i></p>
                <p>Sim thẻ</p>
              </a>
            </li>
            <li class="group">
              <a href="" class="nav-bar">
                <p><i class="fas fa-tools"></i></p>
                <p>Sửa chữa</p>
              </a>
            </li>
            <li class="group">
              <a href="" class="nav-bar">
                <p><i class="fas fa-bolt"></i></p>
                <p>Flash sale</p>
              </a>
              <div class="pb-10 grid grid-cols-2 mt-0 border-2 w-full absolute left-0 rounded-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500">
                    <ul class="menu-item">
                        <li class="menu-item-title uppercase"><a href="">ưu đãi hot</a></li>
                        <div class="menu-item-info text-sm leading-8">
                            <li><a href="">Khuyến mại Apple</a></li>
                            <li><a href="">Khuyến mại cuối tuần</a></li>
                            <li><a href="">Khuyến mại đồng hồ</a></li>
                            <li><a href="">Khuyến mại Laptop</a></li>
                            <li><a href="">Khuyến mại LG</a></li>
                            <li><a href="">Khuyến mại Sony</a></li>
                            <li><a href="">Lễ hội mua sắm Xiaomi</a></li>
                            <li><a href="">Khuyến mãi JBL, Harman Kardon</a></li>
                            <li><a href="">Top 5 tai nghe Bluetooth</a></li>
                        </div>
                    </ul>
                </div>
            </li>
          </ul>
          <div>
          </div>
        </div>
    
      </header>
        `
    }
}
export default Header;