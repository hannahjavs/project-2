"use strict";console.log("Hello world");var $recipeType=$("#recipeType-form"),$form=$("form"),$favoriteForm=$("form.favorite");$recipeType.length>0&&$recipeType.find("select").on("change",function(){return $recipeType.trigger("submit")}),$form.length>0&&$form.validate(),$favoriteForm.length>0&&$favoriteForm.on("submit",function(e){e.preventDefault(),window.localStorage.setItem("scrollTop",$(window).scrollTop()),e.target.submit()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiJHJlY2lwZVR5cGUiLCIkIiwiJGZhdm9yaXRlRm9ybSIsImxlbmd0aCIsImZpbmQiLCJvbiIsInRyaWdnZXIiLCIkZm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEl0ZW0iLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJ0YXJnZXQiLCJzdWJtaXQiXSwibWFwcGluZ3MiOiJhQUFBQSxRQUFRQyxJQUFJLGVBR1osSUFBTUMsWUFBY0MsRUFBRSxvQkFBaEJELE1BQUFBLEVBQUFBLFFBR0FFLGNBQWdCRCxFQUFFLGlCQUV4QkQsWUFBQUcsT0FBQSxHQUFBSCxZQUFBSSxLQUFBLFVBQUFDLEdBQUEsU0FBQSxXQUFBLE9BQUFMLFlBQUFNLFFBQUEsWUFDbUVDLE1BQU1QLE9BQUFBLEdBQUFBLE1BQVlNLFdBTWxGSixjQUFjQyxPQUFTLEdBRDFCRCxjQUFBRyxHQUFBLFNBQUEsU0FBQUcsR0FDR04sRUFBQUEsaUJBRUNNLE9BQUVDLGFBQUZDLFFBQUEsWUFBQVQsRUFBQVUsUUFBQUMsYUFDQUosRUFBQUssT0FBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ0hlbGxvIHdvcmxkJyk7XG5cblxuY29uc3QgJHJlY2lwZVR5cGUgPSAkKCcjcmVjaXBlVHlwZS1mb3JtJyk7XG5jb25zdCAkZm9ybSA9ICQoJ2Zvcm0nKTtcblxuY29uc3QgJGZhdm9yaXRlRm9ybSA9ICQoJ2Zvcm0uZmF2b3JpdGUnKTtcblxuLy8gbWFrZSBmb3JtIHdvcmtcbmlmKCRyZWNpcGVUeXBlLmxlbmd0aCA+IDApICRyZWNpcGVUeXBlLmZpbmQoJ3NlbGVjdCcpLm9uKCdjaGFuZ2UnLCAoKSA9PiAkcmVjaXBlVHlwZS50cmlnZ2VyKCdzdWJtaXQnKSk7XG5cbmlmKCRmb3JtLmxlbmd0aD4wKSAkZm9ybS52YWxpZGF0ZSgpO1xuXG5cbi8vIEZPUiBVU0VSIEZBVk9SSVROR1xuaWYoJGZhdm9yaXRlRm9ybS5sZW5ndGggPiAwKSB7XG4gICRmYXZvcml0ZUZvcm0ub24oJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGdldCB3aW5kb3cgcG9zaXRpb25cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njcm9sbFRvcCcsICQod2luZG93KS5zY3JvbGxUb3AoKSk7XG4gICAgZS50YXJnZXQuc3VibWl0KCk7XG4gIH0pO1xufVxuIl19
