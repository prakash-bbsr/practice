/*const crypto = require('crypto');

//definition of hash password
function hashPassword(password){
    //Create a salt string
    const salt = crypto.randomBytes(16).toString('hex');
    //Create a has object
    const hash = crypto.createHash('sha256');
    //Update the hash object with the salt and password
    hash.update(salt + password);

    //Get the hashed data in a hexadecimal string
    const hexHash = hash.digest("hex");
    //Return and hashed password as a string
    return salt+ "." + hexHash
}

console.log(hashPassword('prakash')); */

/*const bcrypt = require('bcrypt');

async function createPassword(password) {
    return await bcrypt.hash(password, 12);
}

async function verifyPassword(password, hashPassword) {
    return await bcrypt.compare(password, hashPassword);
}

async function main() {
    const hashPassword = await createPassword('prakash');

    console.log(hashPassword);
    console.log(await verifyPassword('prakash', hashPassword));
}

main();*/

/*const bcrypt = require('bcrypt');

async function main() {
    const password = 'prakash';
    const hash = await bcrypt.hash(password, 12);
    const match = await bcrypt.compare(password, hash);
}
main();*/

//Using argon2
//npm install argon2

const argon2 = require('argon2');
(async () => {
    const password = 'prakash';

    const hash = await argon2.hash(password);
    const match = await argon2.verify(hash, password);

    console.log(hash, match);
})();
