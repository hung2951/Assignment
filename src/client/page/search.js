import { searchProduct } from "../../api/product"

const Search = {
    async print({ value }) {
        const { data } = await searchProduct(value);
        console.log(data)
        return /*html*/ `
        
        `
    }
}

export default Search;