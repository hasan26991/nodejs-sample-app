const ajvInstance = require("./ajv-instance");

const schema = {
    type: "object",
    properties: {
        title: { type: "string" },
        desc: { type: "string" },
        photo: { type: "string" },
        username: { type: "string" }
    },
    required: ["title", "desc", "username"],
    additionalProperties: false
}

module.exports = ajvInstance.compile(schema)