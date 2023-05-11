const express = require("express");
const { getQuote } = require("node-quotegen");

const router = express.Router();

/**
 * Route handler for GET /
 * Retrieves multiple quotes based on the specified limit.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 *
 * @returns {Object} - JSON response with an array of quotes, status, and total count.
 */
router.get("/", (req, res) => {
  const { limit } = req.query;

  const categories = [
    "motivational",
    "technology",
    "funny",
    "inspirational",
    "friendship",
    "nature",
    "success",
    "attitude",
  ];

  const dataArr = [];

  if (!limit == false) {
    for (let i = 0; i < limit; i++) {
      const randomIndex = Math.floor(Math.random() * categories.length);
      const category = categories[randomIndex];
      dataArr.push({ quote: getQuote(category), category });
    }
    res.json({
      status: true,
      data: dataArr,
      total: dataArr.length,
    });
  } else {
    res.json({
      status: true,
      data: dataArr,
      total: dataArr.length,
    });
  }
});

/**
 * Route handler for GET /random
 * Retrieves a random quote, either from the specified category or a random category.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 *
 * @returns {Object} - JSON response with a random quote, category, and status.
 */

router.get("/random", (req, res) => {
  const { category } = req.query;

  const categories = [
    "motivational",
    "technology",
    "funny",
    "inspirational",
    "friendship",
    "nature",
    "success",
    "attitude",
  ];

  try {
    const selectedCategory =
      category || categories[Math.floor(Math.random() * categories.length)];
    const quote = getQuote(selectedCategory);
    if (quote) {
      res.json({
        status: true,
        quote: quote,
        category: selectedCategory,
      });
    } else {
      res.status(400).json({
        status: false,
        data: "Quote Not Found",
      });
    }
  } catch (e) {
    // c onsole.log(e);
    res.status(400).json({
      status: false,
      data: "Category Not Found",
    });
  }
});

module.exports = router;
