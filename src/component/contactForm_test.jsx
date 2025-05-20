'use client'; // if using app directory

import { useState } from 'react';

export default function RequestDemoForm() {
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log(formData, 'formData');
    

    try {
      const res = await fetch(
        'https://bill365.app/bill365/wp-json/contact-form-7/v1/contact-forms/2705/feedback',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await res.json();

      if (data.status === 'mail_sent') {
        setMessage('✅ Message sent successfully!');
      } else {
        setMessage(`❌ Error: ${data.message}`);
      }

      console.log('Form response:', data);
    } catch (error) {
      console.error('Submission error:', error);
      setMessage('❌ Submission failed. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 max-w-xl mx-auto bg-white shadow rounded">
      <div>
        <label htmlFor="yourName" className="block font-medium">Your Name</label>
        <input
          type="text"
          id="yourName"
          name="yourName"
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="yourAge" className="block font-medium">Your Age</label>
        <input
          type="text"
          id="yourAge"
          name="yourAge"
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="yourFile" className="block font-medium">Your File</label>
        {/* <input
          type="file"
          id="yourFile"
          name="yourFile"
          required
          className="w-full border p-2"
        /> */}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>

      {message && <p className="mt-4">{message}</p>}
    </form>
  );
}
