"use client"

import { useState } from 'react'
import Navbar from '../Navbar/page'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message Sent!')
    // Logic to handle form submission can be added here
  }

  return (
    <main>
      <Navbar />
      <section id="contact" className="py-10 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white text-gray-900 rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white text-gray-900 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white text-gray-900 rounded-md"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>

            <div>
              <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
