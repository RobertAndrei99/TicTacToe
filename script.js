function incepeJoc() {
document.querySelector('button').style.display = "none" ;
$('#tablaJoc').append(`
  <table>
    <tr >
      <td id = "`+giveId()+`" class="orizontal " onclick = "return xo(`+idOfTd+`)"></td>
      <td id = "`+giveId()+`" class="vertical orizontal " onclick = "return xo(`+idOfTd+`)"></td>
      <td id = "`+giveId()+`"" class="orizontal " onclick = "return xo(`+idOfTd+`)"></td>
    </tr>
    <tr >
      <td id = "`+giveId()+`" class="orizontal " onclick = "return xo(`+idOfTd+`)"></td>
      <td id = "`+giveId()+`" class="vertical orizontal " onclick = "return xo(`+idOfTd+`)"></td>
      <td id = "`+giveId()+`" class="orizontal " onclick = "return xo(`+idOfTd+`)"></td>
    </tr>
    <tr >
      <td id = "`+giveId()+`" onclick = "return xo(`+idOfTd+`)"></td>
      <td id = "`+giveId()+`" class ="vertical " onclick = "return xo(`+idOfTd+`)"></td>
      <td id = "`+giveId()+`" onclick = "return xo(`+idOfTd+`)"></td>
    </tr>
  </table>
  `)
}
var i = 0 , idOfTd ;
function giveId() {
  ++i ;
  idOfTd = i ;
  return i ;
}
var player = 1 ;
function xo(placeID) {
  if ( player % 2 > 0 ) {
     $('#' +placeID).append(`
        <div id = "`+placeID+`" class = "coloana"> x </div>
       `)
  }
  if ( player % 2 == 0 ) {
    $('#' +placeID).append(`
       <div id = "`+placeID+`" class = "coloana"> o </div>
      `)
  }
  ++player ;
  ItsWin() ;
}
var numberOfX = 0 , numberOfO = 0 ;
function checkArrows() {
  for ( var i = 1 ; i <= 9 ; i += 3 ) {
    numberOfX = 0 , numberOfO = 0 ;
    for ( var j = i ; j < i + 3 ; j++){
       if ( document.getElementById(j).innerText == 'o' ) {
         ++numberOfO ;
       }
       if (  document.getElementById(j).innerText == 'x' ) {
         ++numberOfX ;
       }
    }
    if (numberOfX == 3 ) {
      return 1 ;
    }
    else if (numberOfO == 3 ) {
      return 2 ;
    }
  }
  numberOfO = 0 ;
  numberOfX = 0 ;
  return false ;
}
function checkColumn() {
  for ( var i = 1 ; i <= 3 ; i++) {
    numberOfO = 0 , numberOfX = 0 ;
    for ( var j = i ; j < i + 7 ; j += 3 ) {
      if ( document.getElementById(j).innerText == 'o' ) {
        ++numberOfO ;
      }
      if (  document.getElementById(j).innerText == 'x' ) {
        ++numberOfX ;
      }
    }
    if (numberOfX == 3 ) {
      return 1 ;
    }
    else if (numberOfO == 3 ) {
      return 2 ;
    }
  }
  numberOfO = 0 ;
  numberOfX = 0 ;
  return false ;
}
function checkDiagonalLeft() {
  numberOfO = 0 , numberOfX = 0 ;
  for (var j = 1 ; j <= 9 ; j += 4) {
    if ( document.getElementById(j).innerText == 'o' ) {
      ++numberOfO ;
    }
    if (  document.getElementById(j).innerText == 'x' ) {
      ++numberOfX ;
    }
  }
  if (numberOfX == 3 ) {
    return 1 ;
  }
  else if (numberOfO == 3 ) {
    return 2 ;
  }
  numberOfO = 0 ;
  numberOfX = 0 ;
  return false ;
}
function checkDiagonalRight() {
  numberOfO = 0 , numberOfX = 0 ;
  for (var j = 3 ; j <= 7 ; j += 2) {
    if ( document.getElementById(j).innerText == 'o' ) {
      ++numberOfO ;
    }
    if (  document.getElementById(j).innerText == 'x' ) {
      ++numberOfX ;
    }
  }
  if (numberOfX == 3 ) {
    return 1 ;
  }
  else if (numberOfO == 3 ) {
    return 2 ;
  }
  numberOfO = 0 ;
  numberOfX = 0 ;
  return false ;
}
function ItsWin() {
if ( checkArrows() == 1 || checkDiagonalRight() == 1 || checkColumn() == 1 || checkDiagonalLeft() == 1 ) {
  document.getElementById('Player1').style.display = "block" ;
  document.getElementById('btnP2').style.display = "block" ;
}
else if ( checkArrows() == 2 || checkDiagonalRight() == 2 || checkColumn() == 2 || checkDiagonalLeft() == 2) {
  document.getElementById('Player2').style.display = "block" ;
  document.getElementById('btnP1').style.display = "block" ;
}
else if ( player == 10 && checkArrows() == false && checkDiagonalRight() == false && checkColumn() == false && checkDiagonalLeft() == false) {
  document.getElementById('Draw').style.display = "block" ;
  document.getElementById('btnReset').style.display = "block" ;
}
}
function reload() {
  location.reload() ;
}
