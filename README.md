# XSS Validator для Swagger UI

Минималистичный валидатор XSS, аналогичный используемому багхантером.

## Использование

После публикации на GitHub Pages используйте:

```
https://target-domain.com/-/sandbox/swagger?relativeRootPath=https://YOUR_USERNAME.github.io/XSS_Check/syyc_h1
```

Или с расширением:
```
https://target-domain.com/-/sandbox/swagger?relativeRootPath=https://YOUR_USERNAME.github.io/XSS_Check/syyc_h1.yaml
https://target-domain.com/-/sandbox/swagger?relativeRootPath=https://YOUR_USERNAME.github.io/XSS_Check/syyc_h1.json
```

## Важно

- На некоторых хостах с CSP требуется установленное расширение Wappalyzer (bypass CSP)
- На хостах без CSP работает без расширений
- На защищенных хостах может не работать (другая версия кода, валидирует параметр)

## Файлы

- `syyc_h1` - основной валидатор (без расширения, как у багхантера)
- `syyc_h1.yaml` - вариант с расширением YAML
- `syyc_h1.json` - вариант с расширением JSON

