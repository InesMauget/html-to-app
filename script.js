console.log("Hello world!!!")


changerTitre();

function changerTitre() {
    const title = document.getElementById('title');
    title.innerText += ' from JS';
    title.style.color = 'red';
}

