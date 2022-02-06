const ajvInstance = require("./ajv-instance");

const schema = {
    type: "object",
    properties: {
        username: { type: "string" },
        password: { type: "string" }
    },
    required: ["username", "password"],
    additionalProperties: false
}

module.exports = ajvInstance.compile(schema)