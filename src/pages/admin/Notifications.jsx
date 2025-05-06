import React, { useState, useEffect } from "react";
import { FaTrash, FaReply } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dummyNotifications = [
  {
    id: 1,
    user: "John Doe",
    message: "New order received",
    time: "2 hours ago",
    avatar: "https://img.freepik.com/free-vector/tiktok-profile-picture-template_742173-4482.jpg",
    reply: ""
  },
  {
    id: 2,
    user: "John Doe",
    message: "New order received",
    time: "2 hours ago",
    avatar: "https://img.freepik.com/free-vector/tiktok-profile-picture-template_742173-4482.jpg",
    reply: ""
  },
  {
    id: 3,
    user: "Jane Smith",
    message: "Payment received",
    time: "4 hours ago",
    avatar: "https://img.freepik.com/free-vector/tiktok-profile-picture-template_742173-4482.jpg",
    reply: ""
  },
  {
    id: 4,
    user: "Jane Smith",
    message: "Payment received",
    time: "4 hours ago",
    avatar: "https://img.freepik.com/free-vector/tiktok-profile-picture-template_742173-4482.jpg",
    reply: ""
  },
  {
    id: 5,
    user: "Jane Smith",
    message: "Payment received",
    time: "4 hours ago",
    avatar: "https://img.freepik.com/free-vector/tiktok-profile-picture-template_742173-4482.jpg",
    reply: ""
  }
];

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setNotifications(dummyNotifications);
  }, []);

  const handleDelete = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
    toast.success("Notification deleted successfully!");
  };

  const handleReply = (id) => {
    if (!replyText.trim()) {
      toast.error("Reply cannot be empty");
      return;
    }

    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, reply: replyText } : notif
    ));
    setReplyingTo(null);
    setReplyText("");
    toast.success("Reply sent successfully!");
  };

  return (
    <div className="max-w-4xl p-6 mx-auto mt-8 bg-white rounded-xl shadow-md dark:bg-gray-900">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <h1 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
        Notifications
      </h1>

      {notifications.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No notifications found.</p>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {(showAll ? notifications : notifications.slice(0, 3)).map((notif) => (
            <li
              key={notif.id}
              className="py-4 px-2 rounded-lg transition hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <div className="flex items-start gap-4">
                <img
                  src={notif.avatar}
                  alt={notif.user}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        {notif.user}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {notif.message}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-300">
                        {notif.time}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(notif.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                      aria-label="Delete notification"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>

                  {notif.reply && (
                    <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Your reply:</span> {notif.reply}
                      </p>
                    </div>
                  )}

                  {replyingTo === notif.id ? (
                    <div className="mt-3 flex gap-2">
                      <input
                        type="text"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type your reply..."
                        className="flex-1 px-3 py-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        onKeyPress={(e) => e.key === "Enter" && handleReply(notif.id)}
                      />
                      <button
                        onClick={() => handleReply(notif.id)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        Send
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setReplyingTo(notif.id);
                        setReplyText("");
                      }}
                      className="mt-2 text-blue-500 hover:text-blue-700 flex items-center gap-1 text-sm"
                      aria-label="Reply to notification"
                    >
                      <FaReply className="w-4 h-4" />
                      Reply
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {!showAll && notifications.length > 3 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            aria-label="View all notifications"
          >
            View All Notifications
          </button>
        </div>
      )}
    </div>
  );
}
