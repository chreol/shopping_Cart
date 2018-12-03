var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

var $form = $('#checkout-form')

$form.submit(function (event) {
    $form.find('button').prop('disable', true);
    Stripe.card.createToken({
        name: $('#card-name').val(),
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val()
      }, stripeResponseHandler);
      return false;
});

function stripeResponseHandler(status, response) {
    if (response.error) { // Problem!

        // Show the errors on the form
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('invisible');
        $form.find('button').prop('disabled', false); // Re-enable submission
    
      } else { // Token was created!
    
        // Get the token ID:
        var token = response.id;
    
        // Insert the token into the form so it gets submitted to the server:
        $form.append($('<input type="invisible" name="stripeToken" />').val(token));
    
        // Submit the form:
        $form.get(0).submit();
    
      }
}