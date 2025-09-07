import React from "react";
import { FaHeart, FaComment, FaSmile, FaLeaf, FaShareAlt } from "react-icons/fa";
import crackedImg from "./assets/images/cracked.jpg";
import garbageImg from "./assets/images/garbage.jpg";
import cleanupImg from "./assets/images/clean.jpg";
import townhallImg from "./assets/images/meeting.jpg";
import "./CommunityPage.css";

export default function CommunityPage() {
  const posts = [
    {
      user: "Sansk Wilcon",
      text: "Cracked sidewalk needs fixing.",
      image: crackedImg,
      comments: 3,
      likes: 12,
      reposts: 2,
    },
    {
      user: "Michael Loo",
      text: "Collected garbage at the park today.",
      image: garbageImg,
      comments: 0,
      likes: 10,
      reposts: 1,
    },
  ];

  const events = [
    {
      title: "Community Cleanup",
      time: "Sept 10, 10:30 AM",
      image: cleanupImg,
    },
    {
      title: "Town Hall Meeting",
      time: "Sept 13, 10:30 AM",
      image: townhallImg,
    },
  ];

  // Function to get icon per feed user
  const getFeedUserIcon = (name) => {
    name = name.toLowerCase();
    if (name.includes("sansk")) return <FaSmile style={{ color: "#ff7f50", marginRight: "8px" }} />;
    if (name.includes("michael")) return <FaLeaf style={{ color: "#32cd32", marginRight: "8px" }} />;
    return <FaSmile style={{ color: "#555", marginRight: "8px" }} />;
  };

  return (
    <div className="community-wrapper">
      <div className="community-container">

        {/* Community Feed */}
        <div className="feed-section">
          <h2 className="section-title">Community Feed</h2>
          {posts.map((post, i) => (
            <div key={i} className="card feed-card">
              <div className="feed-header">
                {getFeedUserIcon(post.user)}
                <h3 className="feed-username">{post.user}</h3>
              </div>
              <p className="feed-text">{post.text}</p>
              <img src={post.image} alt={post.text} className="feed-image" />
              <div className="feed-actions">
                <span><FaComment /> {post.comments}</span>
                <span><FaHeart /> {post.likes}</span>
                <span><FaShareAlt /> {post.reposts}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Events */}
        <div className="events-section">
          <h2 className="section-title">Events</h2>
          {events.map((event, i) => (
            <div key={i} className="card event-card">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.time}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
