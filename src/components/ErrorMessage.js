import React from "react";
import mainStore from "../store/main";

const ErrorMessage = () => {
    const { error } = mainStore(state => state);

    if (!error) return null;

    return (
        <div className="p-2 text-center error">
            {Array.isArray(error) ? (
                <ul>
                    {error.map((msg, i) => (
                        <li key={i}>{msg}</li>
                    ))}
                </ul>
            ) : (
                <p>{error}</p>
            )}
        </div>
    );
};

export default ErrorMessage;
