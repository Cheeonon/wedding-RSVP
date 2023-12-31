import "./List.scss";
import React, { useState, useEffect } from "react";
import { getData } from "../utils/axios";
import axios from "axios";

const List = () => {
  const [guests, setGuests] = useState([]);
//   const baseURL = `http://localhost:5000`;
const baseURL = `https://wedding-rsvp-production-fcff.up.railway.app`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        setGuests(response.data);
      } catch (error) {
        console.error("Error fetching guests:", error);
      }
    };

    fetchData();
  }, []);

  const removeGuest = async (guestID) => {
    try {
      const response = await axios.delete(`${baseURL}/api/remove/${guestID}`);
      if (response.status === 200) {
        const updatedGuests = guests.filter((guest) => guest.guestID !== guestID);
        setGuests(updatedGuests);
      }
    } catch (error) {
      console.error("Error removing guest:", error);
    }
  };

  const totalGuests = guests.reduce((total, guest) => total + guest.guestCount, 0);

  const menuCounts = guests.reduce((acc, guest) => {
    Object.values(guest.menus).forEach((menu) => {
      menu.forEach((item) => {
        if (!acc[item]) {
          acc[item] = 0;
        }
        acc[item]++;
      });
    });
    return acc;
  }, {});

  return (
    <div className="list-container">
      <div className="list-section">
        <h2 className="list-title">List of Guests</h2>

        <ul className="guest-list">
            {guests.map((guest, index) => (
                <li className="guest-item" key={index}>
                <div>
                    <strong>Guests(본인포함):</strong> {guest.guestCount}
                </div>
                {Object.entries(guest.menus).map(([guestKey, menuItems], innerIndex) => (
                    <div key={guestKey}>
                    {innerIndex > 0 && <hr />} {/* This adds a horizontal line between guests if more than one */}
                    <div>
                        <strong>Name:</strong> {guest.names[guestKey]} {/* Fetch the actual name using guestKey */}
                    </div>
                    <div>
                        <strong>Menu:</strong> {menuItems.join(", ")}
                    </div>
                    {guest.allergies && guest.allergies[innerIndex] && (
                        <div>
                        <strong>Allergies:</strong> {guest.allergies[innerIndex]}
                        </div>
                    )}
                    </div>
                ))}
                <button className="remove-button" onClick={() => removeGuest(guest.guestID)}>Remove</button>
                </li>
            ))}
            </ul>
      </div>

      <div className="summary-section">
        <h3 className="summary-title">Summary:</h3>
        <p className="total-guests">Total guests: {totalGuests}</p>
        {Object.entries(menuCounts).map(([menu, count]) => (
          <p className="menu-count" key={menu}>
            {menu}: {count}
          </p>
        ))}
      </div>

      <div className="raw-data-section">
        <h3 className="raw-data-title">Raw Data:</h3>
        <pre className="raw-data-content">{JSON.stringify(guests, null, 2)}</pre>
      </div>
    </div>
  );
};

export default List;
