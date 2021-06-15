const db = require('./db')

const fetchUserById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const results = db.users.find(i => i.id === id);
            results ?
                resolve(results) :
                reject('Not found');
        }, 2000);
    });
};

(async _ => {
    try {
        const user = await fetchUserById(1);
        console.log('User:', user);
    } catch (error) {
        console.log('Error:', error);
    } finally {
        console.log('I am Iron Man');
    }
})();