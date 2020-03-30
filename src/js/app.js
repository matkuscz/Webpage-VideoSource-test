const nadpis = document.querySelector('h1');
nadpis.textContent = 'Hej hou';


// var app = (function () { 
//     var start = function() {
//         console.log("Jedu");
//         var monthNames = ["Leden", "Unor", "Brezen", "Duben", "Kveten", "Cerven", "Cervenec", "Srpen", "Zari", "Rijen", "Listopad", "Prosinec"];

//         var today = new Date();
//         var dd = today.getDate();
//         var mm = today.getMonth();
//         var yyyy = today.getFullYear();

//         today = monthNames[mm] + ' ' + dd + ', ' + yyyy;

//         $("h1").text(today);
//     }

//     return {
//         start: start
//     }
// })();