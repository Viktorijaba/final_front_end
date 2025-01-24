import React, {useState} from 'react';
import useStore from '../store/main';

const UsersListPage = () => {
    const { users, sendMessage } = useStore();
    const [selectedUser, setSelectedUser] = useState(null);
    const [message, setMessage] = useState('');
    const [showMessageBox, setShowMessageBox] = useState(false);

 const openMessageBox = (user) => {
        setSelectedUser(user);
        setShowMessageBox(true);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            sendMessage(selectedUser.username, message);
            setMessage('');
            setShowMessageBox(false);
        }
    };


    return (
        <div className="container">
            <h2>Users List</h2>
            <div>
                {users.map((user, index) => (
                    <div key={index} className="user-card">
                        <p>{user.username}</p>
                        <button onClick={() => openMessageBox(user)}>Send Message</button>
                    </div>
                ))}
            </div>

            {showMessageBox && (
                <div className="message-box">
                    <h3>Send message to {selectedUser.username}</h3>
                    <input
                        type="text"
                        placeholder="Enter message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={handleSendMessage}>Send</button>
                    <button onClick={() => setShowMessageBox(false)}>Close</button>
                </div>
            )}
        </div>
    );
};


export default UsersListPage;
