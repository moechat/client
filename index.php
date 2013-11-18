<!DOCTYPE html>
<html>
	<head>
		<title>Expressionizr</title>
		<link rel="icon" type="image/png" href="images/logo.png" />
		<script type="text/x-mathjax-config">
			MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
		</script>
		<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
		<link rel="stylesheet" href="css/buttons.css">
	</head>
	<body bgcolor="#ddd">
		<a href="index.html"><h1><font size="5000" color="#4B8DF8">$\ \ \Huge{e}\Large{\mathrm{xpressionizr}}$</font></h1></a>
		<br /><br />
		<blockquote>
			<input type="file" id="file" class="bluebtn" />
		</blockquote>
		<form style="display:none" method="post" action="ocr.php" enctype="multipart/form-data">
			<input name="file" type="hidden" id="sendfile" />
			<input type="submit" id="submitform" />
		</form>
		<script type="text/javascript">
			function readFile(f) {
				var file = f.target.files[0];
				if (file) {
					var fr = new FileReader();
					fr.onload = function (e) {
						document.getElementById('sendfile').value = e.target.result;
						document.getElementById("submitform").click();
					}
					fr.readAsDataURL(file);
				}
			}
			document.getElementById("file").addEventListener("change", readFile, false);
		</script>
	</body>
</html>

