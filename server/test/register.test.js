const app = require("../server.js");
const request = require("supertest");
const user = { id: 2, name: "test" }; ///fake info to test
const token = "somerandomtoken";
// describe('POST register user', function() {
//   it('it should return 201 OK',  async function() {
//   	// const res = await request(app)
//    //    .post('/api/register'
//    //    .send({
//    //    firstName: 'firstName',
//    //    lastName: 'lastName',
//    //    email: 'ooo@email.com',
//    //    password: 'thisisapassword123',
//    //  })
//    //  .set('Accept', 'application/json');
//      request(app)
//       .post('/api/register')
//       .send({
//       firstName: 'firstName',
//       lastName: 'lastName',
//       email: 'orieeb@email.com',
//       password: 'thisisapassword123',
//       })
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(201)
//       .end(function(err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });
//it...test
describe("POST register user", function () {
  it("it should return 201 OK", function (done) {
    request(app)
      .post("/api/register") //url
      .send({
        firstName: "firstName",
        lastName: "lastName",
        email: "orieb@email.com",
        password: "thisisapassword123",
      })
      .set("Accept", "application/json")
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        console.log(err, res);
        done();
      });
  });
});
