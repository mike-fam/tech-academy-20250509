const prompt = require('prompt-sync')({ sigint: true });


const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const CHARACTER_FREQUENCY = ['e', 't', 'a', 'o', 'i', 'n', 's', 'h', 'r', 'd', 'l', 'c', 'u', 'm', 'w', 'f', 'g', 'y', 'p', 'b', 'v', 'k', 'j', 'x', 'q', 'z']

function encryptChar(char: string, shift: number) {
    const plainIndex = ALPHA.indexOf(char);
    if (plainIndex === -1) {
        return char;
    }
    const cipherIndex = (((plainIndex + shift) % ALPHA.length) + ALPHA.length) % ALPHA.length;
    return ALPHA[cipherIndex];
}

export function caesarEncrypt(plainText: string, shift: number): string {
    let result = "";
    for (const char of plainText) {
        let encryptedChar = encryptChar(char.toLowerCase(), shift);
        if (char === char.toUpperCase()) {
            encryptedChar = encryptedChar.toUpperCase();
        }
        result += encryptedChar;
    }
    return result;
}

export function caesarDecrypt(cipherText: string, shift: number): string {
    return caesarEncrypt(cipherText, ALPHA.length - shift);
}

// Extension
function getSortedCharsByFrequency(input: string): string[] {
    const freqMap: Record<string, number> = {};

    for (const char of input) {
      const lowerChar = char.toLowerCase(); 
      if (ALPHA.includes(char)) {
          freqMap[lowerChar] = (freqMap[lowerChar] || 0) + 1;
      }
    }

    return Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);
}

function caesarDecryptGuess(cipherText: string): string {
    const sortedCharByFrequency = getSortedCharsByFrequency(cipherText);
    const mostFrequentChar = sortedCharByFrequency[0];
    for (const charHeuristic of CHARACTER_FREQUENCY) {
        const testShift = ALPHA.indexOf(mostFrequentChar) - ALPHA.indexOf(charHeuristic);
        const testCipherText = caesarDecrypt(cipherText, testShift);
        const answer = prompt(`${testCipherText}\nDoes this look right (y/n)`);
        if (answer === 'y') {
            return testCipherText;
        }
    }
    return '';
}


caesarDecryptGuess(`
Ulcly nvuuh npcl fvb bw, ulcly nvuuh sla fvb kvdu
Ulcly nvuuh ybu hyvbuk huk klzlya fvb
Ulcly nvuuh thrl fvb jyf, ulcly nvuuh zhf nvvkifl
Ulcly nvuuh alss h spl huk obya fvb
`)