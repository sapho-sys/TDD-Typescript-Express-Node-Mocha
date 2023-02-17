 import  Request  from "supertest";
 import  expect  from "chai";

import createServer from "server";
const app = createServer()
 describe('server check',  () =>{
    it('server is created without error', (done) =>{
        Request(app).get('/').expect(200, done);
        // console.log("Hello World!");

    });

  });