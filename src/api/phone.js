import instance from "./config";

export const addphone = (phone) => {
    const url = `/phones`;
    return instance.post(url, phone);
};
export const getAll = () => {
    const url = "/phones";
    return instance.get(url);
}