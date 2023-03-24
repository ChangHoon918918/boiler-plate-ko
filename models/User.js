const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 공백 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: Number,
        default: 0
    },
    role: { // 어떤 유저가 관리자도 될 수 있고, 일반유저도 될 수 있기 때문에 그 역할의 구분
        type: Number,
        default: 0
    },
    image: String,
    token: { // 유효성 관리
        type: String
    },
    tokenExp: { // 유효 기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)
module.exports = { User } // 다른 파일에서도 쓸 수 있게 해주는 것.