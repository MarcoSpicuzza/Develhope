function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}

luckyDraw("Joe")
    .then(result => console.log(result)).catch(e => console.log(e.message))
    .then(luckyDraw("Caroline").then(result => console.log(result)).catch(e => console.log(e.message)))
    .then(luckyDraw("Sabrina").then(result => console.log(result)).catch(e => console.log(e.message)))
