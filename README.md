# CF7 to Google Analytics 
Send event to Google Analytics from Wordpress CF7 form submit


<h2>How to use</h2>

<p>1. Add Google Analitics Gtag to HEAD of your site</p>

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
<p>3. Create Conversion in Google Analitics </p>
![Test Image 1](GA%20CF7.png)
<p>2. Add JS file to send event</p>

```JS
<!--  Google Analytics Form Submit Start  -->
    <script src="js/analytics-form-submit.js"></script>
<!--  Google Analytics Form Submit  End  -->
``` 
