export function renderHaiku(haiku) {
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    // const img = document.createElement('img');
    const a = document.createElement('a');
    console.log(haiku.poem); // h3.textContent = haiku.title;
    p.textContent = haiku.poem[0];
    p2.textContent = haiku.poem[1];
    p3.textContent = haiku.poem[2];
    // img.src = haiku.theme;
    a.append(p, p2, p3);
    //add img//
    return a;
}
