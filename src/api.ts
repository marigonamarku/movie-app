export const host = 'https://fake-store-api.mock.beeceptor.com'
export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
    const user = localStorage.getItem("user");
    const token = user ? JSON.parse(user).token : null;
  
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    };
  
    const response = await fetch(`${host}${endpoint}`, { ...options, headers });
  
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || "API request failed");
    }
  
    return response.json();
  };
  