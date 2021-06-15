const isEven = (number) => {
    return new Promise((resolve, reject) => {
        // super complex math problem
        if (number % 2 === 0) {
            resolve();
        } else {
            reject();
        }
    });
};

(async _ => {
    try {
        await isEven(11);
        console.log("Yay! it's even");
    } catch {
        console.log("Meh! it's odd")
    }
})();