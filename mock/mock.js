module.exports = {
  rules: [
    {
      pattern: /\/api\/list\.php\?/,
      respondwith: './list-phone.json'
    }
  ]
};
