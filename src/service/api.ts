import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fcm.googleapis.com/fcm/'
})

console.log(`key=${process.env.REACT_FCM_KEY}`);

api.defaults.headers.authorization = `key=AAAAXY3ptnk:APA91bFfIJ6PdMDiCpKD_rB3F_VI2J5Q92GLtosTTxujqIi5hC0NkV2dinJ2JQT5oSpjjoS6Skn_8zlSTZozeWsh1jexe9WBfMS2eFwYRP8_kRHf7PrOS4PnWlv_nptHqIOGQS5H9VoG`;
api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;