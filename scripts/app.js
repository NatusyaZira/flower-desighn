

function createContentTemplate(card) {
  const article = `
    <article class="card" style="background-image: url(${card.image})">
    <div class="card-info">
     <p class="name">${card.name}</p>
     <p class="flovers">${card.flovers}</p>
     <p class="price">${card.price}грн</p>
    <div class="btn-card"><button>В кошик</button></div>
    </div>
    </article>`;

    return createFragmentTemplate(article);
}

function createFragmentTemplate(str) {
  const template = document.createElement('template');
  template.innerHTML = str;
  return template.content;
}

function appendContent(content) {
  const el = document.getElementById('content');
  el.appendChild(content);
}

function init() {
  fetch('https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f')
  .then((res) => res.json())
  .then((data) => {
    const fragment = document.createDocumentFragment();
  
    data.forEach((card) => {
      fragment.appendChild(createContentTemplate(card));
    });
  
    appendContent(fragment);

  });
}

init();
