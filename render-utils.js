export function renderHaiku(haiku) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const section = document.createElement('section');
    const a = document.createElement('a');

    p.textContent = haiku.poem[0];
    p2.textContent = haiku.poem[1];
    p3.textContent = haiku.poem[2];
    div.classList.add(`${haiku.themes}`);
    section.textContent = `${haiku.rating} cheers 🍻`;
    section.classList.add('ratings');
    p.classList.add('poemlines');
    p2.classList.add('poemlines');
    p3.classList.add('poemlines');

    div.append(p, p2, p3, section);
    a.append(div);
    return a;
}
