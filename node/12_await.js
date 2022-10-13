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

async function getResults(person) {
    try {
        console.log(await luckyDraw(person));
    } catch (error) {
        console.log(error.message);
    }
}

const people = ["Tina", "Jorge", "Julien"];

people.forEach(person => {
    getResults(person);
});
