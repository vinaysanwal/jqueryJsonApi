$.getJSON("https://mysafeinfo.com/api/data?list=usamericanidol&format=json",function(data){
//$("p").text(JSON.stringify(data));
var missWorldList = document.getElementById("missworld");
for(var i =0 ; i<data.length; i++){
  var opt = document.createElement("option");
  opt.innerHTML = data[i].nm;
  opt.value = data[i].nm;
  missWorldList.appendChild(opt);
}
//$("p").text(data[0].nm);
});
