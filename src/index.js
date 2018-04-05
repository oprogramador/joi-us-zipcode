import zipcodes from 'joi-us-zipcode/zipcodes.json';

module.exports = joi => ({
  base: joi.string(),

  language: {
    usZipCode: `must be a 5-digit string with one of the following values: ${JSON.stringify(zipcodes)}`,
  },

  name: 'string',

  rules: [
    {
      name: 'usZipCode',
      validate(params, value, state, options) {
        if (!zipcodes.includes(value)) {
          return this.createError('string.usZipCode', { value }, state, options);
        }

        return value;
      },
    },
  ],
});
