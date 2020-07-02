# CF7 to Google Analytics 
Send event to Google Analytics from Wordpress CF7 form submit


<h2>How to use</h2>

<p>1. Add Google Analitics Gtag to HEAD of your site. For Example:</p>

```JS
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-XXXXXXX-X');
</script>
``` 
<p>3. Create Conversion in Google Analytics </p>
<img src=images/GA_CF7.png raw=true />

<p>2. Add <b>analytics-form-submit.js</b> to send event</p>

```JS
<!--  Google Analytics Form Submit Start  -->
   <script src="js/analytics-form-submit.js"></script>
<!--  Google Analytics Form Submit  End  -->
``` 
<p>3. In script file set variables as your set fields in Analitics:</p>

<p>
<b> 'event_category': 'contactform' </b> </br>
<b>       'event_action': 'Submit' </b> </br>
</p>
