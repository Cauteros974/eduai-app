import axios from 'axios';
import { useUserStore } from '../store/userStore';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

