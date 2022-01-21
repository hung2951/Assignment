import Header from "../components/header";
import Footer from "../components/footer";
const Home = {
    print(){
        return /*html*/ `
            ${Header.print()}
            <main>
                <figure class="banner2">
                    <img class="w-full" src="https://uqoojcos5nobj.vcdn.cloud/uploads/2022/01/1200-x-100-t%E1%BA%BFt-1.gif" alt="">
                </figure>
            </main>
    
            ${Footer.print()}
        `
    }
}
export default Home;