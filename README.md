# Alpine JS Form Data

Get the data from the form in a key/value pair of name and value 🥯

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-form-data@latest/dist/form-data.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-form-data

npm install -D alpinejs-form-data
```

```js
import Alpine from 'alpinejs'
import formData from 'alpinejs-form-data'

Alpine.plugin(formData)

Alpine.start()
```

## Example

```html
<form x-data x-on:submit.prevent="console.log($formData)">
  <input type="text" name="title" />
  <input type="text" name="slug" />
  <button>Submit</button>
</form>
```

On submit this will return the following:

```
{title: 'My New Blog Post', slug: 'my-new-blog-post'}
```

### Returning Data as Array

You may want the data returned to be a nested array:

```
[
  ['title', 'My New Blog Post'],
  ['slug', 'my-new-blog-post'],
]
```

To do this you can use `$formDataArray` instead of `$formData`.

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-form-data)
![](https://img.shields.io/npm/v/alpinejs-form-data)
![](https://img.shields.io/npm/dt/alpinejs-form-data)
![](https://img.shields.io/github/license/markmead/alpinejs-form-data)
