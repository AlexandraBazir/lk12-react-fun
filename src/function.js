export const getNumber = (n) => Math.floor(Math.random() * n);

export const getColor = () => {
    const red = getNumber(256),
        green = getNumber(256),
        blue = getNumber(256)
        return `rgb(${red},${green},${blue})`;
}

export const invert = (color) => {
    const result = color.match(/\d+/g);
    const red = 255 - result[0],
        green = 255 - result[1],
        blue = 255 - result[2]
        return `rgb(${red},${green},${blue})`;
}

export const getTextColor = (color) => {
    const result = color.match(/\d+/g);
    const cnt = result.reduce((sum,n) => sum + +n, 0);
    console.log(result, cnt);
    return cnt < (255 * 3 / 2) ? "white" : "black";
}

// export {getNumber, getColor, invert, getTextColor};
