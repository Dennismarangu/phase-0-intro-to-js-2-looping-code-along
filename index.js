// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}
wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);


const names = ['Alice', 'Bob', 'Charlie'];

function generateThankYouMessages(names) {
  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const message = `Thank you, ${name}, for your help!`;
    thankYouMessages.push(message);
  }

  return thankYouMessages;
}

const thankYouMessages = generateThankYouMessages(names);
thankYouMessages;

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
countDown(10);


const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");

function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
  }
  return messages;
}
messages;
