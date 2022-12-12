export function renderHaiku(haiku) {
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const a = document.createElement('a');

    h3.textContent = haiku.title;
    p.textContent = haiku.poem;
    // img.src = haiku.theme;
    a.append(h3, p);
    //add img//
    return a;
}
