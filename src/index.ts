const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

function caesarEncryptChar(char: string, shift: number): string {
    if (!ALPHA.includes(char)) {
        return char;
    }
    const index = ALPHA.indexOf(char);
    const newIndex = (((index + shift) % ALPHA.length) + ALPHA.length) % ALPHA.length;
    return ALPHA[newIndex];
}

export function caesarEncrypt(plainText: string, shift: number): string {
    let result = "";
    for (const char of plainText) {
        let cipherChar = caesarEncryptChar(char.toLowerCase(), shift);
        if (char === char.toUpperCase()) {
            cipherChar = cipherChar.toUpperCase();
        }
        result += cipherChar;
    }
    return result;
}

export function caesarDecrypt(cipherText: string, shift: number): string {
    return caesarEncrypt(cipherText, -shift);
}

// Extension
export function caesarDecryptGuess(cipherText: string): string {
    return '';
}
