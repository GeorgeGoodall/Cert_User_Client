import axios from 'axios';

const postData = async(url = '', data={}) => {
    try {
        const response = await axios.post(url, data);
        return response;
    }
    catch (err){
        console.error(err);
        return {status: 403};
    }
}

const saveToken = (type, token) => {

}


export {postData};