// // Set your app credentials
// const credentials = {
//   apiKey: "6c30b78bdcc04f80b5e426ee276efa72b5cef23a1463a56d40caed01876ff5ad",
//   username: "alexkemboi97",
// };
// // Initialize the SDK
// const AfricasTalking = require("africastalking")(credentials);

// // Get the SMS service
// const sms = AfricasTalking.SMS;

// function sendMessage(message) {
//   const options = {
//     // Set the numbers you want to send to in international format
//     to: ["+254799807487", "+254726837210"],
//     // Set your message
//     message: `${message}`,
//     // Set your shortCode or senderId
//     //from: "XXYYZZ",
//   };
//   // That’s it, hit send and we’ll take care of the rest
//   sms.send(options).then(console.log).catch(console.log);
// }
export default sendMessage;
// const rotationAreaId = "Emergency Medicine";
// const endRotationDate = "1/1/1993";
// const startRotationDate = "1/1/2000";
// sendMessage(
//   `You have been placed in the ${rotationAreaId} from ${startRotationDate} to ${endRotationDate}`
// );
