async function loadComponent(componentUrl, targetElementId) {
  try {
    const response = await fetch(componentUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const targetElement = document.getElementById(targetElementId);

    if (targetElement) {
      const tempContainer = document.createElement("div");
      tempContainer.innerHTML = html;

      targetElement.innerHTML = tempContainer.innerHTML;

      const scripts = targetElement.getElementsByTagName("script");
      for (let script of scripts) {
        if (script.src) {
          const newScript = document.createElement("script");
          newScript.src = script.src;
          if (script.async) newScript.async = true;
          if (script.defer) newScript.defer = true;
          document.body.appendChild(newScript);
        } else {
          const newScript = document.createElement("script");
          newScript.textContent = script.textContent;
          document.body.appendChild(newScript);
        }
      }

      console.log(`Component loaded: ${componentUrl}`);
    } else {
      console.error(`Target element not found: ${targetElementId}`);
    }
  } catch (error) {
    console.error(`Error loading component ${componentUrl}:`, error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("../components/header.html", "header");
  loadComponent("../components/footer.html", "footer");

  if (typeof bootstrap !== "undefined") {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  }
});
