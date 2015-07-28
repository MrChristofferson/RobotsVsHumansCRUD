var Backbone = require('backbone');

// App
var App = require('./app');
var userCollection = require('./collections/user');
var productCollection = require('./collections/product')

// View: User Form
var UserFormView = require('./views/user-form');
App.Views.UserForm = new UserFormView;

// View: Product Form
var ProductFormView = require('./views/product-form');
App.Views.ProductForm = new ProductFormView;

// View: List Users
var ListUsersView = require('./views/list-users');
App.Views.ListUsers  = new ListUsersView;

// View: List Products
var ListProductsView = require('./views/list-products');
App.Views.ListProducts = new ListProductsView;

// App Router
App.Router = Backbone.Router.extend({

  // Route definitions
  routes: {
    '': 'index',
    'user/add(/)': 'addUser',
    'user/:id/edit(/)': 'addUser',
    'user/:id/delete(/)': 'deleteUser',
    'products(/)': 'product',
    'products/add(/)': 'addProduct',
    'products/:id/edit(/)': 'addProduct',
    'products/:id/delete(/)': 'deleteProduct', 
    '*actions': 'defaultRoute'
  },

  // Route handlers

  index: function() {
    App.Views.ListUsers.render();
  },

  product: function() {
    App.Views.ListProducts.render();
  },

  addUser: function(id) {
    App.Views.UserForm.render(id);
  },

  addProduct: function(id) {
    App.Views.ProductForm.render(id);
  },

  deleteUser: function(id) {
    var user = userCollection.get(id);

    user.destroy().done(function (user) {
      App.router.navigate('/', { trigger: true })
    });
  },

   deleteProduct: function(id) {
    var product = productCollection.get(id);

    product.destroy().done(function (product) {
      App.router.navigate('/products', { trigger: true })
    });
  },

  defaultRoute: function(actions) {
    console.log('404');
  }
});

// Initiate the router
App.router = new App.Router;

Backbone.history.start();


$(function() {

  // $('main').on('mouseenter', 'div.item', function () {
  //   $(this).children('div.info').removeClass('hidden')
  // })

  // $('main').on('mouseout', 'div.item', function () {
  //   $(this).children('div.info').addClass('hidden')
  // })


}) 























