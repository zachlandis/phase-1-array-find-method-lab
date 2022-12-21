
function superbowlWin(record) {
    const win = record.find(function (game) {
        if (game.result === 'W') {
            return game.year;
        }
    })
    if (win) {
        return win.year;
    } else {
        return undefined;
    }
}