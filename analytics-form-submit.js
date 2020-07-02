 document.addEventListener( 'wpcf7mailsent', function(event) {
   console.log("send OK");
   gtag('event', 'send', {
       'event_category': 'contactform',
       'event_action': 'Submit'});
  }, false );
