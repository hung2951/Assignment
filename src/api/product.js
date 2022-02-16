import instance from "./config";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
}
export const getByHot = () => {
    const url = "/products?hot=1";
    return instance.get(url);
}
export const search = (value) => {
    const url = `/products/?q=${value}`;
    return instance.get(url)
}
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url = `/products`;
    return instance.post(url, post);
}
export const remove = (id) => {
    const url = `products/${id}`;
    return instance.delete(url);
}
export const update = (product) => {
    const url = `products/${product.id}`;
    return instance.put(url, product);
}
export const getById = (id) => {
    const url = `productCates/${id}?_embed=products`;
    return instance.get(url);
}