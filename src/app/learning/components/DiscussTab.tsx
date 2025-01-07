"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { vi } from 'date-fns/locale';

import { RootState } from '@/store';

import { BiLike } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { RiWechatLine } from "react-icons/ri";

import { getAllComments } from '@/api/comment.api';
import { createComment, createReply } from '@/api/comment.api';

export default function DiscussTab({ courseId }: { courseId: string }) {
    const [commentContent, setCommentContent] = useState("")
    const [comments, setComments] = useState([{
        _id: "",
        userId: {
            avatar: "",
            fullName: ""
        },
        commentContent: "",
        replyComment: [{
            _id: "",
            replyContent: "",
            userId: {
                avatar: "",
                fullName: ""
            },
            reply_date: ""
        }],
        commentedDate: "",
        number_of_like: 0
    }])
    const [replyContent, setReplyContent] = useState("");
    const [replyingTo, setReplyingTo] = useState<string | null>(null);

    const { userInfo } = useSelector((state: RootState) => state.user)

    useEffect(() => {
        fetchAllComments();
    }, []);

    const timeAgo = (dateString: string) => {
        if (!dateString) return "Ngày không hợp lệ"; // Kiểm tra nếu dateString không có giá trị
        const date = parseISO(dateString);

        // Kiểm tra nếu date là một giá trị hợp lệ
        if (isNaN(date.getTime())) return "Ngày không hợp lệ";

        // Sử dụng locale tiếng Việt để định dạng thời gian
        const distance = formatDistanceToNow(date, {
            addSuffix: true,
            locale: vi, // Sử dụng locale tiếng Việt
        });

        // Điều chỉnh để hiển thị "less than a minute ago" cho trường hợp quá ngắn
        if (distance.includes('less than')) {
            return 'Ít hơn một phút trước';
        }

        return distance;
    };

    const fetchAllComments = async () => {
        try {
            const data = await getAllComments(courseId);
            setComments(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Failed:', error.message);
            } else {
                console.error('Failed with an unknown error');
            }
        }
    };

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentContent(e.target.value);
    };

    const handleReplyClick = (commentId: string) => {
        // Nếu bấm nút trả lời cho cùng một bình luận, ẩn ô input
        if (replyingTo === commentId) {
            setReplyingTo(null);
        } else {
            setReplyingTo(commentId);
        }
    };

    const handleReplySubmit = async (commentId: string) => {
        if (!replyContent.trim()) return;

        try {
            await createReply(commentId, replyContent)
            fetchAllComments();
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Failed:', error.message);
            } else {
                console.error('Failed with an unknown error');
            }
        }

        setReplyContent(""); // Xóa nội dung phản hồi sau khi gửi
        setReplyingTo(null); // Đóng ô nhập liệu
    };

    const handleSubmitComment = async () => {
        if (!commentContent.trim()) return;

        try {
            await createComment(courseId, commentContent)
            setCommentContent("");
            fetchAllComments();
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Failed:', error.message);
            } else {
                console.error('Failed with an unknown error');
            }
        }
    }

    return (
        <div className='py-5 flex flex-col gap-6'>
            <div className='flex flex-col gap-2.5'>
                <button className='flex items-center w-max gap-2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-sm text-sm px-4 py-2'>
                    <FaPlus />
                    Đặt câu hỏi mới
                </button>
                <textarea
                    name="" id="" rows={3}
                    className='border border-gray-300 p-2.5 outline-none rounded-sm'
                    placeholder='Nhập bình luận mới của bạn'
                    value={commentContent}
                    onChange={handleTextareaChange}
                ></textarea>
                <button className='text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-sm text-sm px-4 py-2 self-end' onClick={handleSubmitComment}>
                    Gửi phản hồi
                </button>
            </div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='md:col-span-4 col-span-6'>
                    <div className='py-2.5 px-5 items-center rounded-sm shadow bg-white flex justify-between cursor-pointer'>
                        Tất cả các bài giảng
                        <IoIosArrowDown size={16} />
                    </div>
                </div>
                <div className='md:col-span-4 col-span-6'>
                    <div className='py-2.5 px-5 items-center rounded-sm shadow bg-white flex justify-between cursor-pointer'>
                        Gần đây nhất
                        <IoIosArrowDown size={16} />
                    </div>
                </div>
                <div className='col-span-6 md:col-span-4'>
                    <div className='py-2.5 px-5 items-center rounded-sm shadow bg-white flex justify-between cursor-pointer'>
                        Lọc câu hỏi
                        <IoIosArrowDown size={16} />
                    </div>
                </div>
            </div>
            <div>
                <div className='text-black text-lg font-medium mb-4'>
                    {`Tất cả thảo luận trong khóa học này (${comments.reduce(
                        (total, comment) => total + (comment.replyComment?.length || 0),
                        comments.length
                    )})`}
                </div>
                <div className='flex flex-col gap-6'>
                    {comments.map((comment, index) => (
                        <div key={index} className='flex gap-4'>
                            <img src={comment?.userId.avatar} alt="" className='w-10 h-10 rounded-full object-cover object-center overflow-hidden' />
                            <div className='flex-1 flex flex-col gap-1.5'>
                                <div className='text-black text-base font-medium'>{comment.userId.fullName}</div>
                                <div className='text-black text-base font-light break-all'>
                                    <p>{comment?.commentContent}</p>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <div className='justify-start items-center gap-2 inline-flex'>
                                        <button className='text-blue-500 text-sm font-medium'>Thích</button>
                                        <button className='text-blue-500 text-sm font-medium' onClick={() => handleReplyClick(comment._id)}>Trả lời</button>
                                        <button className='text-blue-500 text-sm font-medium'>Theo dõi thảo luận</button>
                                        <div className='text-neutral-400 text-sm font-normal'>{timeAgo(comment.commentedDate)}</div>
                                    </div>
                                    <div className='inline-flex justify-start items-center gap-2'>
                                        <BiLike />
                                        <span>{comment.number_of_like}</span>
                                        <RiWechatLine />
                                        <span>{comment.replyComment.length}</span>
                                    </div>
                                </div>
                                {(comment?.replyComment.length > 0 || replyingTo === comment._id) && (
                                    <div className='bg-slate-200 shadow-custom'>
                                        {comment?.replyComment.map((reply, index) => (
                                            <div key={index} className='flex gap-4 p-4'>
                                                <img src={reply.userId.avatar} alt="" className='w-8 h-8 rounded-full object-cover object-center' />
                                                <div className='flex-1 flex flex-col gap-1.5'>
                                                    <div className='text-black text-base font-medium'>{reply.userId.fullName}</div>
                                                    <div className='text-black text-base font-light break-all'>
                                                        <p>{reply.replyContent}</p>
                                                    </div>
                                                    <div className='flex justify-between w-full items-center'>
                                                        <div className='justify-start items-center gap-2 flex'>
                                                            <button className='text-blue-500 text-sm font-medium'>Thích</button>
                                                            <div className='text-neutral-400 text-sm font-normal'>{timeAgo(reply.reply_date)}</div>
                                                        </div>
                                                        <div className='inline-flex justify-start items-center gap-2'>
                                                            <BiLike />
                                                            <span>0</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {replyingTo === comment._id && (
                                            <div className="flex gap-4 p-4">
                                                <img src={userInfo?.avatar} alt="" className='w-8 h-8 rounded-full object-cover object-center' />
                                                <div className='flex-1 flex flex-col gap-1.5'>
                                                    <textarea
                                                        className="border border-gray-300 p-2.5 outline-none rounded-sm"
                                                        rows={3}
                                                        placeholder="Nhập phản hồi của bạn"
                                                        value={replyContent}
                                                        onChange={(e) => setReplyContent(e.target.value)}
                                                    ></textarea>
                                                    <div className="flex justify-end gap-2">
                                                        <button
                                                            className="text-white bg-gray-500 hover:bg-gray-600 font-medium rounded-sm text-sm px-4 py-2"
                                                            onClick={() => setReplyingTo(null)}
                                                        >
                                                            Hủy bỏ
                                                        </button>
                                                        <button
                                                            className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-sm text-sm px-4 py-2"
                                                            onClick={() => handleReplySubmit(comment._id)}
                                                        >
                                                            Gửi phản hồi
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
