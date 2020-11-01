# GITHUB PAGES WITH REACT JS

Console:

```
npm i gh-pages
```

In package.json add
.
.
"private": true,
<!-- abajo de esto agregar -->
"homepage": "http://{Github-username}.github.io/{Github-repo-name}"

Y en scripts agregar:

“scripts”: {
    //…
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}

Para lanzar la pagina:

```
npm run deploy
```

Esto crea una nueva rama llamada gh-pages la cual es lanzada para la pagina.