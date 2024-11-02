// In a React component, e.g., ChatComponent.js
"use client"
import { useState } from "react";

export default function ChatComponent() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/chatgpt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }),
            });

            const data = await res.json();
            setResponse(data.choices[0].message.content);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
            <div>
                <strong>Response:</strong> {response}
            </div>
        </div>
    );
}
