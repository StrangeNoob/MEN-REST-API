const express = require("express");
const contactRoute = require("./contact.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/contacts",
    route: contactRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
