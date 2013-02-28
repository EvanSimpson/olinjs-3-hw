$(function() {
	$('#new-order').on('submit', function(){
		$.post('/order/create', $('#new-order').serialize());
		alert('Order placed.');
		return false;
	});
	$('.complete').on('submit', function(){
		$.post('/order/complete', $(this).serialize());
		$(this).parent.remove();
		return false;
	});
});