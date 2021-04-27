'use strict';

const {server} = require('../src/server.js');
// const supertest = require('supertest');


const supergoose = require('@code-fellows/supergoose'); // this pulls in and configures and runs mongo memory server and supertest
const mockRequest = supergoose(server);

describe('auth system', () => {



    it('should create a new user to the DB', async () => {
        const user = await mockRequest.post('/signup').send({ username: "Test1", password: "testMan1" })
        expect(user.status).toBe(201);
      });

      it('should login to a user profile', async () => {
        const test = await mockRequest.post('/signup').send({ username: "TestTarget", password: "testMan1" })
        const user = await mockRequest.post('/login').send({ username: "TestTarget", password: "TestMan1"})
        console.log(test._data);
        expect(user.status).toBe(201);
        // expect(test.username).toEqual("TestTarget")
      });

})