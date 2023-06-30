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



  // multi-select chips
var txt = document.getElementById('txt');
var list = document.getElementById('list');
var items = ['HTML', 'CSS', 'Java', 'JavaScript'];

txt.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    let val = txt.value;
    if (val !== '') {
      if (items.indexOf(val) >= 0) {
        alert('Tag name is a duplicate');
      } else {
        items.push(val);
        render();
        txt.value = '';
        txt.focus();
      }
    } else {
      alert('Please type a tag Name');
    }
  }
});

function render() {
  list.innerHTML = '';
  items.map((item, index) => {
    list.innerHTML += `<li><span>${item}</span><a href="javascript: remove(${index})">X</a></li>`;
  });
}

function remove(i) {
  items = items.filter(item => items.indexOf(item) != i);
  render();
}

window.onload = function() {
  render();
  txt.focus();
}

$( function() {
	$( "#datepicker" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );


// Start-Datepicker
$(document).ready(function(){
      
  $(function () {
  $('#startDate').datepicker({
   format: 'dd M yyyy' 
  });
  });
  
});

// END-Datepicker
$(document).ready(function(){
      
  $(function () {
  $('#endtDate').datepicker({
   format: 'dd M yyyy' 
  });
  });
  
});