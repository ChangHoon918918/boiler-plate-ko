const express = require('express') //express모듈 가져오기
const app = express() // express함수를 이용해서 새로운 앱 만들기
const port = 5000 // 5000번 포트를 백엔드 서버로 둠
const { User } = require("./models/User")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/key');


app.use(bodyParser.urlencoded({extended: true})); // application/x-www-form-urlencoded 라는 데이터를 분석해서 가져올 수 있게 해주는 것
app.use(bodyParser.json()); // application/json 라는 데이터를 분석해서 가져올 수 있게 해주는 것

mongoose.connect(config.mongoURI, {
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 6.0 버전 이상에선 안 써도 됨
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))


app.post('/register', (req, res) => {// 엔드 포인트는 /register, req는 요청 객체, res는 응답 객체
    //회원가입 할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body) //새로운 User 인스턴스를 생성, req.body안에는 json형식이 들어있음(이는 body-parser가 json형식으로 받을 수 있게 해줬기 때문)
    user.save().then(()=>{
        res.status(200).json({
            success: true
        })
    }).catch((err)=> {
        res.json({success: false, err})
    })
})




// 가장 기본적인 라우터(통신이 잘 되었는지 테스트 하는 것.)
app.get('/', (req, res) => { //루트 디렉토리에 helloworld 출력
  res.send('Hello World! 안냐세요!!!')
})

app.listen(port, () => { //5000번 포트에서 실행(듣는다)
  console.log(`Example app listening on port ${port}`)
})