const request = require('supertest');
const app = require('../app');

describe('DELETE /dishes/:dishname', () =>
{
    it('should delete a dish', async () =>
    {
        await request(app)
        // Making a dish so it can be deleted later
        .post('/dishes')
        // The dish-name and country
        .send({ name: 'TestDish', country: 'Testland'});

        // Testing the delete. Deleting the dish that was made
        const deleteResponse = await request(app)
        .delete('/dishes/TestDish');

        // Expecting the status to be 200 OK
        expect(deleteResponse.statusCode).toBe(200);
        // Expecting one deleted element
        expect(deleteResponse.body.deleted).toBe(1);

        // Cheking if the dish is actually deleted with a get-request
        const getResponse = await request(app)
        .get('/dishes/TestDish');

        // Expecting the GET-request to have a body-length of 0
        expect(getResponse.body.length).toBe(0);
    });
});