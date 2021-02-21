const axios = require('axios')

module.exports = {
  home: (req, res) => {
    axios
      .get(`${process.env.API_URL}/api/users`)
      .then((result) => {
        console.log(result)
        res.render('index', { users: result.data })
      })
      .catch((err) => {
        console.log('ERROR')
        res.send(err)
      })
  },
  add: (req, res) => {
    res.render('add_user')
  },
  update: (req, res) => {
    res.render('update_user')
  }
}
