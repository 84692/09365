const l = {
  p1: "https://aubvkzfranufvkoevazg.supabase.co/storage/v1/object/public/public-html/index.html",
  p2: "https://aubvkzfranufvkoevazg.supabase.co/storage/v1/object/public/public-html/pagina2.html"
};

function carregarPagina(nome) {
  if (!l[nome]) {
    document.body.textContent = 'Link não encontrado: ' + nome;
    return;
  }
  fetch(l[nome])
    .then(r => r.text())
    .then(html => {
      const blobUrl = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
      document.getElementById('viewer').src = blobUrl;
    })
    .catch(e => {
      document.body.textContent = 'Erro: ' + e.message;
    });
}

carregarPagina('p1');
