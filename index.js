// Write your code in this file!
const currentUser = 'Grace Hopper';
// This passes the 2nd test, but not the 3rd:
// const welcomeMessage = 'Welcome to Flatbook, ';

// This passes the 1st and 3rd tests, but not the 2nd:
// const welcomeMessage = currentUser;

// This causes BOTH the 2nd AND 3rd tests to fail:
// const welcomeMessage = 'Welcome to Flatbook, currentUser';

// This is one solution that passes BOTH the 2nd AND 3rd tests [concatenation]:
// const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;

// This is another solution that passes BOTH the 2nd AND 3rd tests
//  [interpolation]:

// Don't forget the exclamation mark!
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
//
// const shortGreeting = '';

// This passes the 8th test:
// const shortGreeting = 'Welcome, ';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Character_access
// const shortGreeting = `Welcome, ${currentUser}`;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
