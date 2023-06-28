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

//  Date-picker
$(function () {
  var bindDatePicker = function() {
   $(".date").datetimepicker({
       format:'DD MMMM YYYY',
     icons: {
       time: "fa fa-clock-o",
       date: "fa fa-calendar",
       up: "fa fa-arrow-up",
       down: "fa fa-arrow-down"
     }
   }).find('input:first').on("blur",function () {
     // check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
     // update the format if it's yyyy-mm-dd
     var date = parseDate($(this).val());

     if (! isValidDate(date)) {
       //create date based on momentjs (we have that)
       date = moment().format('YYYY-MM-DD');
     }

     $(this).val(date);
   });
 }
  
  var isValidDate = function(value, format) {
   format = format || false;
   // lets parse the date to the best of our knowledge
   if (format) {
     value = parseDate(value);
   }

   var timestamp = Date.parse(value);

   return isNaN(timestamp) == false;
  }
  
  var parseDate = function(value) {
   var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
   if (m)
     value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);

   return value;
  }
  
  bindDatePicker();
});