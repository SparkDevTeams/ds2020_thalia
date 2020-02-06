import request from 'supertest'
import app from '../app.js';

test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
});

© 2020 GitHub, Inc.
