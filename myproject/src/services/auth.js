import axios from "axios";
import { API } from "../config/axios";

export const RegisterCall = async (params) => {

    const { data } = await API.post(`${import.meta.env.VITE_API_KEY}/site/register`, params);

    return data;
};


export const LoginCall = async (params) => {
    let { data } = await API.post(
        `/${import.meta.env.VITE_API_KEY}/login`,
        params
    );
    return data;
};

export const ProfileCall = async () => {
    let { data } = await API.get(
        `/${import.meta.env.VITE_API_KEY}/profile`
    );
    return data;
};
