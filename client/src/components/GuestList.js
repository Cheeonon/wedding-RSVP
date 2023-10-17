

import React, { useState, useEffect } from 'react';
import { getData } from '../utils/axios';

const GuestList = () => {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData();
                setGuests(response.data);
            } catch (error) {
                console.error('Error fetching guests:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>List of Guests</h2>
            <ul>
                {guests.map((guest, index) => (
                    <li key={index}>
                        Name: {guest.name} | Guests Count: {guest.guestCount} | Menus: {JSON.stringify(guest.menus)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GuestList;
