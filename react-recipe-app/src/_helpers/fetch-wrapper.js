
const get = (url) => {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(url, requestOptions).then(handleResponse)
}

const handleResponse = (response) => {
    console.log(response);

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(data);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    })
}

export const fetchWrapper = {
    get
};