import { getById } from "../../api/product";

const ProductCates = {
    async print(id) {
        const { data } = await getById(id)
        console.log(data)
        return /*html*/`
            ${data.products.map(item =>/*html*/`
                ${item.name}
            `)}
        `
    }
}

export default ProductCates;