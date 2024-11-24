import http from "../../interceptor";

export const signInAPI = async (user) => {
  try {
    const res = await http.post("/Sign/Login", user);
    return res;
  } catch (error) {
    return false;
  }
};