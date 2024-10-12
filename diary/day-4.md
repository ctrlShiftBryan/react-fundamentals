# 4.3 JSX Components

- diff between lowercase / uppercase - string vs reference

# 4.4 Props

- n/a
- TIL: use a object to lookup a function by string name

# 5 TypeScript - intro

- @ts-expect-error

# 5.1 - Props

- nothing learned

# 5.1 - Narrow Types

- nothing learned

# 5.3 - Derived Types

```typescript
const operations = {
	'+': (left: number, right: number): number => left + right,
	'-': (left: number, right: number): number => left - right,
	'*': (left: number, right: number): number => left * right,
	'/': (left: number, right: number): number => left / right,
}

// 🦺 create a type called CalculatorProps
type CalculatorProps = {
	left: number
	operator: keyof typeof operations
	right: number
}
```

Time spent: 30 minutes
