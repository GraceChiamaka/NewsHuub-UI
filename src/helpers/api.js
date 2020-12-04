import axios from 'axios';
import { loadState } from '../store/LocalStorage';

const baseUrl = 'https://newsapi.org/v2';

export const getToken = () => {
    return loadState();
};
const apiKey = process.env.REACT_APP_NEWS_API_KEY;

export const makeApiCall = (axiosConfigObj) => {
    const config = {
        ...axiosConfigObj,
        baseURL: baseUrl,
    };
    return new Promise((resolve, reject) => {
        return axios(config)
            .then((res) => {
                if (res.status !== 200) {
                    return reject(res.data);
                }
                return resolve(res.data);
            })
            .catch((err) => {
                const { response, request, message } = err;
                const error = response
                    ? response.message
                    : request
                    ? 'Network error, please try again later'
                    : message;
                return reject(error);
            });
    });
};

export const allNewsSource = () => {
    return new Promise((resolve, reject) => {
        try {
            const sourcesList = makeApiCall({
                url: `/sources?apiKey=${apiKey}`,
                method: 'get',
            });
            return resolve(sourcesList);
        } catch (error) {
            return reject(error);
        }
    });
};

export const allHeadlines = () => {
    return new Promise((resolve, reject) => {
        try {
            const headlines = makeApiCall({
                url: `/top-headlines?country=us&apiKey=${apiKey}`,
                method: 'get',
            });
            return resolve(headlines);
        } catch (error) {
            return reject(error);
        }
    });
};
