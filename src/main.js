import Navigo from "navigo";
import DashBoard from "./admin/page/dashboard";
import addPhone from "./admin/page/navbar/addphone";
import listUser from "./admin/page/user/listuser";
import SignUpAdmin from "./admin/page/user/signup";
import ForgotPass from "./client/login/forgot";
import SignIn from "./client/login/signin";
import SignUp from "./client/login/signup";
import Detail from "./client/page/detail";
import Home from "./client/page/home";
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
    "signin": () => render(SignIn),
    "signup": () => render(SignUp),
    "forgotpass": () => render(ForgotPass),
    "detail": () => render(Detail),
    "/admin": () => render(DashBoard),
    "/admin/addphone": () => render(addPhone),
    "/admin/listUser": () => render(listUser),
    "/admin/signup": () => render(SignUpAdmin),
});
routes.resolve();