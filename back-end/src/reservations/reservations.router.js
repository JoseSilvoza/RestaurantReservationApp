/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

 const router = require("express").Router();
 const methodNotAllowed = require("../errors/methodNotAllowed");
 const controller = require("./reservations.controller");
 
 router
   .route("/")
   .get(controller.list)
   .post(controller.create)
   .all(methodNotAllowed);
 
 router
   .route("/:reservation_id/status")
   .put(controller.statusChange)
   .all(methodNotAllowed);
 
 // router.route("/:reservation_id/edit").put(controller.update);
 
 router
   .route("/:reservation_id")
   .get(controller.read)
   .put(controller.update)
   .all(methodNotAllowed);
 
 module.exports = router;