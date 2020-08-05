const JWT = require('jsonwebtoken');
// create mock function for jwt generator
function getJWT () {
 return JWT.sign({ userId: 1 }, 'this is secret key', {
    expiresIn: '1d',
  })
}
describe('it should return jwt', () => {
	it('jwt function not to return null', () => {
		expect(getJWT()).not.toBeNull();
	});
	it('jwt function not to return undefined', () => {
		expect(getJWT()).not.toBeUndefined();
	});
}); 