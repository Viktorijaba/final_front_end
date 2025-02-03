import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
    const {
        name,
        username,
        email,
        address,
        phone,
        website,
        company
    } = user;

    return (
        <Link
            to={`/user/${user.id}`}
            className="user-card"
            style={{ textDecoration: "none" }}
        >
        <div className="user-card">
            <h3>{name}</h3>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Address:</strong></p>
            <ul>
                <li><strong>Street:</strong> {address.street}</li>
                <li><strong>Suite:</strong> {address.suite}</li>
                <li><strong>City:</strong> {address.city}</li>
                <li><strong>Zipcode:</strong> {address.zipcode}</li>
                <li><strong>Geo:</strong> lat: {address.geo.lat}, lng: {address.geo.lng}</li>
            </ul>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Website:</strong> </p>
            <p><strong>Company:</strong></p>
            <ul>
                <li><strong>Name:</strong> {company.name}</li>
                <li><strong>Catchphrase:</strong> {company.catchPhrase}</li>
                <li><strong>Business:</strong> {company.bs}</li>
            </ul>
        </div>
        </Link>

    );
};

export default User;
