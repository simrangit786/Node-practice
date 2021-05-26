console.log("abc");
$(document).ready(function(){

    $('form').on('submit', function(){

        console.log("@@");
        var item = $('form input');
        var todo = {item: item.val()};

        console.log(item);
  
    //     $.ajax({
    //       type: 'POST',
    //       url: '/todo',
    //       data: todo,
    //       success: function(data){
    //         //do something with the data via front-end framework
    //         location.reload();
    //       }
    //     });
  
    
  
     

    fetch('http://localhost:3000/todo', {
    method: 'post',
    body: JSON.stringify(todo)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
      console.log(data);
    // ChromeSamples.log('Created Gist:', data.html_url);

  });
  return false;

  
})
  
    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
          type: 'DELETE',
          url: '/todo/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
  
  })