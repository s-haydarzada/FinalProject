import axios from "axios";
import { API } from "../../config/axios";

export const RegisterCall = async (data) => {

    const res = await API.post(`${import.meta.env.VITE_API_KEY}/site/register`, data);

  return res;
};

// export const LoginCall = async (data) => {
//   let res = await API.post(
//     `/${import.meta.env.VITE_API_KEY}/site/register`,
//     data
//   );
//   return res;
// };
