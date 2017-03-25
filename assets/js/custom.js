

// institution
$('input[name="extraPayForPerson"]').on('change', function (event) {
  var radioButton = $(event.currentTarget),

    hasInstitution = radioButton.val() === 'Taip' && radioButton.prop('checked');
  console.log(radioButton.val());
  $('.extraPayForPerson').toggleClass('hidden', !hasInstitution);
}).change();

// institution
$('input[name="extraHotel"]').on('change', function (event) {
  var radioButton = $(event.currentTarget),

    hasHotel = radioButton.val() === 'Taip' && radioButton.prop('checked');
  $('.extraHotel').toggleClass('hidden', !hasHotel);
}).change();


// institution
$('input[name="extraPerson"]').on('change', function (event) {
  var radioButton = $(event.currentTarget),

    hasPerson = radioButton.val() === 'Taip' && radioButton.prop('checked');
  $('.extraPerson').toggleClass('hidden', !hasPerson);
}).change();


