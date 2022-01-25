import Header from "../components/header";
import Footer from "../components/footer";
const Home = {
    print(){
        return /*html*/ `
        <div class="bg-[#0b8c5d]">
            ${Header.print()}
            <main class="w-[1200px] mx-auto ">
            <div class="banner">
              <div class="">
                <img class="w-full"
                  src="https://images.fpt.shop/unsafe/fit-in/1190x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/8/637772392779513782_F-H6_1190x300.png">
              </div>
            </div>
            <div class="product">
              <div class="apple ">
                <div class="apple-title"><i class="fab fa-apple"></i>
                  Apple</div>
                <div class="grid grid-cols-4 gap-5 mb-10 ">
                  <div class="group apple-product-item w-fit rounded-lg bg-white text-center">
                    <div class="apple-product-item-img py-5">
                      <a href="">
                        <img class="w-[300px] mx-auto"
                          src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png">
                      </a>
                    </div>
                    <div class="apple-product-item-title">
                      <a href="">
                        <p>Apple iPhone 13 Pro Max - Chính hãng VN/A</p>
                      </a>
                      <span>26.750.000 <u>đ</u></span>
                    </div>
                    <div
                      class="bg-red-600 text-white mt-5 rounded-b-lg h-10 leading-10 opacity-0 group-hover:mt-5 group-hover:opacity-100 transition-all">
                      <a href=""><i class="fas fa-cart-plus"></i><span> Thêm vào giỏ hàng</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <figure class="banner2">
              <img class="w-full" src="https://uqoojcos5nobj.vcdn.cloud/uploads/2022/01/1200-x-100-t%E1%BA%BFt-1.gif" alt="">
            </figure>
            <div class="product-sale bg-white rounded-lg">
              <div class="product-sale-title text-black font-bold ml-5 mt-10 py-5 text-xl uppercase">
                <p><i class="fab fa-gripfire"></i> Sale</p>
              </div>
              <div class="grid grid-cols-4 mb-10 rounded-lg ">
                <div class="group apple-product-item text-center border-2 shadow-xl mx-5 mb-5 rounded-lg">
                  <div class="apple-product-item-img py-5">
                    <a href="">
                      <img class="w-[450px] mx-auto"
                        src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png">
                    </a>
                  </div>
                  <div class="product-sale-item-title pb-5">
                    <a href="">
                      <p>Apple iPhone 13 Pro Max - Chính hãng VN/A</p>
                    </a>
                    <div class="flex justify-center">
                      <p class="text-red-600 font-bold text-xl">26.750.000 <u>đ</u></p>
                      <p class="text-gray-500 font-bold text-sm line-through">27.000.000 <u>đ</u></p>
                    </div>
                  </div>
                  
                </div>
                <div class="group apple-product-item text-center border-2 shadow-xl mx-5 mb-5 rounded-lg">
                  <div class="apple-product-item-img py-5 relative">
                    <a href="">
                      <img class="w-[450px] mx-auto"
                        src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png">
                    </a>
                  </div>
                  <div class="product-sale-item-title pb-5">
                    <a href="">
                      <p>Apple iPhone 13 Pro Max - Chính hãng VN/A</p>
                    </a>
                    <div class="flex justify-center">
                      <p class="text-red-600 font-bold text-xl">26.750.000 <u>đ</u></p>
                      <p class="text-gray-500 font-bold text-sm line-through">27.000.000 <u>đ</u></p>
                    </div>
                  </div>
                  
                </div>
                <div class="group apple-product-item text-center border-2 shadow-xl mx-5 mb-5 rounded-lg">
                  <div class="apple-product-item-img py-5 relative">
                    <a href="">
                      <img class="w-[450px] mx-auto"
                        src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png">
                    </a>
                  </div>
                  <div class="product-sale-item-title pb-5">
                    <a href="">
                      <p>Apple iPhone 13 Pro Max - Chính hãng VN/A</p>
                    </a>
                    <div class="flex justify-center">
                      <p class="text-red-600 font-bold text-xl">26.750.000 <u>đ</u></p>
                      <p class="text-gray-500 font-bold text-sm line-through">27.000.000 <u>đ</u></p>
                    </div>
                  </div>
                  
                </div>
                <div class="group apple-product-item text-center border-2 shadow-xl mx-5 mb-5 rounded-lg">
                  <div class="apple-product-item-img py-5 relative">
                    <a href="">
                      <img class="w-[450px] mx-auto"
                        src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png">
                    </a>
                  </div>
                  <div class="product-sale-item-title pb-5">
                    <a href="">
                      <p>Apple iPhone 13 Pro Max - Chính hãng VN/A</p>
                    </a>
                    <div class="flex justify-center">
                      <p class="text-red-600 font-bold text-xl">26.750.000 <u>đ</u></p>
                      <p class="text-gray-500 font-bold text-sm line-through">27.000.000 <u>đ</u></p>
                    </div>
                  </div>
                  
                </div>
                <div class="group apple-product-item text-center border-2 shadow-xl mx-5 mb-5 rounded-lg">
                  <div class="apple-product-item-img py-5 relative">
                    <a href="">
                      <img class="w-[450px] mx-auto"
                        src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png">
                    </a>
                  </div>
                  <div class="product-sale-item-title pb-5">
                    <a href="">
                      <p>Apple iPhone 13 Pro Max - Chính hãng VN/A</p>
                    </a>
                    <div class="flex justify-center">
                      <p class="text-red-600 font-bold text-xl">26.750.000 <u>đ</u></p>
                      <p class="text-gray-500 font-bold text-sm line-through">27.000.000 <u>đ</u></p>
                    </div>
                  </div>
                  
                </div>
                <div class="group apple-product-item text-center border-2 shadow-xl mx-5 mb-5 rounded-lg">
                  <div class="apple-product-item-img py-5 relative">
                    <a href="">
                      <img class="w-[450px] mx-auto"
                        src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png">
                    </a>
                  </div>
                  <div class="product-sale-item-title pb-5">
                    <a href="">
                      <p>Apple iPhone 13 Pro Max - Chính hãng VN/A</p>
                    </a>
                    <div class="flex justify-center">
                      <p class="text-red-600 font-bold text-xl">26.750.000 <u>đ</u></p>
                      <p class="text-gray-500 font-bold text-sm line-through">27.000.000 <u>đ</u></p>
                    </div>
                  </div>
                  
                </div>
        
                
              </div>
            </div>
           
          </main>
        
            ${Footer.print()}
            </div>
        `
    }
}
export default Home;