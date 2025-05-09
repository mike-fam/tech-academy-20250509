const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

function caesarEncryptChar(char: string, shift: number): string {
    if (!ALPHA.includes(char)) {
        return char;
    }
    const index = ALPHA.indexOf(char);
    const newIndex = (index + shift) % ALPHA.length;
    return ALPHA[newIndex];
}

export function caesarEncrypt(plainText: string, shift: number): string {
    return '';
}

export function caesarDecript(cipherText: string, shift: number): string {
    return '';
}

// Extension
export function caesarDecryptGuess(cipherText: string): string {
    return '';
}
