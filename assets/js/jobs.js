// Client-side search and filter for jobs page
document.addEventListener('DOMContentLoaded', function() {
  var search = document.getElementById('job-search');
  var filter = document.getElementById('job-filter');
  var clear = document.getElementById('job-clear');
  var items = Array.prototype.slice.call(document.querySelectorAll('.job-item'));

  function normalize(text){ return (text||'').toLowerCase(); }

  function applyFilter(){
    var q = normalize(search.value);
    var tag = filter.value;
    items.forEach(function(item){
      var title = normalize(item.querySelector('.card-title').innerText);
      var excerpt = normalize(item.querySelector('.card-text').innerText);
      var tags = normalize(item.querySelector('.job-tags') ? item.querySelector('.job-tags').innerText : '');
      var visible = true;
      if (q){ visible = (title.indexOf(q) !== -1) || (excerpt.indexOf(q) !== -1) || (tags.indexOf(q) !== -1); }
      if (tag){ visible = visible && (tags.indexOf(normalize(tag)) !== -1); }
      item.style.display = visible ? '' : 'none';
    });
  }

  if (search) search.addEventListener('input', applyFilter);
  if (filter) filter.addEventListener('change', applyFilter);
  if (clear) clear.addEventListener('click', function(e){ e.preventDefault(); search.value=''; filter.value=''; applyFilter(); });
});
