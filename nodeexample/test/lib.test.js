let { expect } = require('chai');
let { forEach, filter } = require('../src/lib');

//Test Suite
describe("Testing lib module", () => {
    it("testing forEach", () => {
        const action = jest.fn(); //mock function
        forEach([3, 1, 5, 2, 4], action);
        //Check "Arguments"
        console.log(action.mock.calls);
        expect(action.mock.calls.length).to.equal(5);
        expect(action.mock.calls[0][0]).to.equal(3);
        expect(action.mock.calls[1][0]).to.equal(1);
    });
    it("testing filter", () => {
        const predicate = jest.fn(x => x % 2 === 0);
        var res = filter([3, 1, 5, 2, 4], predicate);
        expect(res.length).to.equal(2);
    });
})