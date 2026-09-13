import { persist } from './persistence.js'

export const OrderEnquiry = {
  async create(data) {
    return persist('order-enquiries', data)
  },
}
