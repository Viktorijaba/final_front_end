import React, { useRef, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";

const EditPostPage = ({ secretKey }) => {
    const location = useLocation();
    const post = location.state?.post;

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (post) {
            titleRef.current.value = post.title;
            descriptionRef.current.value = post.description;
            imageRef.current.value = post.image;
        }
    }, [post]);

        const updatePost = () => {
            const updatedTitle = titleRef.current.value.trim();
            const updatedDescription = descriptionRef.current.value.trim();
            const updatedImage = imageRef.current.value.trim();


            fetch("http://167.99.138.67:1111/updatepost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                secretKey,
                title: updatedTitle,
                description: updatedDescription,
                image: updatedImage,
                id: post.id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Post updated successfully!");
                } else {
                    alert("Error: " + (data.message || "Unable to update post"));
                }
            });
    };

    if (!post) {
        alert("No post data found. Redirecting to the home page.");
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h1>Edit Post</h1>
            <div>
                <input type="text" ref={titleRef} placeholder="Title" />
            </div>
            <div>
                <input type="text" ref={descriptionRef} placeholder="Description" />
            </div>
            <div>
                <input type="text" ref={imageRef} placeholder="Image URL" />
            </div>
            <button onClick={updatePost}>Save Changes</button>
        </div>
    );
};

export default EditPostPage;
