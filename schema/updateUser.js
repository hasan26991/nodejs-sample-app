const ajvInstance = require("./ajv-instance");

const schema = {
    type: "object",
    properties: {
        userId: { type: "string" },
        username: { type: "string" },
        email: { type: "string" },
        password: { type: "string" }
    },
    required: ["userId", "username", "email", "password"],
    additionalProperties: false
}

module.exports = ajvInstance.compile(schema)