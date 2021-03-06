import { signup } from "../../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const SignUp = {
  async print() {
    return /*html*/`
        <div class="bg-[url('https://stockdep.net/files/images/31496568.jpg')]">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
          <!-- Replace with your content -->
          <div class="px-4 pt-6 sm:px-0">
            <div class="min-h-full grid grid-cols-2 px-4 sm:px-6 lg:px-8">
              <div>
                <img src="https://picsum.photos/700/800">
              </div>
              <div class="w-full space-y-8 bg-white bg-opacity-50">
                <form class="max-w-sm space-y-6 mx-auto pt-10 " id="formSignUp">
                  <div class="rounded-md shadow-sm -space-y-px">
                  <div class="text-center text-xl font-bold">
                    Tạo tài khoản
                  </div>
                  <div class="">
                    <label for="username" class="pl-1 pb-5 font-bold text-[#1a1a1a]">Họ tên:</label>
                    <input id="username" name="username" type="text" required
                      class="border border-[#ccc] block w-full pl-2 h-10 rounded-sm my-2" placeholder="Họ và tên">
                  </div>
                  <div>
                    <label for="email" class="pl-1 pb-5 font-bold text-[#1a1a1a]">Địa chỉ email:</label>
                    <input id="email" name="email" type="email" required
                      class="border border-[#ccc] block w-full pl-2 h-10 rounded-sm my-2" placeholder="Địa chỉ email">
                  </div>
                  <div>
                    <label for="password" class="pl-1 pb-5 font-bold text-[#1a1a1a]">Mật khẩu:</label>
                    <input id="password" name="password" type="password" required
                      class="border border-[#ccc] block w-full pl-2 h-10 rounded-sm my-2" placeholder="Mật khẩu">
                  </div>
                  <div>
                    <label for="rePassword" class="pl-1 pb-5 font-bold text-[#1a1a1a]">Nhập lại mật khẩu:</label>
                    <input id="rePassword" name="rePassword" type="password" required
                      class="border border-[#ccc] block w-full pl-2 h-10 rounded-sm my-2" placeholder="Nhập lại mật khẩu">
                  </div>
                </div>
                <div class="hidden justify-evenly ">
                  <label><input type="radio" id="role" name="role" value="0" checked> Khách hàng</label>
                  <label> <input type="radio" id="role" name="role" value="1" > Quản trị</label>
                </div>

                  <div>
                    <p id="checkUser" class="text-red-600 mb-5 mt-0"></p> 
                      <button class="mt-5 bg-[#111b27] text-white w-40 h-10 border-4 bg-opacity-80 border-white">
                        Đăng ký
                      </button>
                   <div class="text-center pt-5">
                      <p>Bạn đã có tài khoản?<a href="/signin" class="text-[#075549]"> Đăng nhập</a></p>
                  </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- /End replace -->
          </div>
        </div>
            
          </form>
        </div>
        `
  },
  afterRender() {
    const formSignUp = document.querySelector("#formSignUp");
    formSignUp.addEventListener("submit", async (e) => {
      e.preventDefault();
      // call api
      try {
        const { data } = await signup({
          username: document.querySelector("#username").value,
          email: document.querySelector("#email").value,
          password: document.querySelector("#password").value,
          role: document.querySelector("#role").value,
        })
        if (data) {
          toastr.success("Đăng ký thành công");
          setTimeout(function () {
            window.location.href = "/signin";
          }, 1000)
        }
      } catch (error) {
        toastr.error("Đăng ký thất bại!");
        document.querySelector("#checkUser").innerHTML = "Tài khoản đã tồn tại"
      }
    });
  }
}
export default SignUp;