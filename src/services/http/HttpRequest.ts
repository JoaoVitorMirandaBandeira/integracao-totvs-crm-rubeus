import axios from 'axios'

export async function httpRequest(url: string, options = { method: 'GET' }): Promise<any> {
    try {
        const response = await fetch(url, options)
        return await response.json()
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error('Erro na requisição:', error.response?.data || error.message)
        } else {
            console.error('Erro desconhecido:', error)
        }
        throw error
    }
}
