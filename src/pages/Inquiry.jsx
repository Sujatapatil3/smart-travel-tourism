
import { useState } from "react";
import destinations from "../data/destinations.json";

function Inquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    travelDate: "",
    travelers: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.destination) {
      newErrors.destination = "Please select a destination.";
    }

    if (!formData.travelDate) {
      newErrors.travelDate = "Travel date is required.";
    }

    if (!formData.travelers || Number(formData.travelers) < 1) {
      newErrors.travelers = "Enter at least 1 traveler.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    setSuccessMessage("");

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage("Your travel inquiry has been submitted successfully!");

      setFormData({
        name: "",
        email: "",
        destination: "",
        travelDate: "",
        travelers: "",
        message: "",
      });
    }
  }

  return (
    <div className="inquiry-section">
      <div className="inquiry-heading">
        <p className="section-tag">PLAN YOUR JOURNEY</p>
        <h2>Travel Inquiry Form</h2>
        <p>Share your travel plans with us.</p>
      </div>

      <form className="inquiry-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label htmlFor="destination">Destination</label>
        <select
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="">Select a destination</option>
          {destinations.map((destination) => (
            <option key={destination.id} value={destination.name}>
              {destination.name}
            </option>
          ))}
        </select>
        {errors.destination && (
          <p className="error-message">{errors.destination}</p>
        )}

        <label htmlFor="travelDate">Travel Date</label>
        <input
          type="date"
          id="travelDate"
          name="travelDate"
          value={formData.travelDate}
          onChange={handleChange}
        />
        {errors.travelDate && (
          <p className="error-message">{errors.travelDate}</p>
        )}

        <label htmlFor="travelers">Number of Travelers</label>
        <input
          type="number"
          id="travelers"
          name="travelers"
          min="1"
          value={formData.travelers}
          onChange={handleChange}
          placeholder="Enter number of travelers"
        />
        {errors.travelers && (
          <p className="error-message">{errors.travelers}</p>
        )}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your travel requirements"
          rows="4"
        />
        {errors.message && (
          <p className="error-message">{errors.message}</p>
        )}

        <button type="submit">Submit Inquiry</button>

        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}
      </form>
    </div>
  );
}

export default Inquiry;
