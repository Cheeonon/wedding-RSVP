import React, { useState, useRef } from 'react';
import "./RSVP.scss"
import { submit } from '../utils/axios';
import { v4 as uuidv4 } from 'uuid';

const RSVP = () => {
  const [name, setName] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [menus, setMenus] = useState([{ starter: '', main: '' }]);
  const formRef = useRef(null);
  const [allergies, setAllergies] = useState([]);

  const handleGuestCountChange = (count) => {
    setGuestCount(count);
    const newMenus = Array.from({ length: count }, () => ({ starter: '', main: '' }));
    const newAllergies = Array.from({ length: count }, () => '');
    setMenus(newMenus);
    setAllergies(newAllergies);
  }

  const handleMenuChange = (index, course, value) => {
    const newMenus = [...menus];
    newMenus[index][course] = value;
    setMenus(newMenus);
  }

  const handleAllergyChange = (index, value) => {
    const newAllergies = [...allergies];
    newAllergies[index] = value;
    setAllergies(newAllergies);
}

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current.checkValidity()) {
        formRef.current.reportValidity();
        return;
    }

      const guestID = uuidv4();

      const formattedMenus = {};
      menus.forEach((menu, index) => {
          formattedMenus[`guest${index + 1}`] = [menu.starter, menu.main];
      });

      const submissionData = {
          guestID,
          name,
          guestCount,
          menus: formattedMenus,
          allergies
      };

      try {
        const response = await submit(submissionData);
        console.log(response.data);  
      } catch (error) {
          console.error('Error submitting form:', error);
      }

      alert("Thank you for RSVPing. Hope to see you soon.");
      window.location.reload();
  };


  return (
    <div className="rsvp-form">
      <div className="rsvp-form__title">
        <h1 className="rsvp-form__title-large">RSVP</h1>
        <b className="rsvp-form__title-small">Please Response by Oct 27th</b>
      </div>

      <form ref={formRef} className="rsvp-form__form">
        <div className="rsvp-form__field">
          <label className="rsvp-form__label">Name:</label>
          <input required type="text" value={name} onChange={e => setName(e.target.value)} className='rsvp-form__input'/>
        </div>
        <div className="rsvp-form__field">
          <label className="rsvp-form__label">Number of Guests: <span className="rsvp-form__label-small"><br></br>(including yourself)</span></label>
          <select value={guestCount} onChange={e => handleGuestCountChange(Number(e.target.value))} className="rsvp-form__select">
            {[...Array(12)].map((_, index) => (
              <option key={index} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
        <div>
          <div className="menu">
            <h1 className="menu__title">Meal Choice:</h1>

            <div className="menu-p">
              <h2 className="menu__subtitle">Starter</h2>

              <h3 className="menu__name">Composed Salad</h3>
              <p className="menu__desc">goat cheese, compressed apple, dried strawberries, Chardonnay vinaigrette</p>

              <h3 className="menu__name">Soup</h3>
              <p className="menu__desc">chilled sweet pea soup, cold-water shrimp, citrus creme fraiche</p>
            </div>

            <div className="menu-p">
              <h2 className="menu__subtitle">Main</h2>

              <h3 className="menu__name">Steak Frites</h3>
              <p className="menu__desc">grilled beef filet, rapini, French fries, peppery sauce</p>

              <h3 className="menu__name">Fish</h3>
              <p className="menu__desc">Icelandic cod, sweet peas, pickled kohlrabi, dill, potato, sesame & poppy seeds</p>

            </div>
          </div>

          {menus.map((menu, index) => (
            <div key={index} className="rsvp-form__menu">
              <label className="rsvp-form__label">Meal choice for Guest {index + 1}:</label>
              <div className="rsvp-form__dropdown">
                  <select required value={menu.starter} onChange={e => handleMenuChange(index, 'starter', e.target.value)} className="rsvp-form__select">
                  <option value="" disabled selected>STARTER</option>
                  <option value="salad">Composed Salad</option>
                  <option value="soup">Soup</option>
                </select>
                <select required value={menu.main} onChange={e => handleMenuChange(index, 'main', e.target.value)} className="rsvp-form__select">
                  <option value="" disabled selected>MAIN</option>
                  <option value="steak">Steak Frites</option>
                  <option value="fish">Fish</option>
                </select>
              </div>
              <label className="rsvp-form__label rsvp-form__allergies">Allergies & Dietary Restrictions: </label>
              <input required type="text" onChange={e => handleAllergyChange(index, e.target.value)} className='rsvp-form__input rsvp-form__allergies'/>
            </div>
          ))}
        </div>
        <button onClick={handleSubmit} className="rsvp-form__submit">Submit</button>
      </form>
    </div>
  );
}

export default RSVP;