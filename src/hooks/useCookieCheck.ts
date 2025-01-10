import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetUserInfo } from '../store/slices/userSlice';
import Cookies from 'js-cookie';

export default function useCookieCheck() {
    const dispatch = useDispatch();

    useEffect(() => {
        const accessToken = Cookies.get('accessToken');
        const refreshToken = Cookies.get('refreshToken');

        console.log(accessToken);

        // Kiểm tra cookie (thay đổi điều kiện này tùy vào cấu trúc cookie của bạn)
        if (!accessToken || !refreshToken) {
            // Nếu không có cookie, reset thông tin người dùng
            dispatch(resetUserInfo());
        }
    }, [dispatch]);
}