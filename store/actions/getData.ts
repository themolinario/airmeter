import axios from "axios";

const getData = async () => {
    const url = 'https://5901-93-55-17-197.ngrok-free.app/data';

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        console.log(e);
    }

    return;
};

export default getData;