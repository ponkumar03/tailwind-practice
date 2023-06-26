$('#file').on('change', function() {
    var file = this.files[0],
        filename = file.name,
        $label = $(this).next('.file-custom'),
        $preview = $('#preview'),
        img = document.createElement("img"),
        reader = new FileReader();
    
    img.file = file;
    img.classList.add("img-responsive");
    $preview.html(img);
    
    reader.onload = (function(aImg) {
      return function(e) {
        aImg.src = e.target.result;
      };
    })(img);
  
    reader.readAsDataURL(file);
    
    $label
      .attr('data-label', filename)
        .addClass('active');
  });