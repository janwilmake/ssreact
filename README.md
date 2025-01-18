# Stupid Simple React

ssreact uses [preact](https://preactjs.com) and [a tiny JSX compiler](https://github.com/mllev/micro-jsx) and some scaffolding to make it possible to run react directly in HTML with a single script import. The bundle is just 21KB minified, small enough to use in production if you ask me.

# Use cases

Use it for quickly crafting static websites that need to render some complex react stuff but you don't want to set up whole react thing. Works great together with LLMs and deployment on Cloudflare Workers!

I don't know how well this scales yet.

Now you can create React components, anywhere, as long as div id matches `ssreact.{YourComponentName}` and you use `type="text/babel"` in your scripts that define code:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Stupid Simple React + Tailwind</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://ssreact.com/min.js"></script>
  </head>

  <body>
    <div class="w-60" id="ssreact.Counter"></div>
    <script type="text/babel">
      const { useState, h } = SimpleReact;

      // Reusable Counter component
      function Counter({ initialCount = 0, label = "Count" }) {
        const [count, setCount] = useState(initialCount);

        return (
          <div
            className="p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setCount(count + 1)}
          >
            <h3 className="text-lg font-bold text-gray-800">
              {label}: {count}
            </h3>
            <p className="mt-1 text-sm text-gray-600">Click to increment!</p>
          </div>
        );
      }
    </script>
  </body>
</html>
```

# Issues

MicroJSX has a tiny problem with spaces. Because of this, we need to use `{" "}` after variable names, e.g. `Clicked {count}&nbsp;times`. Furthermore, emojis and special characters don't render, and I've encountered some issues when trying to render escaped triple backticks.
