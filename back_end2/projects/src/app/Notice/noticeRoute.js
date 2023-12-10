module.exports = function(app){
    const notice = require('./noticeController');

    // 1. 모든 공지글 조회 API
    app.get('/app/:groupId/notices', notice.getNoticeList);

    // 2. 특정 공지글 조회 API
    app.get('/app/:groupId/notices/:noticeId', notice.getNotice);

    // 3. 새로운 공지글 등록 API
    app.post('/app/:groupId/notices', notice.postNotice);

    // 4. 공지글 수정 API
    app.patch('/app/notices', notice.patchNotice)
};


// TODO: 자동로그인 API (JWT 검증 및 Payload 내뱉기)
// JWT 검증 API
// app.get('/app/auto-login', jwtMiddleware, user.check);

// TODO: 탈퇴하기 API