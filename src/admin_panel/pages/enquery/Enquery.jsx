import React, { useContext, useState, useEffect } from "react";
import { FireContext } from "../../../Context/context";

export default function Enquery() {
  const { GetMassage } = useContext(FireContext);
  const [messageIds, setMessageIds] = useState([]); // State to store message IDs
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await GetMassage();
        const ids = response.map((e) => e.Name); // Map IDs from the response
        setMessageIds(ids); // Store the IDs in state
        setLoading(false); // Stop loading
      } catch (err) {
        console.error("Error fetching messages: ", err);
        setError("Failed to fetch messages."); // Set error message
        setLoading(false); // Stop loading even on error
      }
    };

    fetchMessages();
  }, [GetMassage]); // Dependency array includes GetMassage

  if (loading) return <p>Loading...</p>; // Show loading indicator
  if (error) return <p>{error}</p>; // Show error message

  return (
    <div>
      <h1>Message IDs</h1>
      {messageIds.length > 0 ? (
        <ul>
          {messageIds.map((id) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      ) : (
        <p>No messages found.</p>
      )}
    </div>
  );
};
