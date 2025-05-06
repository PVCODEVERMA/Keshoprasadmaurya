import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaTimes, FaReply, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useClickOutside from "../../hooks/useClickOutside.jsx";
import DropdownItem from "./DropdownItem.jsx";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
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
      user: "Jane Smith",
      message: "Payment received",
      time: "4 hours ago",
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
  ]);
  const [replyText, setReplyText] = useState("");
  const [selectedNotificationId, setSelectedNotificationId] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
    setSelectedNotificationId(null);
  });

  const handleBellClick = () => {
    if (window.innerWidth < 768) {
      navigate("/admin/notifications");
    } else {
      setIsOpen(!isOpen); 
    }
  };

  const handleDelete = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
    toast.success("Notification deleted successfully!");
  };

  const handleReply = (id) => {
    const updatedNotifications = notifications.map(notification => {
      if (notification.id === id) {
        return { ...notification, reply: replyText };
      }
      return notification;
    });

    setNotifications(updatedNotifications);
    setReplyText("");
    setSelectedNotificationId(null);
    toast.success("Reply sent successfully!");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        toastClassName="text-sm sm:text-base"
      />

      {/* Notification Bell */}
      <button
        className="relative p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        onClick={handleBellClick}
      >
        <FaBell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        {notifications.length > 0 && (
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
        )}
      </button>

      {/* Dropdown Content (only for desktop) */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-full sm:w-80 bg-white dark:bg-green-600 rounded-lg shadow-xl border dark:border-gray-700 z-50 max-w-xs sm:max-w-none">
          <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
            <h3 className="font-semibold text-gray-800 dark:text-white text-lg">Notifications</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <FaTimes className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.map(notification => (
              <DropdownItem key={notification.id}>
                <div className="p-3 sm:p-4 hover:bg-gray-50 dark:hover:bg-white">
                  <div className="flex justify-between items-start gap-2">
                    {/* Notification Content */}
                    <div className="flex gap-3 flex-1">
                      <img
                        src={notification.avatar}
                        alt="User"
                        className="w-10 h-10 rounded-full flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium dark:text-white truncate">{notification.user}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                          {notification.time}
                        </p>

                        {/* Reply Section */}
                        {notification.reply && (
                          <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-900 rounded">
                            <p className="text-xs text-gray-600 dark:text-gray-400 break-words">
                              <span className="font-medium">Your reply:</span> {notification.reply}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(notification.id)}
                      className="text-red-500 hover:text-red-700 ml-2 flex-shrink-0"
                    >
                      <FaTrash className="w-4 h-4 sm:w-5 sm:h-5 " />
                    </button>
                  </div>

                  {/* Reply Input */}
                  {selectedNotificationId === notification.id ? (
                    <div className="mt-3 flex gap-2">
                      <input
                        type="text"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type reply..."
                        className="flex-1 px-3 py-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                      />
                      <button
                        onClick={() => handleReply(notification.id)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm sm:text-base"
                      >
                        Send
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSelectedNotificationId(notification.id)}
                      className="mt-2 text-blue-500 hover:text-blue-700 flex items-center gap-1 text-sm"
                    >
                      <FaReply className="w-4 h-4" />
                      <span>Reply</span>
                    </button>
                  )}
                </div>
              </DropdownItem>
            ))}
          </div>

          {/* View All Link */}
          <Link
            to="/admin/notifications"
            onClick={() => {
              setIsOpen(false);
              setSelectedNotificationId(null);
            }}
            className="block p-3 text-center text-blue-600 hover:bg-gray-100 dark:text-blue-400 dark:hover:bg-gray-700 border-t dark:border-gray-700"
          >
            View All Notifications
          </Link>
        </div>
      )}
    </div>
  );
}
