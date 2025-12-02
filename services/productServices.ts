import apiClient from "./apiClient";


export const getProducts = async () => {
    return await apiClient('/products', {
        method: 'GET',
    });
}
export default getProducts;