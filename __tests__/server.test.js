'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

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
        test('/hello route works with no query parameter', async () => {
            let response = await mockRequest.get('/person');
            expect(response.status).toEqual(200);
            expect(response.text).toEqual('Simply Hello');
        });
        test('/hello route works with query parameter', async () => {
            let response = await mockRequest.get('/person?name=Guy');
            expect(response.status).toEqual(200);
            expect(response.text).toEqual('Personal Greetings Guy');
        });
        test('/hello route works with URL/path parameter', async () => {
            let response = await mockRequest.get('/person/Guy');
            expect(response.status).toEqual(200);
            expect(response.text).toEqual('Hello Guy, from us personally');
        });
    });
});
