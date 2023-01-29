const input = document.getElementById('button');
function addingEventListener() {
    input.addEventListener('click', function() {
        alert('I was clicked!');
      });
    
}



function clickAlert() {
    alert('I was clicked!');
  }
  
  input.addEventListener('click', clickAlert);