import { useState } from 'react';

export const  ValidateLogin = ({ email, password }) => {
    let error = '';
    if (!email && !password) return error = 'Vui lòng nhập đầy đủ thông tin!'
    if (!email) return error = 'Vui lòng nhập email!'
    if (!password) return error = 'Vui lòng nhập mật khẩu!'
    return error;
}

export const  ValidateRegister = ({ firstName, lastName, username, email, password }) =>{
    let error = '';
    if (!firstName && !lastName && !username && !email && !password) return error = 'Vui lòng nhập đầy đủ thông tin!'
    if (!firstName) return error = 'Vui lòng nhập họ!'
    if (!lastName) return error = 'Vui lòng nhập tên!'
    if (!username) return error = 'Vui lòng nhập tên đăng nhập!'
    if (!email) return error = 'Vui lòng nhập email!'
    if (!password) return error = 'Vui lòng nhập mật khẩu!'
    return error;
}
