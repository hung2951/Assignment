import Header from "../components/header";
import Footer from "../components/footer";
import Apple from "../components/product-apple";
import Accessory from "../components/product-accessory";
import Hot from "../components/product-hot";
const Home = {
  async print() {
    return /*html*/ `
      <div class="bg-[#0b8c5d]">
        <header class="mb-5">
          ${await Header.print()}
        </header>
        <main class="w-[1200px] mx-auto ">
          <div class="banner">
            <div class="">
              <img class="w-full"
                src="https://images.fpt.shop/unsafe/fit-in/1190x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/8/637772392779513782_F-H6_1190x300.png">
            </div>
          </div>
          <div class="product-sale bg-white rounded-lg">
            ${await Hot.print()}
          </div>
                           
          <figure class="banner2">
            <img class="w-full" src="https://uqoojcos5nobj.vcdn.cloud/uploads/2022/01/1200-x-100-t%E1%BA%BFt-1.gif" alt="">
          </figure>
          ${await Apple.print()} 
          ${Accessory.print()}         
        </main>
        ${Footer.print()}
      </div>
        `
  },
  afterRender() {
    Header.afterRender();
    Apple.afterRender();
  }
}
export default Home;