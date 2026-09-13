import { apiRequest } from './api'

export const sendContactEnquiry = (data) => apiRequest('/contact', { method: 'POST', body: JSON.stringify(data) })
