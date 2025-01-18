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

  // Process JSX scripts
  function processScripts() {
    const scripts = document.querySelectorAll('script[type="text/babel"]');
    scripts.forEach((script) => {
      try {
        const compiledCode = CompileJSX(script.textContent, "React.h");
        const newScript = document.createElement("script");
        newScript.textContent = compiledCode;
        script.parentNode.replaceChild(newScript, script);
      } catch (error) {
        console.error("Error compiling JSX:", error);
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
  document.addEventListener("DOMContentLoaded", () => {
    processScripts();
    mountComponents();
  });
})(typeof self !== "undefined" ? self : this);
