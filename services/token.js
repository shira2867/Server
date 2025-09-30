let activeTokens = [];

function isTokenActive(token) {
    return activeTokens.includes(token);
}

function addToken(token) {
    activeTokens.push(token);
}

const removeToken = (token) => {
    const index = activeTokens.indexOf(token);
    if (index > -1) {
        activeTokens.splice(index, 1);
    }
}






module.exports = { isTokenActive, addToken ,removeToken};