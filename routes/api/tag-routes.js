const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  const tag = await Tag.findAll({
    include: Product,
  });
  res.json(tag);
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  const tag = await Tag.findAll({
    include: Product,
    where: {
      id: req.params.id, 
    },
  });
  // be sure to include its associated Products
  res.json(tag);
});

router.post("/", async (req, res) => {
  // create a new category
  await Tag.create({ ...req.body });
  res.send()
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  await Tag.update(
    { ...req.body },
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
  await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send()
});
  
module.exports = router;