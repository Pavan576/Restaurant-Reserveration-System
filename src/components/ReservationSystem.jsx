import { useState } from "react";
import { format } from "date-fns";
import "../styles.css";
import videoBg from "../assets/reswall.mp4";

const TOTAL_SEATS = 20;

export default function ReservationSystem() {
  const [seatsLeft, setSeatsLeft] = useState(TOTAL_SEATS);
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({ name: "", phone: "", guests: "" });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, guests } = formData;
    const guestCount = parseInt(guests, 10);

    if (!name.trim() || !phone.trim() || isNaN(guestCount) || guestCount <= 0) {
      alert("Please fill in all fields correctly.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    if (guestCount > seatsLeft) {
      alert("Not enough seats available.");
      return;
    }

    const isDuplicate = reservations.some(res => res.name === name && res.phone === phone && !res.checkOutTime);
    if (isDuplicate) {
      alert("This reservation already exists and has not checked out yet.");
      return;
    }

    setReservations([...reservations, {
      id: Date.now(),
      name,
      phone,
      guests: guestCount,
      checkInTime: format(new Date(), "hh:mm a"),
      checkOutTime: null
    }]);

    setSeatsLeft(seatsLeft - guestCount);
    setFormData({ name: "", phone: "", guests: "" });
  };

  const handleCheckout = (id, guestCount) => {
    setReservations(reservations.map(res => res.id === id ? { ...res, checkOutTime: format(new Date(), "hh:mm a") } : res));
    setSeatsLeft(seatsLeft + guestCount);
  };

  const handleDelete = (id, guestCount) => {
    setReservations(reservations.filter(res => res.id !== id));
    setSeatsLeft(seatsLeft + guestCount);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <video className="video-bg" src={videoBg} autoPlay loop muted />
      <div className="container">
        <button className="theme-btn" onClick={toggleTheme}>
          {isDarkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
        <h1>Restaurant Reservation System</h1>
        <p>Seats Left: <strong>{seatsLeft}</strong></p>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Customer Name" value={formData.name} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} required />
          <button type="submit">Book Table</button>
          <button type="button" onClick={() => setFormData({ name: "", phone: "", guests: "" })}>Clear Form</button>
        </form>

        {/* Reservation List */}
        {reservations.length > 0 && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Guests</th>
                  <th>Check-In</th>
                  <th>Check-Out</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map(res => (
                  <tr key={res.id}>
                    <td>{res.name}</td>
                    <td>{res.phone}</td>
                    <td>{res.guests}</td>
                    <td>{res.checkInTime}</td>
                    <td>{res.checkOutTime || "--"}</td>
                    <td>
                      {!res.checkOutTime && <button className="checkout-btn" onClick={() => handleCheckout(res.id, res.guests)}>Checkout</button>}
                      <button className="delete-btn" onClick={() => handleDelete(res.id, res.guests)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
