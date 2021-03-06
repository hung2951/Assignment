const Footer ={
    print(){
        return /*html*/ `
            <div class="bg-white rounded-lg mt-5 flex justify-around mx-auto w-[1200px]">
                <div class="flex my-5">
                <p class="text-[#0b8d5d] "><i class="fas fa-check-double fa-3x"></i></p>
                <p class="block pl-4 text-sm">Sản phẩm <br><span class="font-bold text-xl uppercase">chính hãng</span></p>
                </div>
                <div class="flex my-5">
                <p class="text-[#0b8d5d] "><i class="fas fa-truck fa-3x"></i></p>
                <p class="block pl-4 text-sm">Miễn phí vận chuyển <br><span class="font-bold text-xl uppercase">toàn quốc</span></p>
                </div>
                <div class="flex my-5">
                <p class="text-[#0b8d5d] "><i class="fas fa-phone-alt fa-3x"></i></p>
                <p class="block pl-4 text-sm">Hotline hỗ trợ <br><span class="font-bold text-xl uppercase">1900.999.111</span></p>
                </div>
            </div>
            <footer class="bg-[#0b8c5d] ">
                <div class="flex px-10 bg-[#00483d] rounded-lg text-white mt-10 py-5 mx-auto w-[1200px]">
                    <div class="info-sp flex-1">
                    <h3>Thông tin hỗ trợ</h3>
                    <div id="border"></div>
                    <p><a href="">Chính sách bảo hành</a></p>
                    <p><a href="">Chính sách bảo hành iphone - ipad</a></p>
                    <p><a href="">Chính sách mua hàng online</a></p>
                    <p><a href="">Mua hàng trả góp</a></p>
                    <p><a href="">Chính sách bảo mật thông tin khách hàng</a></p>
                    </div>
                    <div class="info-ht flex-1">
                    <h3>Thông tin liên lạc</h3>
                    <div id="border"></div>
                    <div>
                        <p><a href="">Hotline bán hàng:</a></p>
                        <p id="phone"><a href="">0989 08 9832</a></p>
                        <p id="phone"><a href="">1900 927 328</a></p>
                    </div>
            
                    <a href="">
                        <p>Hotline bảo hành, kỹ thuật:</p>
                        <p id="phone"><a href="">1900 927 928</a></p>
                    </a>
                    <a href="">
                        <p>Hotline hỗ trợ phần mềm:</p>
                        <p id="phone"><a href="">1900 027 218</a></p>
                    </a>
                    <a href="">
                        <p>Hotline phản ánh chất lượng dịch vụ:</p>
                        <p id="phone" class="text-[#0b8c5d]"><a href="">1900 999 111</a></p>
                    </a>
                    </div>
                    <div class="address flex-1">
                    <h3>Hệ thống cửa hàng</h3>
                    <div id="border"></div>
                    <p><i class="fas fa-map-marker-alt"></i><span> 111 Trịnh Văn Bô, Quận Nam Từ Liêm, Hà Nội</span></p>
                    <p><i class="fas fa-map-marker-alt"></i><span> 123 Trần Đăng Ninh, Cầu Giấy, Hà Nội:</span></p>
                    </div>
                    <div class="pay flex-1">
                    <h3>Phương thức thanh toán</h3>
                    <div id="border"></div>
                    <img src="https://hcm.clickbuy.com.vn/assets/home/image_visa.svg" alt="">
                    <img class="rounded-xl" src="https://hcm.clickbuy.com.vn/assets/home/image_bank.jpg" alt="">
                    </div>
                </div>
        </footer>
        `
    }
}
export default Footer;