export function hexEncode(value: string) {
    let result = "";
    for (let i = 0; i < value.length; i++) {
        const hex = value.charCodeAt(i).toString(16);
        result += hex.padStart(2, "0");
    }
    return result;
}
