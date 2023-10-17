import "./List.scss";
import React, { useState, useEffect } from 'react';
import { getData } from '../utils/axios';

const List = () => {
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

    const totalGuests = guests.reduce((total, guest) => total + guest.guestCount, 0);

    const menuCounts = guests.reduce((acc, guest) => {
        Object.values(guest.menus).forEach(menu => {
            menu.forEach(item => {
                if (!acc[item]) {
                    acc[item] = 0;
                }
                acc[item]++;
            });
        });
        return acc;
    }, {});

    console.log(JSON.stringify(guests));

    return (
        <div>
            <div className="list">
                <h2>List of Guests</h2>
                <ul>
                    {guests.map((guest, index) => (
                        <li key={index}>
                            {index + 1} | 이름: {guest.name} | 동행자 수(본인포함): {guest.guestCount} | 메뉴: {JSON.stringify(guest.menus)}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="list">
                <h3>Summary:</h3>
                <p>Total guests: {totalGuests}</p>
                {Object.entries(menuCounts).map(([menu, count]) => (
                    <p key={menu}>{menu}: {count}</p>
                ))}
            </div>
            <div className="list">
                <h3>Raw Data:</h3>
                {JSON.stringify(guests)}
            </div>

        </div>
    );
}

export default List