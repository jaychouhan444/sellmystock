const bcrypt = require('bcryptjs');






module.exports={




     hashPassword(password, cb) {
        // Generate a salt at level 10 strength
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            return cb(err, hash);
          });
        });
      }

    }