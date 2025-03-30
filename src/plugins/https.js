module.exports = {
    get: (url) => {
        return new Promise(resolve => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(error => {
                    console.error("GET request error:", error);
                    resolve({ success: false, error });
                });
        });
    },

    post: (url, data) => {
        return new Promise(resolve => {
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            };

            fetch(url, options)
                .then(res => {
                    if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
                    return res.json();
                })
                .then(data => resolve(data))
                .catch(error => {
                    console.error("POST request error:", error);
                    resolve({ success: false, error: error.message });
                });
        });
    },

    getToken: (url) => {
        return new Promise(resolve => {
            const token = localStorage.getItem("token");

            if (!token || token === "null") {
                console.warn("No valid token in localStorage!");
            }


            const options = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            };

            fetch(url, options)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(error => {
                    console.error("GET Token request error:", error);
                    resolve({ success: false, error });
                });
        });
    },

    postToken: (url, data) => {
        return new Promise(resolve => {
            const token = localStorage.getItem("token");

            if (!token || token === "null") {
                console.warn("No valid token in localStorage!");
            }


            const options = {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            };

            fetch(url, options)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(error => {
                    console.error("POST Token request error:", error);
                    resolve({ success: false, error });
                });
        });
    }
};
