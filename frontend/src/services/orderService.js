import { apiRequest } from './api'

export const sendOrderEnquiry = (data) => apiRequest('/orders', { method: 'POST', body: JSON.stringify(data) })
