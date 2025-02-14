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
    <script src="https://ssreact.com/min.js"></script>
  </head>

  <body>
    <div class="w-60" id="ssreact.Counter"></div>

    <script type="text/babel">
      function Counter() {
        const [count, setCount] = React.useState(0);

        return (
          <div onClick={() => setCount(count + 1)}>
            <h3>Counter: {count}</h3>
            <p>Click to increment!</p>
          </div>
        );
      }
    </script>
  </body>
</html>
```

# Issues

MicroJSX has a tiny problem with spaces. Because of this, we need to use `{" "}` after variable names, e.g. `Clicked {count}&nbsp;times`. Furthermore I've encountered some issues when trying to render escaped triple backticks.

Please do reach out (or send patches) if you know how to solve these.
