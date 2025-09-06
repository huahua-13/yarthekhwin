document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("motion-on");
});

var fontsInServiceWorker =
  (sessionStorage.foutFontsStage1Loaded && sessionStorage.foutFontsStage2Loaded) ||
  ("serviceWorker" in navigator &&
    navigator.serviceWorker.controller !== null &&
    navigator.serviceWorker.controller.state === "activated");

if (!fontsInServiceWorker && "fonts" in document) {
  if (sessionStorage.foutFontsStage2Loaded) {
    document.documentElement.className += " wf-loaded-stage2";
  } else {
    sessionStorage.foutFontsStage1Loaded = true;
  }
}

if ("fonts" in document) {
  let sansRoman = new FontFace(
    "Fricolage Grotesque",
    "url('/assets/fonts/fricolage-grotesque.var.woff2') format('woff2')",
    { weight: "100 900", style: "normal" }
  );

  let burmeseFont = new FontFace(
    "seesai",
    "url('/assets/fonts/burmese/seesai.ttf') format('truetype')",
    {
      weight: "normal",
      style: "normal",
    }
  );

  Promise.all([sansRoman.load(), burmeseFont.load()])
    .then((result) => {
      result.forEach((font) => document.fonts.add(font));
      document.documentElement.classList.add("wf-loaded-stage2");
      sessionStorage.foutFontsStage2Loaded = true;
    })
    .catch((error) => {
      console.error("Font loading error:", error);
    });
}

if (
  (sessionStorage.foutFontsStage1Loaded && sessionStorage.foutFontsStage2Loaded) ||
  ("serviceWorker" in navigator &&
    navigator.serviceWorker.controller !== null &&
    navigator.serviceWorker.controller.state === "activated")
) {
  document.documentElement.classList.add("wf-loaded-stage2");
}

document.documentElement.classList.remove("no-js");
