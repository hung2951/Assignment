import instance from "./config";
//điện thoại
export const addCates = (phone) => {
    const url = `/productCates`;
    return instance.post(url, phone);
};
export const getCates = (id) => {
    const url = `/productCates/${id}`;
    return instance.get(url)
}
export const getCatesType = (catename) => {
    const url = `/productCates?cateType=${catename}`;
    return instance.get(url)
}
export const getAllCates = () => {
    const url = "/productCates";
    return instance.get(url);
}
export const removeCates = (id) => {
    const url = `/productCates/${id}`;
    return instance.delete(url)
}