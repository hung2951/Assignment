import { signin } from "../../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const SignIn = {
  async print() {
    return /*html*/ `
            <div class="bg-[url('https://stockdep.net/files/images/31496568.jpg')]">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
          <!-- Replace with your content -->
          <div class="px-4 pt-6 sm:px-0">
            <div class="min-h-full grid grid-cols-2 px-4 sm:px-6 lg:px-8">
              <div>
                <img src="https://picsum.photos/700/800">
              </div>
              <div class="w-full space-y-8 bg-white bg-opacity-50">
                <form class="max-w-sm space-y-6 mx-auto pt-20 " id="formSignIn">
                  <div class="rounded-md shadow-sm -space-y-px">
                  <div class="text-center text-xl font-bold">
                    Đăng nhập
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
                </div>  
                <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-[#075549] focus:ring-[#075549] border-gray-300 rounded">
                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                    Nhớ mật khẩu
                    </label>
                </div>
        
                <div class="text-sm">
                    <a href="forgotpass" class="font-medium text-[#092521] hover:text-[#075549]">
                    Quên mật khẩu?
                    </a>
                </div>
                </div>             
                  <div>
                    <p id="checkUser" class="text-red-600 mb-5 mt-0"></p> 
                      <button class="mt-5 bg-[#111b27] text-white w-40 h-10 border-4 bg-opacity-80 border-white">
                        Đăng nhập
                      </button>
                   <div class="text-center pt-5">
                      <p>Bạn chưa có tài khoản?<a href="/signup" class="text-[#075549]"> Đăng ký</a></p>
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
    const formSignIn = document.querySelector("#formSignIn");
    formSignIn.addEventListener("submit", async (e) => {
      e.preventDefault();
      // call api
      try {
        const { data } = await signin({
          email: document.querySelector("#email").value,
          password: document.querySelector("#password").value,
        })

        if (data) {
          toastr.success("Đăng nhập thành công");
          localStorage.setItem('user', JSON.stringify(data.user));
          setTimeout(function () {
            if (data.user.role == 1) {
              window.location.href = "/admin";
            } else {
              window.location.href = "/";
            }
          }, 1000)
        }
      } catch (error) {
        toastr.error("Đăng nhập thất bại!");
        document.querySelector("#checkUser").innerHTML = "Tài khoản hoặc mật khẩu không chính xác"
      }

    });
  }
}
export default SignIn;