# Markdown
---

::alert
---
title: "Примечание"
description: "Все элементы должны быть разделены хотя бы одной пустой строкой"
color: "yellow"
---
::

## Заголовки

```html
<h1>Текст</h1> | # Текст
<h2>Текст</h2> | ## Текст
...
<h6>Текст</h6> | ###### Текст
```

### Результат:

# Текст

## Текст
### ...
###### Текст

---

## Шрифт

```html
<i>Текст</i> | *Текст*
<b>Текст</b> или <strong>Текст</strong> | **Текст**
<i><b>Текст</b></i> или <i><strong>Текст</strong></i> | ***Текст***
```

### Результат:

*Текст*

**Текст**

***Текст***

---

## Списки

### Не последовательный:

```html
<ul>
    <li>Элемент 1</li> | - Элемент 1
    <li>Элемент 2</li> | - Элемент 2
    <li>Элемент 3</li> | - Элемент 3
</ul>
```

### Результат:

- Элемент 1
- Элемент 2
- Элемент 3

---

### Последовательный:

```html
<ol>
    <li>Элемент 1</li> | 1. Элемент 1
    <li>Элемент 2</li> | 2. Элемент 2
    <li>Элемент 3</li> | 3. Элемент 3
</ol>
```

### Результат:

1. Элемент 1
2. Элемент 2
3. Элемент 3

---

Это лишь основы, подробнее вы можете прочитать [по ссылке](https://content.nuxt.com/usage/markdown)