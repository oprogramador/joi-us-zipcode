# joi-us-zipcode

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/oprogramador/joi-us-zipcode.svg?branch=master)](https://travis-ci.org/oprogramador/joi-us-zipcode
)

[![NPM status](https://nodei.co/npm/joi-us-zipcode.png?downloads=true&stars=true)](https://npmjs.org/package/joi-us-zipcode
)

```js
const BaseJoi = require('joi');
const Extension = require('joi-us-zipcode');
const Joi = BaseJoi.extend(Extension);

const schema = {
  zip: Joi.string().usZipCode(),
};
const object = {
  zip: '75001',
};

Joi.validate(schema, object);
```
