

// institution
$('input[name="needsBill"]').on('change', function (event) {
  var radioButton = $(event.currentTarget),
    hasInstitution = radioButton.val() === 'Taip' && radioButton.prop('checked');
  $('.extraPayForPerson').toggleClass('hidden', !hasInstitution);
}).change();

// institution
$('input[name="needsRoom"]').on('change', function (event) {
  var radioButton = $(event.currentTarget),
    hasHotel = radioButton.val() === 'Taip' && radioButton.prop('checked');
  $('.extraHotel').toggleClass('hidden', !hasHotel);
}).change();


// institution
$('input[name="hasEscort"]').on('change', function (event) {
  var radioButton = $(event.currentTarget),
    hasPerson = radioButton.val() === 'Taip' && radioButton.prop('checked');
  $('.extraPerson').toggleClass('hidden', !hasPerson);
}).change();


