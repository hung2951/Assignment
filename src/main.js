import Navigo from "navigo";
import ForgotPass from "./client/login/forgot";
import SignIn from "./client/login/signin";
import SignUp from "./client/login/signup";
import Home from "./client/page/home";
const routes = new Navigo("/", { linksSelector: "a" });
const Client_render = (content) => {
    document.querySelector("#app").innerHTML = content.print();
}
const Login = (content) => {
    document.querySelector("#app").innerHTML = content.print();
}
routes.on({
    "/": () => Client_render(Home),
    "signin" : () => Login(SignIn),
    "signup" : () => Login(SignUp),
    "forgotpass" : () => Login(ForgotPass),
});
routes.resolve();