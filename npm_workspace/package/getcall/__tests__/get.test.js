const request = require('supertest');
const {app}=require('../index.js');
const {employeeModel}=require("@npm_workspace/postcall");


describe('test for get api using supertest',()=>{
    test('200Ok',async () => {
        // const a=await app.get("/get")
        // console.log(ac);
        // expect(1+2).toBe(3);
        const mResponse = { code: 200, data: 'mocked data' };
        // const mEvent = { id: 1 };
        jest.spyOn(app,'get').mockResolvedValueOnce(mResponse);
        const res = await request(app).get('/get');
        console.log(res.body);
        expect(res.statusCode).toEqual(200);
        expect(res.body[0]).toHaveProperty('name');
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    test('missing parameter',async()=>{
      const value=await request(app).get("/get");
      console.log(value)
    })
    
});

const mockGet = jest.fn();

describe('get api', () => {
  it('calls express get api', () => {
    mockGet.mockReturnValueOnce({
      status: 200,
      data: {
        title: 'mock data',
        description: 'this is a mock data',
      },
    });
    // expect(mockGet).toHaveBeenCalledWith('/get');
    mockGet();
    expect(mockGet).toHaveReturnedWith({
      status: 200,
      data: {
        title: 'mock data',
        description: 'this is a mock data',
      },
    });
  });
});



// describe('getapi test',()=>{
//     it('verifies successful response', async () => {



//         // const mResponse = { code: 200, data: 'mocked data' };
//         // const mEvent = { id: 1 };
//         // jest.spyOn(app, 'lambdaHandler').mockResolvedValueOnce(mResponse);
//         // const result = await app.lambdaHandler(event, context)

//         // console.log(result);
//         // expect(result.code).to.equal(200);
//         // expect(result.data).to.equal('mocked data');

//         // expect(result.body).to.be.an('string');

//         // let response = JSON.parse(result.body);

//         // expect(response).to.be.an('object');
//         // expect(response.message).to.be.equal("hello world");
//         // expect(response.location).to.be.an("string");
//     });
// });