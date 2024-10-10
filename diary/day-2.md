# 1.2

- also create / append root element

# 2.2

- use raw react apis (review)

# 2.3

- more review nothing new :(

# 3.1 - intro

https://babeljs.io/repl#?builtIns=App&code_lz=MYewdgzgLgBArgSxgXhgHgCYIG4D40QAOAhmLgBICmANtSGgPRGm7rNkDqIATtRo-3wMseAFBA&presets=react&prettier=true

```
whats the difference between classic and automatic React runtime? can you explain
```

Certainly! I'd be happy to explain the difference between the classic and
automatic React runtime. This distinction is particularly relevant when
discussing the use of React with frameworks like Next.js.

1. Classic React Runtime

The classic React runtime is the traditional way React has been used for years.
In this model:

- Components are typically defined using JSX.
- You need to explicitly import React in files that use JSX (e.g.,
  `import React from 'react'`).
- The JSX is transformed into `React.createElement` calls during the build
  process.
- It requires a bit more boilerplate code.

Example of a component using the classic runtime:

```jsx
import React from 'react'

function MyComponent({ name }) {
	return <div>Hello, {name}!</div>
}

export default MyComponent
```

2. Automatic React Runtime

The automatic React runtime is a newer approach, introduced with React 17 and
fully supported in React 18. It's designed to be more efficient and require less
boilerplate. Key features include:

- No need to import React in every file that uses JSX.
- Uses a more efficient compilation strategy.
- Smaller bundle sizes due to reduced overhead.
- Faster refresh times in development.

Example of a component using the automatic runtime:

```jsx
function MyComponent({ name }) {
	return <div>Hello, {name}!</div>
}

export default MyComponent
```

Key Differences:

1. **Imports**: The automatic runtime doesn't require importing React in every
   file that uses JSX.

2. **Compilation**: The automatic runtime uses a different compilation strategy
   that's more efficient.

3. **Performance**: The automatic runtime can lead to smaller bundle sizes and
   faster refresh times in development.

4. **Compatibility**: The automatic runtime is fully supported in React 18 and
   later versions, while the classic runtime works with all versions of React.

5. **Framework Integration**: Some frameworks, like Next.js 13+, use the
   automatic runtime by default for improved performance and developer
   experience.

In practice, the automatic runtime simplifies your code slightly and can offer
performance benefits. However, the differences are mostly under the hood, and
your React components will look and behave similarly regardless of which runtime
you use.

For most new projects, especially those using modern frameworks, the automatic
runtime is recommended. However, the classic runtime is still fully supported
and works well, especially for existing projects or when using older tools or
libraries that haven't been updated to support the automatic runtime.

# 3.1

- use babel standalone to use <script type="text/babel" data-type="module"> and
  JS

## Time Spent:

35 minutes
