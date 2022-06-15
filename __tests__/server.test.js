'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Server Tests', () => {
    describe('Error Handler Tests', () => {
        test('404 on a bad route', async () => {
            let response = await mockRequest.get('/fake');
            expect(response.status).toEqual(404);
            expect(response.text).toEqual('Not Found');
        });
        test('404 on a bad method', async () => {
            let response = await mockRequest.put('/person');
            expect(response.status).toEqual(404);
            expect(response.text).toEqual('Not Found');
        });
    });
});
