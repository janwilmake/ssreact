(function (global) {
  // Set up React global
  global.React = {
    ...preact,
    useState: preactHooks.useState,
    useEffect: preactHooks.useEffect,
    useRef: preactHooks.useRef,
    useCallback: preactHooks.useCallback,
    useMemo: preactHooks.useMemo,
  };

  // Ensure UTF-8 encoding is preserved
  function decodeUTF8(str) {
    try {
      // First try to decode any percent-encoded UTF-8 sequences
      const percentDecoded = decodeURIComponent(escape(str));

      // Then ensure we're working with proper UTF-8
      const encoder = new TextEncoder();
      const decoder = new TextDecoder("utf-8", { fatal: true });

      return decoder.decode(encoder.encode(percentDecoded));
    } catch (e) {
      // If decoding fails, return original string
      return str;
    }
  }

  // Process JSX scripts with proper UTF-8 handling
  function processScripts() {
    const scripts = document.querySelectorAll('script[type="text/babel"]');
    scripts.forEach((script) => {
      try {
        // Properly decode the script content first
        const decodedContent = decodeUTF8(script.textContent);

        const compiledCode = window.compileJSX(decodedContent, "React.h");

        const newScript = document.createElement("script");
        // Set UTF-8 charset on the new script
        newScript.charset = "utf-8";
        newScript.textContent = compiledCode;

        script.parentNode.replaceChild(newScript, script);
      } catch (error) {
        console.error("Error compiling JSX:", error);
        console.error("Original content:", script.textContent);
        console.error("Decoded content:", decodeUTF8(script.textContent));
      }
    });
  }

  // Mount components
  function mountComponents() {
    const components = document.querySelectorAll('[id^="ssreact."]');
    components.forEach((element) => {
      const componentName = element.id.split(".")[1];
      const Component = global[componentName];
      if (typeof Component === "function") {
        React.render(React.h(Component), element);
      } else {
        console.warn(
          `Component "${componentName}" not found for element with id "${element.id}"`,
        );
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      processScripts();
      mountComponents();
    });
  } else {
    processScripts();
    mountComponents();
  }
})(typeof self !== "undefined" ? self : this);
