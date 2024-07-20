const exp = require('express')
const web = exp();

web.use('/', exp.static('www')).use('/', exp.static('www/pages'))

web.use((req, res, next) => {
  res.status(404).sendFile(`${__dirname.replace(`\\`, `/`)}/www/pages/404/index.html`);
});

web.listen(80, () => {
  console.log("| Site up!")
})