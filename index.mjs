import bcrypt from 'bcrypt'

const userInputPassword = "password123"

const passwordHashed = {
    hash1: "$2y$10$odjvTUH86JeNhe.JVd4W7.otn0mPP4iMHXpeMgLza/eRfqC.iXmAa"
}

const hashed = bcrypt.hashSync(userInputPassword, 10);

// cool built-in method in bcrypt that does a boolean to verify password and its supposed hash
// since u cant reverse a hash, the method hashes the original password and then compares to the hash
const matchTest = bcrypt.compareSync(userInputPassword, passwordHashed.hash1);

console.log(hashed);
// $2b$10$BQS4SVZIgCHG70igI13fvOs1p2hvzPIdW6RXMGkSMpL2oAFflDEyC
console.log(passwordHashed.hash1);
// $2y$10$odjvTUH86JeNhe.JVd4W7.otn0mPP4iMHXpeMgLza/eRfqC.iXmAa