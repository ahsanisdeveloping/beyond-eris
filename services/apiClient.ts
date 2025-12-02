

const baseURL = 'https://fakestoreapi.com/';

export const apiClient = async (endpoint: string, options: RequestInit & { headers?: Record<string, string> } = {}) => {
    const url = `${baseURL}${endpoint}`;
    const defaultHeaders = {
        'Content-Type': 'application/json',
    };
    const mergedHeaders = {
        ...defaultHeaders,
        ...(options.headers || {}),
    };

    const config: RequestInit = {
        ...options,
        headers: mergedHeaders,
    };
    try{
        const response = await fetch(url, config);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
}
export default apiClient;