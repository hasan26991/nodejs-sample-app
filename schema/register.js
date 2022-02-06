const ajvInstance = require("./ajv-instance");

const schema = {
    type: "object",
    properties: {
        username: { type: "string" },
        email: { type: "string" },
        password: { type: "string" }
    },
    required: ["username", "email", "password"],
    additionalProperties: false
}

module.exports = ajvInstance.compile(schema)