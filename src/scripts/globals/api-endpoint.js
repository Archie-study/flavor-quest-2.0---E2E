import CONFIG from './config';

const API_ENDPOINT = {
    HOME: `${CONFIG.BASE_URL}list`,
    RESTO: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
