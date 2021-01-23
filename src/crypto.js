//process.env.UV_THREADPOOL_SIZE = 4; // default 4

const crypto = require("crypto");

const NUM_REQUESTS = 6;

const start = Date.now();

for (let i = 0; i < NUM_REQUESTS; i++) {
  crypto.pbkdf2("secret", "salt", 100000, 512, "sha512", () => {
    console.log(Date.now() - start);
  });
}
