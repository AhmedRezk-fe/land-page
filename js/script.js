$(window).on("load", function () {

   var videoURL = $('.video').attr('src'),
      dataplay1 = $('.video').attr('data-play');

   $('.video').attr('src', videoURL + '?autoplay=1');
   $('.video').attr('data-play', 1);

   $(".play-icon").click(function () {
      // if (dataplay1 == 1) {

         var videoURL = $('.video').attr('src');
         videoURL = videoURL.replace("?autoplay=1", "");
         $('.video').prop('src', '');
         $('.video').prop('src', videoURL);

         $('.video').attr('data-play', 1);


      // }
      $(".modal-video").addClass("active");
      $("body").addClass("over");

      var videoURL = $('.modal-v').attr('src'),
         dataplay = $('.modal-v').attr('data-play');

      $('.modal-v').attr('src', videoURL + '?autoplay=1');
      $('.modal-v').attr('data-play', 1);


   })
   $(".play-btn").click(function () {

      var videoURL = $('.video').attr('src');
      videoURL = videoURL.replace("?autoplay=1", "");
      $('.video').prop('src', '');
      $('.video').prop('src', videoURL);

      $('.video').attr('data-play', 1);



      $(".modal-video").addClass("active");
      $("body").addClass("over");

      var videoURL = $('.modal-v').attr('src'),
         dataplay = $('.modal-v').attr('data-play');

      $('.modal-v').attr('src', videoURL + '?autoplay=1');
      $('.modal-v').attr('data-play', 1);
   })

   $(".overlay").click(function () {


      $(".modal-video").removeClass("active");
      $("body").removeClass("over");
      // $(".modal-v")[0].src = "";
      var videoURL = $('.modal-v').attr('src');
      videoURL = videoURL.replace("?autoplay=1", "");
      $('.modal-v').prop('src', '');
      $('.modal-v').prop('src', videoURL);

      $('.modal-v').attr('data-play', 0);
   })

   $(".modal-header-mm .icon").click(function () {
      $(".modal-video").removeClass("active");
      $("body").removeClass("over");

      var videoURL = $('.modal-v').attr('src');
      videoURL = videoURL.replace("?autoplay=1", "");
      $('.modal-v').prop('src', '');
      $('.modal-v').prop('src', videoURL);

      $('.modal-v').attr('data-play', 0);
   })

});