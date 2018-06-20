// Console Logs:
self.addEventListener('fetch', function(event) {
  console.log(event.request);

  // Aqui setamos uma resposta do próprio SW ao browser {Online First}.
  event.respondWith(
    // Primeiro parametro (ex.: Blob, Buffer, String, etc.)
    new Response('Hello im a <b> class="little-important" html</b> type',
      //Colocamos o tipo de conteúdo dentro de um ?=objeto.
      headers: {'Content-Type': 'text/html'}
    );
  );
});
