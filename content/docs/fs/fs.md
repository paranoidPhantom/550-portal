# Файловая система
---

### Так называемые "вёдра" это контейнеры файлов высшего уровня, они могут содержать любое количество папок и файлов.

### Папки внутри "вёдер" также могут содержвать любое количество папок и файлов.

> Ниже вы видите схему работы файловой системы

::colorMode
#light
![](/images/docs/light.png)
#dark
![](/images/docs/dark.png)
::

## Для манипуляций с файловой системой:




::container{width=60}
Нажмите на аналогичную кнопку в шапке сайта:
:divider
1. Зайдите на любую страницу с отоброжой файловой системой.
2. Если вы авторизованы, вы автоматически получите возможность редактировать файловую систему.
::

---

Чтобы создать кнопку для просмотра файловой системы в редакторе используйте специальный компонент:

```mdc
:fileSystem{bucket="<ведро>" root="<корневая папка>"}
```

Параметр **bucket** обязателен, тогда как **root** можно оставить пустым