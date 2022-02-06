const ajvInstance = require("./ajv-instance");

const schema = {
    type: "object",
    properties: {
        username: { type: "string" }
    },
    required: ["username"],
    additionalProperties: false
}

module.exports = ajvInstance.compile(schema)