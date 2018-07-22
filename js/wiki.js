$('button.a').click(function(){
   alert('search start!');
   sendwikiRequest();
   alert('search done!')
});

$('input.b').change(function(){
   if ($(this).val()){
      alert($(this).val()+' is the search!')
   sendwikiRequest($(this).val());
   }
});

function sendwikiRequest(search = '') {
   $.ajax({
      url: "https://en.wikipedia.org/api/rest_v1/page/random/title",
   dataType: 'json'
   }).done(function(data){
      alert(data.items[0].title);
   })
}