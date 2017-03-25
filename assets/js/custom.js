/* ============================================================
 * Plugin Core Init
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */

'use strict';

$(document).ready(function() {

    //Intialize Slider
    var slider = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 1000
    });


  // institution
  $('input[name="contract"]').on('change', function (event) {
    var radioButton = $(event.currentTarget),

      hasInstitution = radioButton.val() === 'yes' && radioButton.prop('checked');
    $('.extraInstitutionInfo').toggleClass('hidden', !hasInstitution);
  }).change();

  // institution
  $('input[name="hotel"]').on('change', function (event) {
    var radioButton = $(event.currentTarget),

      hasHotel = radioButton.val() === 'yes' && radioButton.prop('checked');
    console.log("HOTEL" + hasHotel);
    $('.extraHotelInfo').toggleClass('hidden', !hasHotel);
  }).change();


  // institution
  $('input[name="person"]').on('change', function (event) {
    var radioButton = $(event.currentTarget),

      hasPerson = radioButton.val() === 'yes' && radioButton.prop('checked');
    $('.extraPersonInfo').toggleClass('hidden', !hasPerson);
  }).change();




});
