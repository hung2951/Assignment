const Apple={
    print(){
        return /*html*/ `
            <div class="apple ">
                <div class="apple-title"><i class="fab fa-apple"></i>
                  Apple</div>
                <div class="grid grid-cols-4 gap-5 mb-10 ">
                  <div class="group apple-product-item w-fit rounded-lg bg-white text-center">
                    <div class="apple-product-item-img py-5">
                      <a href="/detail">
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
    `
    }
}
export default Apple;