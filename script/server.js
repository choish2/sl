const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dataFile = 'data.json';

if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]), 'utf8');
    console.log(`${dataFile} 파일 생성 완료`);
}

app.post('/submit-inquiry', (req, res) => {
    try {
        const data = req.body;

        // ✅ 서버 시간(한국시간) 기록 추가
        const now = new Date();
        const timestamp = now.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
        data.timestamp = timestamp;

        console.log("받은 데이터:", data);

        const currentData = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
        currentData.push(data);

        fs.writeFileSync(dataFile, JSON.stringify(currentData, null, 2), 'utf8');

        res.json({ message: '폼 데이터 저장 완료!' });
    } catch (err) {
        console.error('JSON 저장 오류:', err);
        res.status(500).json({ error: '데이터를 저장하지 못했습니다.' });
    }
});

app.get('/data', (req, res) => {
    try {
        const currentData = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
        res.json(currentData);
    } catch (err) {
        console.error('JSON 파싱 오류:', err);
        res.status(500).json({ error: '데이터를 불러올 수 없습니다.' });
    }
});

app.listen(port, () => {
    console.log(`서버 열림 http://localhost:${port}`);
});
