# 4.4 default props

- narrow types provide better intellisense
- defaults & optional

# 4.5 Reduce Duplication

```typescript
type OperationFn = (left: number, right: number) => number
type Operator = '+' | '-' | '*' | '/'
// 🦺 cast the operations variable to a Record of the Operator type and the OperationFn type
const operations: Record<Operator, OperationFn> = {
	// 🦺 remove all the ": number" from these functions
	'+': (left, right) => left + right,
	'-': (left, right) => left - right,
	'*': (left, right) => left * right,
	'/': (left, right) => left / right,
}
```

# 4.6 Satisfies

The key difference between these two code snippets lies in how TypeScript infers
and checks the types. Let's break it down:

1. First snippet:

```typescript
const operations: Record<string, OperationFn> = {
	'+': (left, right) => left + right,
	'-': (left, right) => left - right,
	'*': (left, right) => left * right,
	'/': (left, right) => left / right,
}
```

In this case:

- You're explicitly annotating the type of `operations` as
  `Record<string, OperationFn>`.
- TypeScript will check that the object literal you're assigning matches this
  type.
- The compiler ensures that all properties are of type `OperationFn`.
- However, TypeScript won't infer more specific types for the keys ('+', '-',
  etc.).

2. Second snippet:

```typescript
const operations = {
	'+': (left, right) => left + right,
	'-': (left, right) => left - right,
	'*': (left, right) => left * right,
	'/': (left, right) => left / right,
} satisfies Record<string, OperationFn>
```

Here:

- You're using the `satisfies` operator, introduced in TypeScript 4.9.
- TypeScript will check that the object satisfies the
  `Record<string, OperationFn>` type.
- The compiler still ensures all properties are of type `OperationFn`.
- Crucially, TypeScript will infer more specific types for the keys and values.

The main advantages of the second approach are:

1. Type Inference: The keys are inferred as literal types ('+' | '-' | '\*' |
   '/') rather than just `string`.

2. Autocomplete: When using `operations`, you'll get autocomplete for the
   specific keys.

3. Type Safety: You can't accidentally access a non-existent key without
   TypeScript flagging it.

4. Flexibility: If you need to access the specific function types later, they're
   preserved.

For example, with the second approach:

```typescript
// This works and is type-safe
operations['+'] // TypeScript knows this is (left: number, right: number) => number

// This will cause a TypeScript error
operations['%'] // Error: Property '%' does not exist on type '{ ... }'
```

In contrast, with the first approach, `operations['%']` would not cause a
compile-time error because the keys are typed as `string`.

The `satisfies` approach gives you the best of both worlds: you get the type
checking of `Record<string, OperationFn>` while also preserving the more
specific types of the object literal.

# Styling Intro

# 6.1 Styling

- nothing new

# 6.1 Custom Component

- return type `: React.ComponentProps<'div'>) `
- u can spread undefined

- time spent 30 minutes
