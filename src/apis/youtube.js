import axios from 'axios';

const KEY = 'AIzaSyAJsGvxU95LciSWMWQ_ZY6maj-fJnit8DM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
