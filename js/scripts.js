// ...

var first = false;

var progressBar = document.getElementById("progressBar")
var theImageEl = document.getElementById("theImageEl")
var imglist = document.getElementById("imglist")

imglist.addEventListener("click", function(evt){
  console.log(evt)
  
  if (evt.target.nodeName === "LI"){
    document.getElementById("imgUrl").value = evt.target.innerHTML
  }
})

// progress on transfers from the server to the client (downloads)
function updateProgress (oEvent) {
  
  if (first === false){
    console.log(oEvent);
    first = true;
  }
  
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total;
    console.log(percentComplete)
    progressBar.style.width = (percentComplete * 100) + "%"
    // ...
  } else {
    // Unable to compute progress information since the total size is unknown
  }
}

function transferComplete(evt) {
//   console.log(evt.currentTarget.response)
  console.log("The transfer is complete.");
  var reader = new FileReader();
  reader.readAsDataURL(evt.currentTarget.response);
  
  setTimeout(function(){
     progressBar.style.width = "0%"
  }, 2000)
  
  reader.addEventListener("load", function(evt){
    console.log(evt.target.result)
    theImageEl.src = evt.target.result
  })
  
//   theImageEl.src = 'data:image/png;base64,' + base64Encode(evt.currentTarget.response)
  
}

function transferFailed(evt) {
  console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}

function loadImage(){
  
var imageUrl = document.getElementById("imgUrl").value + "?" + new Date().getTime();
  
  var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress);
oReq.responseType = 'blob';
oReq.addEventListener("load", transferComplete);
oReq.addEventListener("error", transferFailed);
oReq.addEventListener("abort", transferCanceled);

oReq.open("GET", imageUrl);
  
oReq.send()
  
}

