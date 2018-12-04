console.log("Starting app");

setTimeout(() => {
  console.log("Time delay due to time out");
},4000);

setTimeout(() => {
  console.log("Time delay due to time out 0");
},0);

console.log("Finishing app");
