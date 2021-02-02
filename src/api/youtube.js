import axios from 'axios';

const KEY = "AIzaSyBwcj2IdFIkSwiJg5G9ZcAIcQUYFz10uGM";

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        key: KEY,
        maxResults: 5,
        type: "video"
    }
})