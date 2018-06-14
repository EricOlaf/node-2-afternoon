module.exports = {
  create: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, description, price, imageurl } = req.body;

    dbInstance
      .create_product([name, description, price, imageurl])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Not today" });
        console.log(err);
      });
  },

  getOne: (req, res) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .read_product(params.id)
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send({ errorMessage: "Not today" });
        console.log(err);
      });
  },

  getAll: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Not today" });
        console.log(err);
      });
  },

  update: (req, res) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;

    dbInstance
      .update_product([params.id, query.desc])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Not today" });
        console.log(err);
      });
  },

  delete: (req, res) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .delete_product(params.id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Not today" });
        console.log(err);
      });
  }
};
