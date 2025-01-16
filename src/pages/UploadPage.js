import React from "react";

const UploadPage = ({secretKey}) => {
    const uploadPost = () => {

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const image = document.getElementById("image").value;

        if (!secretKey) {
            alert("You need to log in to upload a post!");
            return;
        }
        fetch("http://167.99.138.67:1111/createpost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                secretKey: secretKey,
                title: title,
                description: description,
                image: image,

            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Post uploaded successfully!");
                    document.getElementById("title").value = "";
                    document.getElementById("description").value = "";
                    document.getElementById("image").value = "";
                } else {
                    alert("Error: " + (data.message || "Unable to upload"));
                }
            });
    };

    return (
        <div>
            <h1>Upload Post</h1>
            <div>
                <input type="text" id="title" placeholder="Title" />
            </div>
            <div>
                <input type="text" id="description" placeholder="Description" />
            </div>
            <div>
                <input type="text" id="image" placeholder="Image URL" />
            </div>
            <button onClick={uploadPost}>Upload</button>
        </div>
    );
};

export default UploadPage;

