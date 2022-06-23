const passwordHash = require('password-hash')

const users = [
    {
        name: 'John Doe',
        password: passwordHash.generate('12345'),
        role: 'Admin',
        accessToken: 55678
    },
    {
        name: 'Rijal Permana M.',
        password: passwordHash.generate('334455'),
        role: 'Guest',
        accessToken: 23156
    },
    {
        name: 'Muh. Al-Fatih',
        password: passwordHash.generate('112233'),
        role: 'User',
        accessToken: 728196
    }
]

const getUser = (value, findBy = 'name') => users.find((user) => user[findBy] == value)

const verifyPasswordUser = (newPassword, hashedPassword) => passwordHash.verify(newPassword, hashedPassword)

module.exports = { users, getUser, verifyPasswordUser }