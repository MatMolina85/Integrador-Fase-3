import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8080;

const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MEM';
const STRCNX = process.env.STRCNX || 'mongodb://127.0.0.1';
const BASE = process.env.BASE || 'test';
const FTP_HOST = process.env.FTP_HOST || '';
const FTP_USER = process.env.FTP_USER || '';
const FTP_PASS = process.env.FTP_PASS || '';

export default {
    MODO_PERSISTENCIA,
    PORT,
    STRCNX,
    BASE,
    FTP_HOST,
    FTP_USER,
    FTP_PASS,
};
