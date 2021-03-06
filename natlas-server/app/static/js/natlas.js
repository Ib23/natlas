$(function() {
		$('.expand-img').on('click', function() {
			$('.imagetitle').text($(this).find('img').attr('alt'));
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   
		});		
});


$(document).ready(function() {
    $('.dataTable').DataTable( {
        "columnDefs": [
            { "orderable": false, "targets": 'table-controls' }
        ]
    });
    $('[data-toggle="popover"]').popover()
});

$(document).ready(function() {
  
  var btn = $('#backtotop');
  btn.tooltip();
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});