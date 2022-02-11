import Footer from "../components/footer";
import Header from "../components/header";

const Detail = {
    print(){
        return /*html*/ `
        <div class="bg-[#0b8c5d]">
            ${Header.print()}
            <div class="detail w-[1200px] mx-auto mt-5 bg-white rounded-lg px-5 pt-5 pb-10">
                <div class="border-b pb-4 font-bold text-2xl">
                <p>iPhone 13 256GB</p>
                </div>
                <div class="grid grid-cols-2 gap-5 pt-5">
                <div>
                    <img class="w-[500px] mx-auto"
                    src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673230237572519_iphone-13-mini-xanh-1.jpg"
                    alt="">
                </div>
                <div>
                    <div class="price font-bold text-red-600 text-3xl">
                    27.000.000 <u>đ</u>
                    </div>
                    <div class="flex pt-4">
                    <label class="w-full text-center bg-[#f8f9fa] rounded-sm shadow-lg border border-white hover:bg-[#edeeef]">
                        <input type="radio" value="128gb" name="dungLuong" class="w-[15px]" checked><span>128GB</span>
                        <p>27.000.000 <u>đ</u></p>
                    </label>
                    <label class="rounded-sm w-full text-center bg-[#f8f9fa] shadow-lg border border-white hover:bg-[#edeeef]">
                        <input type="radio" value="128gb" name="dungLuong" class="w-[15px]"> <span>128GB</span>
                        <p>27.000.000 <u>đ</u></p>
                    </label>
                    <label class="rounded-sm w-full text-center bg-[#f8f9fa] shadow-lg border border-white hover:bg-[#edeeef]">
                        <input type="radio" value="128gb" name="dungLuong" class="w-[15px]"> <span>128GB</span>
                        <p>27.000.000 <u>đ</u></p>
                    </label>
                    </div>
                    <div class="mt-10 border-b border-[#ccc] pb-4">
                    <h2 class="uppercase text-xl font-bold text-red-600">hỗ trợ thu mua lại máy cũ giá cao lên đời máy mới</h2>
                    <h2 class="uppercase text-xl font-bold text-stone-700">khuyễn mãi:</h2>
                    <div class="leading-8">
                        <p><i class="fas fa-check text-[#008000]"></i> <span class="text-red-600 font-bold">Tặng 100.000 <u>đ</u></span> cho sinh viên( Yêu cầu mang thẻ sinh
                        viên ).</p>
                        <p><i class="fas fa-check text-[#008000]"></i> <span class="text-red-600 font-bold">Tặng 200.000 <u>đ</u></span> khi mua 2 sản phẩm trở lên.</p>
                        <p><i class="fas fa-check text-[#008000]"></i> <span class="text-red-600 font-bold">Tặng 100.000 <u>đ</u></span> khi là khách hàng đầu tiên.
                        </p>
                    </div>
                    </div>
                    <div class="mt-4">
                    <h2 class="uppercase font-bold text-xl text-stone-700">Bảo hành:</h2>
                    <p><span class="text-red-600 font-bold text-xl">*</span> Gói bảo hành mở rộng lên đến 24 tháng, hỗ trợ bảo
                        hành theo chính sách tại trị trường Việt Nam.</p>
                    <p><span class="text-red-600 font-bold text-xl">*</span> Phần mềm: Hỗ trợ trọn đời</p>
                    <p><span class="text-red-600 font-bold text-xl">*</span> Gói bảo hành phần cứng [<span class="text-blue-500">
                        <a href="">Xem tại đây</a> </span>]</p>
                    </div>
                    <div class="mt-5 grid grid-cols-2 gap-1 text-center">
                    <button class="h-14 bg-red-600 hover:bg-red-700 text-white rounded-sm leading-10 uppercase font-bold"><a
                        href="">Mua ngay</a></button>
                    <button class="h-14 bg-[#f28902] hover:bg-[#f29202f5] text-white rounded-sm leading-10 uppercase font-bold"><a
                        href="">Mua trả góp 0%</a></button>
                    </div>
                </div>
                </div>
                <div class="border-t border-[#ccc] mt-5">
                <div class="font-bold text-xl pt-5">Bình luận về iPhone 13 256GB</div>
                <form class="flex relative">
                    <textarea class="border border-[#ccc] rounded-sm w-full mt-5 h-20 pl-2 pr-40" placeholder="Nhập bình luận của bạn..."
                    name="" id=""></textarea>
                    <button class="text-white absolute top-10 right-3 bg-red-600 rounded-md h-10 px-5 hover:bg-red-700"><a href="">Gửi bình luận</a></button>
                </form>
                <div class="mt-5 flex">
                    <i class="fas fa-user-circle fa-3x text-[#8f8f8f]"></i>
                    <div class="pl-3">
                    <p class="font-bold">Nguyễn Văn A</p>
                    <p class="text-sm text-[#929292] pt-1 pb-2">12/2/2022</p>
                    <p>Hàng đẹp chất lượng</p>
                    </div>
                </div>
                </div>
            </div>
            ${Footer.print()}
        </div>
        `
    }
}
export default Detail;