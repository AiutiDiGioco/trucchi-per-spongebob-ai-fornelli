/**
 * stringutils - Basic String Manipulation Functions
 * Author: AiutiDiGioco
 * License: Custom
 */

const stringutils = {
    /**
     * Reverses the given string.
     * @param {string} str - The string to reverse.
     * @returns {string}
     */
    reverse(str) {
        if (typeof str !== 'string') {
            console.error('[stringutils] Invalid input. Expected a string.');
            return '';
        }
        return str.split('').reverse().join('');
    },

    /**
     * Checks if a string is a palindrome.
     * @param {string} str - The string to check.
     * @returns {boolean}
     */
    isPalindrome(str) {
        if (typeof str !== 'string') {
            console.error('[stringutils] Invalid input. Expected a string.');
            return false;
        }
        const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
        return cleaned === cleaned.split('').reverse().join('');
    },

    /**
     * Converts a string to kebab-case.
     * @param {string} str - The string to convert.
     * @returns {string}
     */
    toKebabCase(str) {
        if (typeof str !== 'string') {
            console.error('[stringutils] Invalid input. Expected a string.');
            return '';
        }
        return str
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
};

// Example usage:
// console.log(stringutils.reverse('hello')); // 'olleh'
// console.log(stringutils.isPalindrome('Racecar')); // true
// console.log(stringutils.toKebabCase('Hello World!')); // 'hello-world'

module.exports = stringutils;
