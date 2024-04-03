/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

/* +( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )(); */

import "npm:@fortawesome/fontawesome-free/css/all.css";

$(function () {
  $("#vision").show();
});
$('.pestana-opcion li a').on('click', function (e) {
  e.preventDefault();
  $('.pestana-opcion-contenido').hide();
  let IDSelector = $(this).attr('href');
  $(IDSelector).show();
})
