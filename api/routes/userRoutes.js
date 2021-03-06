
'use strict';
module.exports = function(app) {
  const user = require('../controllers/userController');

  // User Route
  app.route('/users')
    .get(user.list_all_users)
    .post(user.create_a_user);

  app.route('/users/:userId')
    .get(user.read_a_user)
    .put(user.update_a_user)
    .delete(user.delete_a_user);
};
