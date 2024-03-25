document.documentElement.style.visibility = 'hidden';

document.addEventListener('DOMContentLoaded', function() {
	
		var images = document.getElementsByTagName("img");

			for (let image of images) {

				image.style.filter = 'blur(5px) ';
				
			}
			
		document.documentElement.style.visibility = '';
	
});