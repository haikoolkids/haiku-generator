export function renderHaiku(haiku) {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    // const img = document.createElement('img');
    const a = document.createElement('a');
    // console.log(haiku.poem); // h3.textContent = haiku.title;
    p.textContent = haiku.poem[0];
    p2.textContent = haiku.poem[1];
    p3.textContent = haiku.poem[2];
    div.classList.add(`${haiku.themes}`);
    // img.src = haiku.theme;
    div.append(p, p2, p3);
    a.append(div);
    console.log('haiku', haiku);
    console.log('div', div);
    return a;
}
