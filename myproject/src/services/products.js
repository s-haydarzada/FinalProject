import axios from "axios";
import { API } from "../config/axios";

export const BrandsCall = async (params) => {
    let { data } = await API.post(
        `/${import.meta.env.VITE_API_KEY}/dashboard/brands`,
        params
    );
    return data;
};

export const BrandsGetAll = async () => {
    let { data } = await API.get(`${import.meta.env.VITE_API_KEY}/dashboard/brands`);
    return data;
}

export const BrandsUpdate = async (id, params) => {
    let { data } = await API.put(
        `/${import.meta.env.VITE_API_KEY}/dashboard/brands/${id}`, params,
        params
    );
    return data;
};

export const DeleteBrands = async (id) => {
    let { data } = await API.delete(`${import.meta.env.VITE_API_KEY}/dashboard/brands/${id}`);
    return data;
}

export const ProductsCall = async (params) => {
    let { data } = await API.post(
        `/${import.meta.env.VITE_API_KEY}/dashboard/products`,
        params
    );
    return data;
};

export const ProductsGetAll = async () => {
    let { data } = await API.get(`${import.meta.env.VITE_API_KEY}/site/products`);
    return data;

}

export const AddNewBasket = async (params) => {
    let { data } = await API.post(`${import.meta.env.VITE_API_KEY}/site/basket`, params);
    return data;
}

export const DashboardProductsGetAll = async () => {
    let { data } = await API.get(`${import.meta.env.VITE_API_KEY}/dashboard/products`);
    return data;

}

export const PaginationAll = async (page, perPage) => {
    let { data } = await API.get(`${import.meta.env.VITE_API_KEY}/dashboard/products?page=${page}&perPage=${perPage}`);
    return data;
}

export const DeleteProduct = async (id) => {
let {data}=await API.delete(`${import.meta.env.VITE_API_KEY}/dashboard/products/${id}`);
return data;
}


export const ProductsUpdate = async (id, params) => {
    let { data } = await API.put(
        `/${import.meta.env.VITE_API_KEY}/dashboard/products/${id}`, params,
        params
    );
    return data;
};

