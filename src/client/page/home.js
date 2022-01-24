import Header from "../components/header";
import Footer from "../components/footer";
const Home = {
    print(){
        return /*html*/ `
        <div class="bg-[#0b8c5d]">
            ${Header.print()}
            
        
            ${Footer.print()}
            </div>
        `
    }
}
export default Home;