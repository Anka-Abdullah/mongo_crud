var Userdb = require('../model/user')

module.exports = {
  create: (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: 'content can not be empty' })
      return
    }
    const { name, email, gender, status } = req.body
    const user = new Userdb({
      name,
      email,
      gender,
      status
    })
    user
      .save(user)
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            'Some error ocurred while creating a create operation'
        })
      })
  },
  find: (req, res) => {
    Userdb.find()
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || ' error ocurred while retriving user information'
        })
      })
  },
  patch: (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: 'content can not be empty' })
      return
    }
    const { id } = req.params
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((result) => {
        if (!result) {
          res.status(404).send({ message: `Cannot Update user with id=${id}` })
        } else {
          res.send(result)
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || `Error update user information` })
      })
  },
  del: (req, res) => {
    const { id } = req.params
    Userdb.findByIdAndDelete(id)
      .then((result) => {
        if (!result) {
          res
            .status(404)
            .send({ message: `Cannot delete with id=${id}. Maybe id is wrong` })
        } else {
          res.send({ message: `User was deleted successfully!` })
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || `Could not delete user` })
      })
  }
}
