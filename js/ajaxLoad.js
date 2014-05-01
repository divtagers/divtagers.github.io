/*
$(window).bind("popstate", function(e) {
    change(e.originalEvent.state);
});

$('a.pjax').click(function (e) {
  if (history.pushState) {
    e.preventDefault();

    //get link of a tag
    var link = this.href;

    //get data of page
    $.get(link, function (data) {
      if (data !== undefined || data !== '') {
        $('#content').hide().html(data).fadeIn('fast', function () {
          var title = $('#content > p.lead').text();
          title = title + ' - {{ site.title }}';
          window.history.pushState("", title, link);
          //window.history.replaceState("", title, link);
          $(window).bind("popstate", function (e) {
            var data = e.originalEvent.state;
            if (data) {
              //drawHTML(data, false);
              if (data) {
                history.pushState("", title, link);
              $('#content').html(data);
              }
            }
          });
        });
      } else {
        window.location.href = link;
      }
    });

  } else {
    //do nothing
  }
});
*/