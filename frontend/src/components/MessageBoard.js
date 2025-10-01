import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { FaPaperPlane, FaUser, FaUserTie, FaTrash } from 'react-icons/fa';
import api from '../services/api';

const MessageBoard = ({ isHostMode }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMessages();
    // Refresh messages every 30 seconds
    const interval = setInterval(fetchMessages, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
      const data = await api.getMessages();
      setMessages(data);
    } catch (err) {
      console.error('Error fetching messages:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setLoading(true);
    setError('');

    try {
      const messageData = {
        content: newMessage.trim(),
        sender_type: isHostMode ? 'host' : 'visitor',
        sender_name: senderName.trim() || 'Anonymous'
      };

      const createdMessage = await api.createMessage(messageData);
      setMessages([createdMessage, ...messages]);
      setNewMessage('');
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending message:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (messageId) => {
    if (!isHostMode) return;
    
    try {
      await api.deleteMessage(messageId);
      setMessages(messages.filter(msg => msg.id !== messageId));
    } catch (err) {
      console.error('Error deleting message:', err);
    }
  };

  const formatTimestamp = (timestamp) => {
    try {
      return format(new Date(timestamp), 'MMM dd, yyyy HH:mm');
    } catch {
      return 'Unknown time';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
        {/* Contact Info */}
        <div className="mb-6 text-center">
          <p className="text-gray-200 mb-2">
            Feel free to leave a message or contact me directly:
          </p>
          <div className="flex justify-center space-x-6 text-cyan-400">
            <a href="mailto:ysy020625@gmail.com" className="hover:text-cyan-300">
              ysy020625@gmail.com
            </a>
            <span className="text-gray-400">|</span>
            <a href="tel:0273323518" className="hover:text-cyan-300">
              027 332 3518
            </a>
          </div>
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name (optional)"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              maxLength={50}
            />
            <div className="flex items-center px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg">
              {isHostMode ? (
                <><FaUserTie className="text-yellow-400 mr-2" /> <span className="text-yellow-400">Host Mode</span></>
              ) : (
                <><FaUser className="text-cyan-400 mr-2" /> <span className="text-cyan-400">Visitor</span></>
              )}
            </div>
          </div>
          
          <div className="flex gap-4">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              rows="3"
              maxLength={500}
            />
            <button
              type="submit"
              disabled={loading || !newMessage.trim()}
              className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors flex items-center"
            >
              <FaPaperPlane className={loading ? 'animate-pulse' : ''} />
            </button>
          </div>
          
          {error && (
            <p className="mt-2 text-red-400 text-sm">{error}</p>
          )}
        </form>

        {/* Messages List */}
        <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
          {messages.length === 0 ? (
            <p className="text-center text-gray-400 py-8">
              No messages yet. Be the first to leave a message!
            </p>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded-lg ${
                  message.sender_type === 'host'
                    ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30'
                    : 'bg-white/5 border border-cyan-500/20'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    {message.sender_type === 'host' ? (
                      <FaUserTie className="text-yellow-400 mr-2" />
                    ) : (
                      <FaUser className="text-cyan-400 mr-2" />
                    )}
                    <span className={`font-semibold ${
                      message.sender_type === 'host' ? 'text-yellow-400' : 'text-cyan-400'
                    }`}>
                      {message.sender_name} {message.sender_type === 'host' && '(Host)'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 text-sm">
                      {formatTimestamp(message.timestamp)}
                    </span>
                    {isHostMode && (
                      <button
                        onClick={() => handleDelete(message.id)}
                        className="ml-2 text-red-400 hover:text-red-300 transition-colors"
                      >
                        <FaTrash size={14} />
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-gray-200 whitespace-pre-wrap">{message.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBoard;