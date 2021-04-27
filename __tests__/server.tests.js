'use strict';

const {server} = require('../src/server.js');
// const supertest = require('supertest');
const { expect } = require('@jest/globals');

const supergoose = require('@code-fellows/supergoose'); // this pulls in and configures and runs mongo memory server and supertest
const mockRequest = supergoose(server);

describe('auth system', () => {
    const user1 = { username: "Test1", password: "testMan1" };
    const user2 = { username: "TestTarget", password: "testMan1" }

    beforeAll(async()=>{
        await mockRequest.post("/signup").send(user1)
        await mockRequest.post("/signup").send(user2)
    })


    it('should create a new user to the DB', async () => {
        const user = await mockRequest.post('/signup').send({ username: "Test3", password: "testMan3" })
        console.log("new user: ", user)
        expect(user.status).toBe(201);
      });

      it('should login to a user profile', async () => {
        const user = await mockRequest.post('/login').send({ username: "TestTarget", password: "TestMan1"})
        expect(user.status).toBe(200);
        // expect(test.username).toEqual("TestTarget")
      });

      it('should not like header with bad auth', async () => {
        const user = await mockRequest.post('/login').auth({ username: "badman", password: "badtime"})
        expect(user.status).toBe(403);
        // expect(test.username).toEqual("TestTarget")
      });

})