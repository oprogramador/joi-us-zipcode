import BaseJoi from 'joi';
import Extension from 'joi-us-zipcode';
import expect from 'joi-us-zipcode/tests/expect';
import zipcodes from 'joi-us-zipcode/zipcodes.json';

const Joi = BaseJoi.extend(Extension);

describe('US zip codes', () => {
  it('allows a US zip code', () => {
    const zip = '75001';
    const { error } = Joi.validate({ zip }, { zip: Joi.string().usZipCode() });
    expect(error).to.be.null();
  });

  it('forbids a 5-digit not US zip code', () => {
    const zip = '12576';
    const { error } = Joi.validate({ zip }, { zip: Joi.string().usZipCode() });

    expect(error).to.be.an.instanceOf(Error);
    expect(error.isJoi).to.be.true();
    expect(error.name).to.equal('ValidationError');
    expect(error.details).to.deep.equal([
      {
        context: {
          key: 'zip',
          label: 'zip',
          value: zip,
        },
        message: `"zip" must be a 5-digit string with one of the following values: ${JSON.stringify(zipcodes)}`,
        path: ['zip'],
        type: 'string.usZipCode',
      },
    ]);
  });

  it('forbids a more than 5-digit code', () => {
    const zip = '750010';
    const { error } = Joi.validate({ zip }, { zip: Joi.string().usZipCode() });

    expect(error).to.be.an.instanceOf(Error);
    expect(error.isJoi).to.be.true();
    expect(error.name).to.equal('ValidationError');
    expect(error.details).to.deep.equal([
      {
        context: {
          key: 'zip',
          label: 'zip',
          value: zip,
        },
        message: `"zip" must be a 5-digit string with one of the following values: ${JSON.stringify(zipcodes)}`,
        path: ['zip'],
        type: 'string.usZipCode',
      },
    ]);
  });

  it('forbids a less than 5-digit code', () => {
    const zip = '7500';
    const { error } = Joi.validate({ zip }, { zip: Joi.string().usZipCode() });

    expect(error).to.be.an.instanceOf(Error);
    expect(error.isJoi).to.be.true();
    expect(error.name).to.equal('ValidationError');
    expect(error.details).to.deep.equal([
      {
        context: {
          key: 'zip',
          label: 'zip',
          value: zip,
        },
        message: `"zip" must be a 5-digit string with one of the following values: ${JSON.stringify(zipcodes)}`,
        path: ['zip'],
        type: 'string.usZipCode',
      },
    ]);
  });

  it('forbids a value other than string', () => {
    const zip = ['75001'];
    const { error } = Joi.validate({ zip }, { zip: Joi.string().usZipCode() });

    expect(error).to.be.an.instanceOf(Error);
    expect(error.isJoi).to.be.true();
    expect(error.name).to.equal('ValidationError');
    expect(error.details).to.deep.equal([
      {
        context: {
          key: 'zip',
          label: 'zip',
          value: zip,
        },
        message: '"zip" must be a string',
        path: ['zip'],
        type: 'string.base',
      },
    ]);
  });
});
