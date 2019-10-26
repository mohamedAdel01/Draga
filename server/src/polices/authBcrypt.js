const bcrypt = require('bcrypt');
const saltRounds = 10;

let hashPassword = password => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if(err) reject(err)

            resolve(hash)
      });
    })
}

let comparePassword = password => {
    return new Promice((resolve, reject) => {
        bcrypt.compare(password, hash, function(err, res) {
            if(err) reject(err)

            resolve(res)
        });
    })
}

module.exports = {hashPassword, comparePassword}