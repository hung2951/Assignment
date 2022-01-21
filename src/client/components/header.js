const Header = {
    print(){
        return /*html*/ `
            <header class="bg-red-700 flex justify-between px-[165px] mb-4 h-[90px] w-full">
                <figure class="logo pt-3 ">
                    <a href="/">
                    <img src="http://static.ybox.vn/2020/2/0/1582473564897-Poly.png" alt="" width="120px">
                    </a>
                </figure>
                <form action="" class="w-96 pt-5 flex">
                    <input type="text" class="w-[90%] h-10 pl-2" placeholder="Tìm kiếm sản phẩm...">
                    <input type="submit" value="Tìm kiếm" class="border-2 max-h-10 text-white px-3 hover:text-red-200">
                    <!-- <button class="h-9" type="submit"><a href="" class="border-2"><i class="fas fa-search text-white"></i></a></button>  -->
                </form>
                <div class="phone-sp flex mt-3 border-r-2 px-10 max-h-[60px]">
                    <p><i class="fas fa-phone-alt text-white px-3 pt-5"></i></p>
                    <div class="text-white">
                    <p>Hotline hỗ trợ</p>
                    <span><a href="#" class="text-xl">1900 999 111</a></span>
                    </div>
                </div>
                <div class="sign-in border-r-2 mt-3 pr-12 max-h-[60px] text-white">
                    <a href="/signin">
                        <p class="text-center"><i class="fas fa-user-circle fa-2x"></i></p>
                        <p class="hover:text-red-300 duration-300">Đăng nhập</p>
                    </a>
                </div>
                <div class="cart pt-5 text-white pr-12 mx-5">
                    <a href="#"><i class="fas fa-cart-plus fa-2x"></i></a>
                </div>
        </header>
        `
    }
}
export default Header;