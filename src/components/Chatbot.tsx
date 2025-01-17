'use client';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import { MdSend } from "react-icons/md";
import { IoLogoWechat, IoClose } from 'react-icons/io5';

import { chatWithGemini, getChatWithGemini } from '@/api/chatbot.api';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([{
        role: "",
        message: "",
    }]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Trạng thái đang xử lý
    const { userInfo } = useSelector((state: RootState) => state.user);

    const lastMessageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Cuộn đến tin nhắn cuối cùng khi danh sách tin nhắn thay đổi hoặc khi mở
        if (isOpen && lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isOpen]);

    const fetchData = async () => {
        try {
            if (userInfo) {
                const data = await getChatWithGemini();
                setMessages(data);
            }
        } catch (error) {
            console.error('Failed:', error instanceof Error ? error.message : 'Unknown error');
        }
    };

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        // Hiển thị tin nhắn của người dùng trước
        const userMessage = {
            role: "INSTRUCTOR",
            message: inputMessage.trim(),
        };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInputMessage(''); // Xóa input ngay lập tức

        try {
            setIsLoading(true); // Hiển thị trạng thái đang xử lý
            await chatWithGemini(userMessage.message); // Gửi yêu cầu lên BE
            await fetchData(); // Lấy lại danh sách tin nhắn
        } catch (error) {
            console.error('Failed:', error instanceof Error ? error.message : 'Unknown error');
        } finally {
            setIsLoading(false); // Kết thúc trạng thái xử lý
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <>
            <div className="fixed bottom-4 right-4 z-50" onClick={() => setIsOpen(!isOpen)}>
                <div className="w-14 h-14 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-teal-500 cursor-pointer hover:scale-105 transition-transform">
                    {isOpen ? <IoClose size={32} color="white" /> : <IoLogoWechat size={32} color="white" />}
                </div>
            </div>

            {isOpen && (
                <div className="fixed bottom-4 right-20 w-96 h-[650px] bg-[#f1f5f8] rounded-lg shadow-lg flex flex-col z-[2000]">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-t-lg flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/007/225/199/small_2x/robot-chat-bot-concept-illustration-vector.jpg"
                                alt="EduChat"
                                className="w-10 h-10 rounded-full shadow"
                            />
                            <h4 className="text-lg font-semibold">EduChat</h4>
                        </div>
                        <button className="w-8 h-8 flex items-center justify-center bg-white text-blue-600 rounded-full hover:bg-gray-400" onClick={() => setIsOpen(false)}>
                            <IoClose size={20} />
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        {messages.map((chat, index) => (
                            <div
                                key={index}
                                ref={index === messages.length - 1 ? lastMessageRef : null} // Gán ref cho tin nhắn cuối cùng
                                className={`flex gap-2 ${chat?.role === 'INSTRUCTOR' || chat?.role === 'LEARNER' ? 'flex-row-reverse' : ''} items-start`}
                            >
                                <img
                                    src={
                                        chat?.role === 'INSTRUCTOR' || chat?.role === 'LEARNER'
                                            ? `${userInfo?.avatar}`
                                            : 'https://static.vecteezy.com/system/resources/thumbnails/007/225/199/small_2x/robot-chat-bot-concept-illustration-vector.jpg'
                                    }
                                    alt="Avatar"
                                    className="w-8 h-8 rounded-full shadow object-cover"
                                />
                                <div className={`max-w-[70%] ${chat?.role === 'INSTRUCTOR' ? 'text-right' : ''}`}>
                                    <p className={`py-2 px-2.5 text-sm rounded-lg ${chat?.role === 'INSTRUCTOR' ? 'bg-blue-500 text-white' : 'bg-gray-300 '}`}>
                                        {chat?.message}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="text-sm text-gray-500">Đang xử lý...</div>
                        )}
                    </div>

                    <div className="border-t border-gray-300 p-2 flex items-center gap-1.5">
                        <input
                            type="text"
                            placeholder="Viết gì đó..."
                            className="flex-1 p-2 border text-sm border-gray-300 outline-none"
                            value={inputMessage}
                            onKeyDown={handleKeyPress}
                            onChange={(e) => setInputMessage(e.target.value)}
                        />
                        <button className="p-2 bg-blue-600 border border-gray-300 flex items-center text-sm gap-1.5 text-white hover:bg-blue-700" onClick={handleSendMessage}>
                            Gửi
                            <MdSend size={18} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
