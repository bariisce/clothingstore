import {useState} from "react";
import axios from "axios";

function usePost(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const postData = async (url, apiData) => {
        try {
            setLoading(true)
            const {data: responseData} = await axios.post(url, apiData)
            setData(responseData)
            setLoading(false)
        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }
    return {loading, error, data, postData}
}

export default usePost;