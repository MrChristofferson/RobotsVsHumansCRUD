var $ = require('jquery');
var Backbone = require('backbone');
var listUsersTemplate = require('../templates/list-products.hbs');

// App

var App = require('../app');

//=========================================================================

var ListProducts = Backbone.View.extend({  // FIRST
  el: $('main'),

  collection: App.Collections.product,

  render: function () {
    var _this = this;
    var productCollection = this.collection;

    productCollection.fetch().done(function (products) {
      _this.$el.html(listUsersTemplate(products))
    })
  }

}); // FIRST END

module.exports = ListProducts;



