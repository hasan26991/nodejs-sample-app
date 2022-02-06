const ajvInstance = require("./ajv-instance");

const schema = {
    type: "object",
    properties: {
        name: { type: "string" },
    },
    required: ["name"],
    additionalProperties: false
}

module.exports = ajvInstance.compile(schema)