export function renderHaiku(haiku) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const cheers = document.createElement('p');
    const a = document.createElement('a');
    const cheersDiv = document.createElement('div');
    const pDiv = document.createElement('div');

    p.textContent = haiku.poem[0];
    p2.textContent = haiku.poem[1];
    p3.textContent = haiku.poem[2];
    div.classList.add(`${haiku.themes}`);
    cheers.textContent = `${haiku.rating} cheers 🍻`;
    cheers.classList.add('ratings');
    p.classList.add('poemlines');
    p2.classList.add('poemlines');
    p3.classList.add('poemlines');

    pDiv.append(p, p2, p3);
    cheersDiv.append(cheers);

    div.append(pDiv, cheersDiv);
    a.append(div);
    return a;
}
