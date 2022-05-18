const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  const categories = await Category.findAll({
    include: Product,
  });
  res.json(categories);
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  const categories = await Category.findAll({
    include: Product,
    where: {
      id: req.params.id, 
    },
  });
  // be sure to include its associated Products
  res.json(categories);
});

router.post("/", async (req, res) => {
  // create a new category
  await Category.create({ category_name: req.body.category_name });
  res.send()
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  await Category.update(
    { category_name: req.body.category_name },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send()
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send()
});

module.exports = router;
