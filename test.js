const funcs = require('./fn');
const request = require('./api/no')


describe('Test the addLike method', () => {
    beforeAll(() => {
        mongoDB.connect();
    });
    afterAll((done) => {
        mongoDB.disconnect(done);
    });
})
