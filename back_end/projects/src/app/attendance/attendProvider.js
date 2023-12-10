const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const attendDao = require("./attendDao");

// Provider: Read 비즈니스 로직 처리

// 출결 조회 
exports.attendUserList = async function (groupId, scheduleId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const attendListResult = await attendDao.selectAttend(connection, groupId, scheduleId);
    connection.release();

    return attendListResult;
};
