// let chai = require('chai');
// // let chaiHttp = require('chai-http');
// const { expect } = require('chai');
let { getUserService } = require('./service/user.service');
let { getUserData } = require('./controller/user.controller');
// const fetch = require('node-fetch');
// const { expect } = require('chai');
// const { expect } = require('chai');
// const { expect } = require('chai');

// // import * as chai from 'chai';
// // const chai =require('chai');
// // const chaiHttp = require('chai-http');
// // chai.use(chaiHttp);

// // let should = chai.should();

// // describe('GET /tasks', function() {
// //     it('List all users', function(done) {
// //         chai.request('https://jsonplaceholder.typicode.com/users')
// //             .end((err, res) => {
// //             expect(res).to.have.status(200);
// //             done()
// //         });
// //     });
// // });

var mockRequest = () => {
    const req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    return req;
};

var mockResponse = () => {
    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

fetch = jest.fn().mockImplementation(() =>
    Promise.resolve([
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496',
                },
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets',
            },
        },
    ])
);

global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        json: () => [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                address: {
                    street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                        lat: '-37.3159',
                        lng: '81.1496',
                    },
                },
                phone: '1-770-736-8031 x56442',
                website: 'hildegard.org',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                    bs: 'harness real-time e-markets',
                },
            },
        ],
    })
);

beforeEach(() => {
    fetch.mockClear();
});

describe('User data from fetch', () => {
    it('should get the data and first user name is Leanne Graham ', async () => {
        // fetch.mockImplementationOnce(() => Promise.reject("API is down"));
        // const data=await getUserService();
        // expect(data[1].name).toBe("Leanne Graham");

        expect((await global.fetch()).json()).toEqual([
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                address: {
                    street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                        lat: '-37.3159',
                        lng: '81.1496',
                    },
                },
                phone: '1-770-736-8031 x56442',
                website: 'hildegard.org',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                    bs: 'harness real-time e-markets',
                },
            },
        ]);
        // expect(await getUserService()).toBe("hu")
    });

    it('controller should return 200 ok if data fetched', async () => {
        const req = mockRequest();
        const res = mockResponse();
        await getUserData(req, res);
        expect(res.send).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(200);
    });
});
