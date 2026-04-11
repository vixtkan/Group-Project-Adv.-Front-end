// "use client";

import { useState } from "react";
import styles from "../styles/TripPlanner.module.css";

export default function TripPlanner() {
  const [trip, setTrip] = useState("");
  const [tripList, setTripList] = useState([]);

  const addTrip = () => {
    if (!trip.trim()) return;
    setTripList([...tripList, trip]);
    setTrip("");
  };

  const removeTrip = (indexToRemove) => {
    setTripList(tripList.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className={styles.planner}>
      <div className={styles.top}>
        <p className={styles.eyebrow}>Build your own journey</p>
        <h2>Plan your next destination</h2>
        <p className={styles.subtext}>
          Add dream destinations and organize the places you want to visit next.
        </p>
      </div>

      <div className={styles.inputRow}>
        <input
          type="text"
          placeholder="Enter a destination"
          value={trip}
          onChange={(e) => setTrip(e.target.value)}
        />
        <button onClick={addTrip}>Add trip</button>
      </div>

      {tripList.length === 0 ? (
        <div className={styles.emptyBox}>
          <p>No trips added yet.</p>
          <span>Try adding Japan, Italy, Morocco, or Canada.</span>
        </div>
      ) : (
        <ul className={styles.tripList}>
          {tripList.map((item, index) => (
            <li key={index}>
              <div>
                <strong>{item}</strong>
                <p>Saved to your trip ideas</p>
              </div>
              <button onClick={() => removeTrip(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}