## TinyMCE

![TinyMCE](https://www.tiny.cloud/docs/images/floating_toolbar.png)

**Download TinyMCE Community**
https://www.tiny.cloud/get-tiny/self-hosted/

**Language Packages**
https://www.tiny.cloud/get-tiny/language-packages/


```javascript
<script src="/tinymce/tinymce.min.js"></script>

<script>
    tinymce.init({
        language: 'pt_BR',
        selector: '#textareaId',
        plugins: [
            'link image emoticons print preview hr ...'
        ]
    })
</script>
```