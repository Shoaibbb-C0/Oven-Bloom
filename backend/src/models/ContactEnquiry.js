import { persist } from './persistence.js'

export const ContactEnquiry = {
  async create(data) {
    return persist('contact-enquiries', data)
  },
}
