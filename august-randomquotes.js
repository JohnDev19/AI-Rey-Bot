async function getRandomQuote() {
  try {
    const response = await fetch("https://quotes-generator.com/api/v3/quotes/random");
    const data = await response.json();
    
    if (data.message === "success") {
      return data.contents.quote;
    } else {
      throw new Error("Failed to fetch quote");
    }
  } catch (error) {
    console.error(error);
    return "An error occurred while fetching the quote.";
  }
}

getRandomQuote().then(quote => {
  console.log(quote);
});
