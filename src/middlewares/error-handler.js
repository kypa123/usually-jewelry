// 에러 미들웨어는 항상 (설령 안 쓰더라도)
// error~next의 4개 인자를 설정해 주어야 함.
function errorHandler(error, req, res, next) {
    let err = res.locals.error;
    if (err.status >= 100 && err.status < 600) {
        // 터미널에 노란색으로 출력됨.
        console.log('\x1b[33m%s\x1b[0m', error.stack);

        // 에러는 400 코드의 JSON 형태로 프론트에 전달됨
        res.status(error.status).json({
            result: 'error',
            reason: error.message,
        });
    } else {
        // 터미널에 노란색으로 출력됨.
        console.log('\x1b[33m%s\x1b[0m', error.stack);

        // 에러는 400 코드의 JSON 형태로 프론트에 전달됨
        res.status(500).json({ result: 'error', reason: error.message });
    }
}

export { errorHandler };
