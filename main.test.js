//👉 Write your tests below here: 
import countLetters from "./main.js";

// ============== SAMPLE TEST 1 ==============

describe("Count letters in a string", function() {
    const sentenceOne = `Hello, welcome to School of Code!!!`;
    const sentenceTwo = "!Today is a great day to learn Jest and Supertest!";
    const sentenceThree = "The sixth week of Bootcamp feels like six weeks on the boat in the ocean...";
    
    test('that shoud give a number of 26 letters', 
        function() {
            const total = 26;
            const message = `The sentence contains ${total} letters.`;
            expect(countLetters(sentenceOne)).toBe(message);
        }
    )

    test('that shoud give a number of 39 letters', 
        function() {
            const total = 39;
            const message = `The sentence contains ${total} letters.`;
            expect(countLetters(sentenceTwo)).toBe(message);
        }
    )

    test('that shoud give a number of 58 letters', 
        function() {
            const total = 58;
            const message = `The sentence contains ${total} letters.`;
            expect(countLetters(sentenceThree)).toBe(message);
        }
    )
 
})

// ============== SAMPLE TEST 2 ==============

// describe("Count letters in a string", function() {
// //     const sentences = [
// //         [`Hello, welcome to School of Code!!!`, 26],
// //         ["!Today is a great day to learn Jest and Supertest!", 39],
// //         ["The sixth week of Bootcamp feels like six weeks on the boat in the ocean...", 58]
// // ]
    
// //     test.each(sentences)('that shoud give a number of letters', 
// //         function(sentence, total) {
// //             const message = `The sentence is contains ${total} letters.`;
// //             expect(countLetters(sentence)).toBe(message);
// //         }
// //     )
// })

