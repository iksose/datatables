removedData = [];

mockData = [
    [
      "Trident",
      "Internet Explorer 4.0",
      "Win 95+",
      "4",
      "X"
    ],
    [
      "Trident",
      "Internet Explorer 5.0",
      "Win 95+",
      "5",
      "C"
    ],
    [  "Trident2",
        "Internet Explorer 6.0",
        "Win 96+",
        "5",
        "D"]
    ]


// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

$(document).ready(function() {




//Create loading symbol
    reading = {};
$('#example').find('tr').each(function(i){
    reading.Value = $(this).text();
    // and so forth
});

checkLoad = function() {
    if (reading.Value.length < 12){
    console.log("Look it's empty")
    }else{
        console.log("Not empty")
}
}
//end possible loading


//datatable
        createTable = function(param){
    $('#demo').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>' );
    $('#example').dataTable( {
        "aaData": param,
        "aoColumns": [
            { "sTitle": "Engine" },
            { "sTitle": "Browser" },
            { "sTitle": "Platform" },
            { "sTitle": "Version", "sClass": "center" },
            { "sTitle": "Grade", "sClass": "center" }
        ]
    } );

 return oTable = $("#example").dataTable()
}
//end fun

//Formating

function fnFormatDetails ( nTr )
{
    var aData = oTable.fnGetData( nTr );
    var sOut = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
    sOut += '<tr><td>Rendering engine:</td><td>'+aData[2]+' '+aData[5]+'</td><td>SECOND</td><td>THIRD</td></tr>';
    sOut += '</table>';
     
    return sOut;
}
//end format

//MOCK AJAX //

  $.mockjax({
  url: '/restful/fortune',
  responseTime: 700,
  responseText: {
    status: 'success',
    fortune: 'Are you a turtle?',
    aaData: mockData 
  }
});


    $.mockjax({
  url: '/restful/nofortune',
  responseTime: 700,
  type: "post",
  responseText: {
    status: 'success',
    fortune: 'Are you a turtle?',
    aaData: mockData 
  }
});


// END MOCK


//AJAX CALL TO RESTFUL API

    $.getJSON('/restful/fortune', function(response) {

  if ( response.status == 'success') {
    myObj2 = response.aaData
    createTable(myObj2);

  } else {
    $('#fortune').html( 'Things do not look good, no fortune was told' );
  }
});

//END

// var getEventTargetIndex = function(event){
//     var i = $(event.currentTarget).index();
//     console.log("INDEX", i);
//     return i;
// }
          //MICHAEL VANASSE//
// var removeRow = function(event){
//     var i = getEventTargetIndex(event)
//     console.log("WE REMOVED THIS ROW AT", i)
// }


$('tbody').on('click', 'tr', function(event, el){
  var targ = $(event.currentTarget)
  var sibs = targ.siblings()
  console.log("HERE", targ, sibs)

  targ.removeClass("faded")
  sibs.addClass("faded")
})


$("#example tbody").on('click', 'tr', function(a,b,c){
  window.a = a;
  window.b = b;
  window.c = c;
  window.t = this;
  var dicky = t
  listofClicks = []


//   listofClicks.push(t)




//     $("tbody").animate({
//     "opacity": 0.5
//   })

//     var opacityState = 0;


//     console.log("OPACITY IS", $("tbody").css("opacity"))




//             $("tr").removeClass("diffColor")
//              // $(".peanut").removeClass("diffColor")
//               // $("tr > tr").removeClass("diffColor")
//               $(this).addClass("diffColor")
//               // $(this).animate({"opacity": "+=0.5"})
//               $(this).fadeTo('slow', 0, function(){})
//               // $(".peanut").addClass("diffColor")
//    console.log(a,b,c, this)


nTr = $(this).parents('tr')[0];

if (typeof nTr == "undefined"){
      //CLOSE ALL NODES INFO TABS     
      tomato = oTable.fnGetNodes()
      for(i = 0; i < tomato.length; i++)
      {
        oTable.fnClose(tomato[i])
      }
  }




// nTr = $(this).parents('tr')[0];
//         console.log ("nTr is this", nTr)
            /* Open this row */
            this.src = "../examples_support/details_close.png";
            this.cocks = (function(){
              console.log("Shit");
            })();
            oTable.fnOpen( t, fnFormatDetails(t), "dataTable peanut");

// });


    // console.log("HERE", a, b, this)
    // window.a = a;
    // window.b = b;
    // window.t = this;

    // console.log("CURRENT TARGET INDEX: ", getEventTargetIndex(event))

    // mime = $("#example").dataTable().fnGetPosition(this)
    // mime2 = $("#example").dataTable().fnGetData(mime)
    // console.log("Removed", mime2, "at position", mime)
    // myObj2.remove(mime)
    // removedData.push(mime2)
    // $("#example").dataTable().fnDestroy();
    //  createTable(myObj2)
})


    // $('#example tbody td').live( 'click', function () {
    //     nTr = $(this).parents('tr')[0];
    //     console.log ("nTr is this", nTr)
    //         /* Open this row */
    //         this.src = "../examples_support/details_close.png";
    //         this.cocks = (function(){
    //           console.log("Shit");
    //         })();
    //         oTable.fnOpen( nTr, fnFormatDetails(nTr), "dataTable peanut");
    // } );


}); //end document.ready



