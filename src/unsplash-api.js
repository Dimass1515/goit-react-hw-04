import axios from "axios";

const baseURL = "https://api.unsplash.com/";
const API_KEY = "YCcvCvR0gnT-vr60c8XfxtESr_CAAKBXyEcMNtr0cNA";

export const fetchArticlesWithTopic = async (topic, page) => {
    try {
        const response = await axios.get(`${baseURL}/search/photos`, {
            params: {
                query: topic,
                client_id: API_KEY,
                page,
            },
        });

        console.log(response.data);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
};