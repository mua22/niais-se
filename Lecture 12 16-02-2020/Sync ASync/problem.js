console.clear();
console.log("Staring to read data");
function dataReceived() {
  console.log("Data Received");
}
setTimeout(dataReceived, 2000);
console.log("Finishing");
