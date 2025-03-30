import React, { useEffect, useRef, useState } from "react";
import http from "../plugins/https";

const MessagesPage = () => {
    const [messages, setMessages] = useState([]);
    const [replyTo, setReplyTo] = useState(null);
    const replyRef = useRef(null);

    useEffect(() => {
        http.getToken("http://localhost:2002/getMessages").then((res) => {
            if (Array.isArray(res)) {
                setMessages(res);
            }
        });
    }, []);

    const handleReply = (receiver) => {
        const content = replyRef.current.value;
        if (!content) return;

        http.postToken("http://localhost:2002/sendMessage", {
            to: receiver,
            content
        }).then((res) => {
            if (res.success) {
                replyRef.current.value = "";
                setReplyTo(null);
            }
        });
    };

    const handleDelete = (id) => {
        http.postToken(`http://localhost:2002/deleteMessage/${id}`, {}).then((res) => {
            if (res.success) {
                setMessages((prev) => prev.filter((msg) => msg.id !== id));
            }
        });
    };

    return (
        <div className="post-container">
            <h2 style={{ textAlign: "center" }}>Your Messages</h2>

            {messages.length === 0 ? (
                <p style={{ textAlign: "center" }}>You have no messages.</p>
            ) : (
                messages.map((msg) => (
                    <div key={msg.id} className="post-card">
                        <p><strong>From:</strong> {msg.from}</p>
                        <p>{msg.content}</p>
                        <p style={{ fontSize: "12px", color: "gray" }}>
                            {msg.date ? new Date(msg.date).toLocaleString() : "Unknown date"}
                        </p>

                        <button onClick={() => handleDelete(msg.id)}>Delete Message</button>

                        {replyTo === msg.id ? (
                            <div>
                                <input ref={replyRef} type="text" placeholder="Type your reply..." />
                                <button onClick={() => handleReply(msg.from)}>Send Reply</button>
                            </div>
                        ) : (
                            <button onClick={() => setReplyTo(msg.id)}>Reply</button>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default MessagesPage;
