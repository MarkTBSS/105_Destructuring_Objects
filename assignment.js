"use strict";

// Sample books array
const books = [
    {
        title: 'Algorithms',
        author: 'Robert Sedgewick',
        ISBN: '978-0321573513',
        keywords: ['algorithms', 'data structures', 'computer science'],
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.41,
                ratingsCount: 1733,
                reviewsCount: 63,
                fiveStarRatingCount: 976,
                oneStarRatingCount: 13
            }
        }
    },
    {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        ISBN: '978-0132350884',
        keywords: ['clean code', 'software engineering', 'programming'],
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.40,
                ratingsCount: 15000,
                reviewsCount: 1200,
                fiveStarRatingCount: 9000,
                oneStarRatingCount: 100
            }
        }
    },
    {
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        ISBN: '978-0596517748',
        keywords: ['javascript', 'programming', 'web development'],
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.00,
                ratingsCount: 5000,
                reviewsCount: 300,
                fiveStarRatingCount: 2500,
                oneStarRatingCount: 50
            }
        }
    },
    {
        title: 'Another Book',
        author: 'Another Author',
        // No programmingLanguage property
    }
];

//2.1
const { title, author, ISBN } = books[0];

//2.2
const { keywords: tags } = books[0];

//2.3
let language;
let programmingLanguage;

if (books[6]) {
    ({ language, programmingLanguage = "unknown" } = books[6]);
} else {
    language = undefined;
    programmingLanguage = "unknown";
}

//2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);

//2.5
const {
    thirdParty: {
        goodreads: { rating: bookRating },
    },
} = books[0];

//2.6 (Example 1)
function printBookInfo({ title, author, year = "year unknown" }) {
    console.log(`${title} by ${author}, ${year}`);
}

//2.6 (Example 2)
function printBookInfo({ title, author, year = "year unknown" }) {
    console.log(`${title} by ${author}, ${year}`);
}

// Using the printBookInfo function
books.forEach(book => printBookInfo(book));