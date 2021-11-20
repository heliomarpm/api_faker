// https://github.com/typicode/json-server

module.exports = () => {
    const faker = require('faker');
    const _ = require('lodash');

    return {
        contact: _.times(10, () => {
            return {
                name: faker.name.findName(),
                email: faker.internet.email(),
                contact: faker.phone.phoneNumber(),
                createdAt: faker.date.past(),
            }
        }),
        transaction: _.times(10, () => {
            return {
                id: faker.random.uuid(),
                value: faker.random.number(),
                contact: {
                    name: faker.name.findName(),
                    accountNumber: faker.finance.account(),
                },
                dateTime: faker.date.past()
            }
        }),
        people: _.times(10, () => {
                    return {
                        name: faker.name.findName(),
                        email: faker.internet.email(),
                        address: faker.address.streetAddress(),
                        bio: faker.lorem.sentence(),
                        avatar: faker.internet.avatar()
                    }
        }),
        order: _.times(10, () => {
            return {
                id: faker.random.uuid(),
                amount: faker.random.number(),
                status: faker.random.arrayElement(['pending', 'completed', 'failed']),
                createdAt: faker.date.past(),
                updatedAt: faker.date.past()
            }
        })
    }
}