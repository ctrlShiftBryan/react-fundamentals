# 6.3 Size

- for class name use array and filter out falsy and join with empty space
- for className if alow overrride left No over right right on prop spread

start time: 7:30

# Forms intro

-

# 7.1 - Form

- nothing new

# 7.2 - Form Action

- action ="this/is/relative" "/this/is/not/relative"

# 7.3 - Input Types

- image input accept
- password input has special properties for security reasons. like the back
  button does not retain state.

# 7.4 - Submission

```typescript
const getData = new URL(request.url).searchParams
const postData = await request.formData()
```

how to handle file input. easy add `encType="multipart/form-data"` to form input

```typescript
async function stringifyValue(value: string | File) {
	if (value instanceof File) {
		if (value.size > MAX_FILE_SIZE) {
			throw new Response(`File larger than ${MAX_FILE_SIZE} bytes`, {
				status: 400,
			})
		}
		const base64 = btoa(
			new Uint8Array(await value.arrayBuffer()).reduce(
				(data, byte) => data + String.fromCharCode(byte),
				'',
			),
		)
		return `<img alt=${value.name} src="data:${value.type};base64,${base64}" style="max-width: 100px; max-height: 100px;"/>`
	}
	return value
}
```

form method dialog?

# 7.5 - Form Actions

- <form action={customFucntion}>

- when did this get added?

- 18.3 Canary only for now

timespent 40 minutes
