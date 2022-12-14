/* eslint-disable space-before-function-paren */
export function syllables(word) {
    word = word.toLowerCase();
    if (word.length <= 3) {
        return 1;
    }
    return word
        .replace(/(?:[^laeiouy]es|ed|lle|[^laeiouy]e)$/, '')
        .replace(/^y/, '')
        .match(/[aeiouy]{1,2}/g).length;
}

export function checkLine(sentence) {
    var count = 0;
    var words = sentence.split(' ');

    words.map(function (val, key) {
        count += syllables(val);
    });

    return count;
}
export function checkHaiku(a, b, c) {
    if (!a || !b || !c) {
        return { result: false, error: 'Invalid input. Call haiku(line1, line2, line3)' };
    }

    const result = [checkLine(a), checkLine(b), checkLine(c)];
    const expected = [5, 7, 5];

    if (arrayCompare(result, expected)) {
        return true;
    }

    alert('Please enter a haiku of 5/7/5 syllables!');
}
export function arrayCompare(a1, a2) {
    return (
        a1.length === a2.length &&
        a1.every(function (v, i) {
            return v === a2[i];
        })
    );
}
