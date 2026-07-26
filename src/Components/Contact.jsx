import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_u8nlzoq",
        "template_axlm2fy",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "uyG3-0Sqosb4W-wzo"
      )
      .then(() => {
        toast.success("Message sent successfully! ✅", {
          duration: 2000,
        });

        setFormData({
          email: "",
          name: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to send message ❌");
      });
  };
  return (
    <>
      <Toaster position="top-right" />
      <section id='Contact' className='min-h-screen py-18 px-5 text-white sm:px-6 lg:px-10'>
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase font-extrabold tracking-normal">
            Contact
          </h2>
          <div className="mt-3 h-1 w-14 mx-auto rounded-full bg-linear-to-r from-cyan-400 to-purple-500"></div>
          <p className='mt-4 text-lg  font-semibold text-gray-400'>I'd love to hear from you — reach out for any opportunities or questions!</p>
        </div>

        <div className='mt-16 flex justify-center'>
          <div className='w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 lg:p-6 shadow-xl'>

            <h3 className='text-center text-xl font-bold text-white mb-6'>Connect With Me 🚀</h3>

            <form className='space-y-6' onSubmit={handleSubmit}>

              {/* Email */}
              <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Your Email' className='w-full rounded-lg border border-white/10 bg-[#0d1224] px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20' required />

              {/* Name */}
              <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Your Name' className='w-full rounded-lg border border-white/10 bg-[#0d1224] px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20' required />

              {/* Subjects */}
              <input type="text" name='subject' value={formData.subject} onChange={handleChange} placeholder='Subject' className='w-full rounded-lg border border-white/10 bg-[#0d1224] px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20' required />

              {/* Message */}
              <textarea rows={5} name='message' value={formData.message} onChange={handleChange} placeholder='Message' className='w-full resize-none rounded-lg border border-white/10 bg-[#0d1224] px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20' required></textarea>

              <button
                type="submit"
                className="group w-full rounded-xl bg-linear-to-r from-purple-600 to-pink-500 py-4 font-semibold shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <i className="fa-solid fa-paper-plane group-hover:translate-x-1 transition"></i>
                </span>

              </button>
            </form>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
