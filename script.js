

// change desktop design to mobile as appropriate

// var device = $('.device');

// $(document).ready(function() {
//     checkWinWidth();

//     $(window).on('resize', function() {
//         checkWinWidth();
//     });
// });



// // all functions

// function checkWinWidth() {
//     /// checks the width of the window and changes the footer link accordingly
//     // (first time trying, let me see how this goes)

//     var winWidth = $(window).width(); // get window width
//     var deviceText = device.html().split('/'); // get the text content of the selected element
//     var newDeviceText = ''; // new text content

//     if (winWidth < 768) { // mobile
//         deviceText[1] = 'mobile-design.jpg">mobile<'; // change the text in the resulting array deviceText
//         for (let a = 0; a <= deviceText.length; a++) {
//             newDeviceText += deviceText[a] + '/'
//         }; // concat the items back together, putting the slashes as well
//         newDeviceText = newDeviceText.substring(0, (newDeviceText.length - 1)); // remove the last string!
//         device.html(newDeviceText); // set the new text up ^^

//     } else { // anything else
//         deviceText[1] = 'desktop-design.jpg">desktop<'; // change the text in the resulting array deviceText
//         for (let a = 0; a <= deviceText.length; a++) {
//             newDeviceText += deviceText[a] + '/'
//         }; // concat the items back together, putting the slashes as well
//         newDeviceText = newDeviceText.substring(0, (newDeviceText.length - 1)); // remove the last string!
//         device.html(newDeviceText); // set the new text up ^^

//     };
// };