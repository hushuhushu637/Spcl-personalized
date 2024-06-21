import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactAdmin.css'
const ContactAdmin = () => {


    const [data, setData] = useState([]);
   

    const options = [
        { label: "Not Seen", value: "Not Seen" },
        { label: "Seen", value: "Seen" },
        { label: "Resolved", value: "Resolved" },
        { label: "Resolving", value: "Resolving" },
        { label: "Ongoing", value: "Ongoing" },
    ];
    const [statuses, setStatuses] = useState([]);

    const handleSelect = (index, e) => {
        const newStatuses = [...statuses];
        newStatuses[index] = e.target.value;
        setStatuses(newStatuses);
        localStorage.setItem('statuses', JSON.stringify(newStatuses)); // Save to localStorage
    };

    const getUserDetails = async () => {
        try {
            const responseData = await axios.get('http://localhost:4000/api/v1/get-contact');
            setData(responseData.data.response);
            // Initialize statuses based on fetched data
            const savedStatuses = JSON.parse(localStorage.getItem('statuses')) || [];
            const initialStatuses = responseData.data.response.map((user, index) => savedStatuses[index] || options[0].value);
            setStatuses(initialStatuses);
        } catch (error) {
            console.log("Error in getting user Details");
        }
    };

 


    useEffect(() => {
        getUserDetails();
    }, []);








    return (
        <div>
            <h1>All User List here</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Query</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.query}</td>
                            <td>
                                <select value={statuses[index]} onChange={(e) => handleSelect(index, e)}>
                                    {options.map(option => (
                                        <option value={option.value} key={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table></div>
    )
}

export default ContactAdmin