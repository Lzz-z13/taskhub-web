import axios from "axios";

const api = axios.create({
  baseURL: "http://10.89.240.40:5000/api/v1",
  headers: {
    accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    if(response.data.userDelete){
        localStorage.removeItem("token");
        localStorage.setItem("refreshToken", response.data.message);
        window.location.href = "/"
    }
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401 && error.response.data.auth === false) {
        localStorage.removeItem("token");
        localStorage.setItem("refreshToken", error.response.data.message);
        window.location.href = "/"
      } else if (
        error.response.status === 403 &&
        error.response.data.auth === false
      ) {
        localStorage.removeItem("token");
        localStorage.setItem("refreshToken", error.response.data.message);
        window.location.href = "/"
      }
    }
    return Promise.reject(error);
  },
);

const sheets = {
  postLogin: (user) => api.post("/login", user),
  postUser: (user) => api.post("/user", user),
  getUsers: () => api.get("/user"),
};
export default sheets;
