const puppeteer = require('puppeteer');

async function scrapeMedicines(url) {
    // Launch a new browser instance
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the specified URL
    await page.goto(url);

    // Wait for the necessary elements to load (adjust the selector as needed)
    await page.waitForSelector('.medicine-card'); // Example class name

    // Scrape the data
    const medicines = await page.evaluate(() => {
        const medicineCards = document.querySelectorAll('.medicine-card'); // Adjust selector as needed
        const data = [];

        medicineCards.forEach(card => {
            const name = card.querySelector('.medicine-name').innerText; // Adjust selector as needed
            const imageUrl = card.querySelector('img').src; // Adjust selector as needed

            data.push({ name, imageUrl });
        });

        return data;
    });

    console.log(medicines); // Output the scraped data

    // Close the browser
    await browser.close();
}

// Example usage
const url = 'https://www.drugs.com'; // Replace with the actual URL
scrapeMedicines(url);
