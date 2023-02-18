import axios from 'axios';

const URL = 'http://192.168.0.77:8080';

export function getMapsData(token: string) {
    if (token) {
        return axios.get(URL + '/api/v1/login/token', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + token,
            },
        });
    }

    // const formData = new FormData();
    // formData.append('username', data.username);
    // formData.append('password', data.password);
    // return axios.post(URL + '/api/v1/login/token', formData, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //     },
    // });
}
