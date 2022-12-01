import axios from "axios";

const apiService = async ({ url, method = 'get', params, baseURL }) => {
    try {
        const res = await axios({
            url,
            method,
            baseURL,
            params,
        });
        if (!res) {
            return { status: 444 };
        }
        return res;
        
    } catch (error) {
        console.log(error);
        return { status: 404 }
    }
}

export default apiService;