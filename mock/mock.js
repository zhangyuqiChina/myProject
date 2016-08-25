module.exports = {
  rules: [
    {
      pattern: /\/api\/list\.php\?/,
      respondwith: './list-phone.json'
    },
    {
      pattern: /\/api\/list\.php\?/,
      respondwith: './home-huo.json'
    }
  ]
};
