var Backbone = require('backbone');
var App = require('../app');

/****************************************
  Model: User
*****************************************/

App.Models.Product = Backbone.Model.extend({
  url: function() {
    var base = App.Settings.apiRoot + '/products';
    if (this.isNew()) return base;
    return base + '/' + this.id
  }
});

module.exports = App.Models.Product;
