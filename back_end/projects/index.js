const express = require('./config/express');
const { logger } = require('./config/winston');

const port = 3000;
const endpointPath = '/app/1/1/mypage'; // 마이페이지 조회 API
const serverURL = `http://34.64.116.143${endpointPath}`;

express().listen(port);

logger.info(`${process.env.NODE_ENV} - API Server Start At ${serverURL}:${port}`);
