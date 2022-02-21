import Navigo from "navigo";
import addProduct from "./admin/page/product/addproduct";
import DashBoard from "./admin/page/dashboard";
import listUser from "./admin/page/user/listuser";
import SignUpAdmin from "./admin/page/user/signup";
import ForgotPass from "./client/login/forgot";
import SignIn from "./client/login/signin";
import SignUp from "./client/login/signup";
import Detail from "./client/page/detail";
import Home from "./client/page/home";
import listProduct from "./admin/page/product/listproduct";
import categories from "./admin/page/category/categorys";
import editProduct from "./admin/page/product/editproduct";
import Cart from "./client/page/cart";
import ProductCates from "./client/page/productCates";
import Search from "./client/page/search";
const routes = new Navigo("/", { linksSelector: "a" });
const render = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.print(id);
    if (content.afterRender) content.afterRender(id);
}
routes.on("/admin/*", () => { }, {
    before(done, match) {
        if (JSON.parse(localStorage.getItem('user'))) {
            const role = JSON.parse(localStorage.getItem('user')).role;
            if (role == 1) {
                done();
            } else {
                document.location.href = "/"
            }
        } else {
            document.location.href = "/"
        }
    }
})
routes.on({
    "/": () => render(Home),
    "/signin": () => render(SignIn),
    "/signup": () => render(SignUp),
    "/forgotpass": () => render(ForgotPass),
    "/detail/:id": ({ data }) => render(Detail, data.id),
    "/admin": () => render(DashBoard),
    "/admin/listUser": () => render(listUser),
    "/admin/signup": () => render(SignUpAdmin),
    "/admin/add-product": () => render(addProduct),
    "/admin/list-product": () => render(listProduct),
    "/admin/product/edit/:id": ({ data }) => render(editProduct, data.id),
    "/admin/category": () => render(categories),
    //giỏ hàng
    "/cart": () => render(Cart),
    //
    "/:name/:id": ({ data }) => render(ProductCates, data.id),
    //search
    "/search": ({ value }) => render(Search, value),
});
routes.resolve();