import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FindDoctor.css";
import { FaSearch, FaMapMarkerAlt, FaUserMd, FaLocationArrow } from "react-icons/fa";

const doctorsList = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Psychologist", location: "New York, NY", lat: 40.7128, lng: -74.0060 },
    { id: 2, name: "Dr. James Anderson", specialty: "Therapist", location: "Los Angeles, CA", lat: 34.0522, lng: -118.2437 },
    { id: 3, name: "Dr. Emily Roberts", specialty: "Psychiatrist", location: "Chicago, IL", lat: 41.8781, lng: -87.6298 },
    { id: 4, name: "Dr. Michael Smith", specialty: "Neurologist", location: "Houston, TX", lat: 29.7604, lng: -95.3698 }
];

const FindDoctor = () => {
    const [search, setSearch] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState(doctorsList);
    const [userLocation, setUserLocation] = useState(null);
    const [nearbyDoctors, setNearbyDoctors] = useState([]);

    useEffect(() => {
        setFilteredDoctors(
            doctorsList.filter((doctor) =>
                doctor.name.toLowerCase().includes(search.toLowerCase()) ||
                doctor.specialty.toLowerCase().includes(search.toLowerCase()) ||
                doctor.location.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search]);

    // Function to get user location
    const findNearbyDoctors = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });

                    // Fetch nearby doctors using Google Places API (OR Mock Data)
                    try {
                        const response = await axios.get(
                            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=doctor&key=YOUR_GOOGLE_MAPS_API_KEY`
                        );
                        setNearbyDoctors(response.data.results);
                    } catch (error) {
                        console.error("Error fetching nearby doctors:", error);
                    }
                },
                (error) => console.error("Error getting location:", error)
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    return (
        <div className="find-doctor-container">
            <h1>Find a Specialist</h1>
            <div className="search-container">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search by name, specialty, or location..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <button className="location-btn" onClick={findNearbyDoctors}>
                <FaLocationArrow /> Find Nearby Doctors
            </button>

            <div className="doctors-list">
                {filteredDoctors.map((doctor) => (
                    <div className="doctor-card" key={doctor.id}>
                        <FaUserMd className="doctor-icon" />
                        <h2>{doctor.name}</h2>
                        <p><strong>Specialty:</strong> {doctor.specialty}</p>
                        <p><FaMapMarkerAlt /> {doctor.location}</p>
                        <p>⭐ 4.8 / 5</p>
                        <button className="book-appointment">Book Appointment</button>
                    </div>
                ))}
            </div>

            {userLocation && (
                <div className="nearby-doctors">
                    <h2>Nearby Doctors</h2>
                    {nearbyDoctors.length > 0 ? (
                        nearbyDoctors.map((doctor, index) => (
                            <div className="doctor-card" key={index}>
                                <h2>{doctor.name}</h2>
                                <p><FaMapMarkerAlt /> {doctor.vicinity}</p>
                                <button className="book-appointment">Book Now</button>
                            </div>
                        ))
                    ) : (
                        <p>No nearby doctors found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default FindDoctor;
