import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: object) => axios.post(url, body).then(responseBody),
    put: (url: string, body: object) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody),
};

const Catalog = {
    list: () => requests.get("/products"),
    details: (id: string) => requests.get(`/products/${id}`),
};

const TestError = {
    get400Error: () => requests.get("/buggy/bad-request"),
    get401Error: () => requests.get("/buggy/unauthorized"),
    get404Error: () => requests.get("/buggy/not-found"),
    get500Error: () => requests.get("/buggy/server-error"),
    getValidationError: () => requests.get("/buggy/validation-error"),
};

const agent = {
    Catalog,
    TestError,
};

export default agent;