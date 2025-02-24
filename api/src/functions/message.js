const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return {
            status: 200,
            headers: { "Content-Type": "application/json" }, // Ensure correct response type
            body: JSON.stringify({ body: "Enjoy the film sash and els!, keep painting fernando" }) // Change "body" key to "message"
        };
    }
});
