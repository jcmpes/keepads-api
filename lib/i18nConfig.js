'use strict';

const i18n = require('i18n');
const path = require('path');

i18n.configure({
    locales: ['en', 'es'],
    // __dirname para path es la carpeta actual
    directory: path.join(__dirname, '..', 'locales'),
    defaultLocale: 'es',
    autoReload: true,
    syncFiles: true,
    cookie: 'keepads-locale'
});

i18n.setLocale('es');

module.exports = i18n;
