const axios = require('axios');
const functions = {
        getNotification: async () => {
        const Notification = await axios.get('http://localhost:3000/api/notifications/')
        return Notification
        },
	
        
};
module.exports = functions;
