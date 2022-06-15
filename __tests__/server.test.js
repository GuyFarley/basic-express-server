'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server.app);

describe('Server Tests', () => {
    describe('Error Handler Tests', () => {
        test('404 on a bad route', async () => {
            let response = await mockRequest.get('/foo');
            expect(response.status).toEqual(404);
            expect(response.text).toEqual('Not Found');
        });
        test('404 on a bad method', async () => {
            let response = await mockRequest.put('/person');
            expect(response.status).toEqual(404);
            expect(response.text).toEqual('Not Found');
        });
    });
    describe('GET routes Tests', () => {
        test('/person route works with name in query string', async () => {
            let response = await mockRequest.get('/person?name=Guy');
            expect(response.status).toEqual(200);
            expect(response.body.name).toEqual("Guy");
        });
    });
});
