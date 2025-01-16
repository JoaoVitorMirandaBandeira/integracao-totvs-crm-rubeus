import axios from 'axios';
export async function httpRequest(url, options = { method: 'GET' }) {
    try {
        const response = await fetch(url, options);
        return await response.json();
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Erro na requisição:', error.response?.data || error.message);
        }
        else {
            console.error('Erro desconhecido:', error);
        }
        throw error;
    }
}
