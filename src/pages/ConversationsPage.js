import React, { useState } from 'react';
import useStore from '../store/main';

const ConversationsPage = () => {
    const { currentUser, messages } = useStore();
    const [message, setMessage] = useState('');
    const [selectedUser, setSelectedUser] = useState('');

    if (!currentUser) {
        return <p>Please log in to view conversations.</p>;
    }

    let conversationUsers = [];
    for (let i = 0; i < messages.length; i++) {
        const msg = messages[i];
        if (msg.sender === currentUser.username && !conversationUsers.includes(msg.recipient)) {
            conversationUsers.push(msg.recipient);
        } else if (msg.recipient === currentUser.username && !conversationUsers.includes(msg.sender)) {
            conversationUsers.push(msg.sender);
        }
    }

    const handleSendMessage = () => {
        if (message !== '' && selectedUser) {
            useStore.getState().sendMessage(selectedUser, message);
            setMessage('');
        }
    };

    return (
        <div className="container">
            <h2>Conversations</h2>

            <div>
                {conversationUsers.length > 0 ? (
                    conversationUsers.map((user, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedUser(user)}
                            style={{ margin: '5px', padding: '10px' }}
                        >
                            Chat with {user}
                        </button>
                    ))
                ) : (
                    <p>No conversations yet.</p>
                )}
            </div>

            {selectedUser && (
                <div className="chat-box">
                    <h3>Chat with {selectedUser}</h3>
                    <div className="messages">
                        {messages.map((msg, index) => {
                            if (
                                (msg.sender === currentUser.username && msg.recipient === selectedUser) ||
                                (msg.sender === selectedUser && msg.recipient === currentUser.username)
                            ) {
                                return (
                                    <p
                                        key={index}
                                        style={{
                                            textAlign:
                                                msg.sender === currentUser.username ? 'right' : 'left',
                                        }}
                                    >
                                        {msg.text}
                                    </p>
                                );
                            }
                            return null;
                        })}
                    </div>
                    <input
                        type="text"
                        placeholder="Type your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            )}
        </div>
    );
};

export default ConversationsPage;
