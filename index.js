const express = require('express') //express모듈 가져오기
const app = express() // express함수를 이용해서 새로운 앱 만들기
const port = 5000 // 5000번 포트를 백엔드 서버로 둠
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://KCH:gch918918!@cluster0.xiijor4.mongodb.net/?retryWrites=true&w=majority', {
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 6.0 버전 이상에선 안 써도 됨
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => { //루트 디렉토리에 helloworld 출력
  res.send('Hello World! 안냐세요')
})

app.listen(port, () => { //5000번 포트에서 실행(듣는다)
  console.log(`Example app listening on port ${port}`)
})