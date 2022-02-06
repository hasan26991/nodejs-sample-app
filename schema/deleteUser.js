const ajvInstance = require("./ajv-instance");

const schema = {
    type: "object",
    properties: {
        userId: { type: "string" }
    },
    required: ["userId"],
    additionalProperties: false
}

module.exports = ajvInstance.compile(schema)