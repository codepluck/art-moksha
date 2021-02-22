"use strict";

const PUBLIC_PATH = path.resolve(__dirname, "build");
const PORT = parseInt(process.env.PORT || "3000", 10)
const PUBLIC_URL = process.env.PUBLIC_URL || `http://localhost:${PORT}`;
