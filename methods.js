const p1 = new Promise((resolve, reject) => setTimeout(_ => resolve('value 1'), 3000));
const p2 = new Promise((resolve, reject) => setTimeout(_ => resolve('value 2'), 500));
const p3 = new Promise((resolve, reject) => setTimeout(_ => resolve('value 3'), 2000));

const promises = [p1, p2, p3];

(async _ => {
    try {
        const result = await Promise.all(promises);
        console.log('result:', result)
    } catch (error) {
        console.log('error:', error)
    }
})();