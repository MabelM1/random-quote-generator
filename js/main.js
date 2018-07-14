const quotes = [
	{
		quote: "We are only as blind as we want to be.",
		author: "Maya Angelou"
	},
	{
		quote: "Try to be a rainbow in someone’s cloud.",
		author: "Maya Angelou"
	},
	{
		quote: "We may encounter many defeats but we must not be defeated.",
		author: "Maya Angelou"
	},
	{
		quote:
			"If you’re not making mistakes, then you’re not making decisions.",
		author: "Catherine Cook"
	},
	{
		quote:
			". The question isn’t who’s going to let me; it’s who’s going to stop me.",
		author: "Ayn Rand"
	},
	{
		quote: "Everything has beauty, but not everyone can see.",
		author: "Confucius"
	},
	{
		quote: "Beware, for I am fearless, and therefore powerful.",
		author: "Mary Shelley"
	},
	{
		quote:
			"Success is only meaningful and enjoyable if it feels like your own.",
		author: "Michelle Obama"
	},
	{
		quote:
			"It is not fair to ask of others what you are not willing to do yourself.",
		author: "Eleanor Roosevelt"
	},
	{
		quote: "Strive not to be a success, but rather to be of value.",
		author: "Albert Einstein"
	}
];

$(document).ready(function() {
	/*THIS FUNCTION CREATES A RANDOM NUMBER BETWEEN 0 AND 9, USES THIS NUMBER
	 AS THE INDEX TO RETRIVE A QUOTE THEN REPLACES THE TEXT AND AUTHOR DISPLAYED.*/
	function getQuote() {
		const randomNumber = Math.floor(Math.random() * quotes.length);

		$("#text").text(quotes[randomNumber].quote);
		$("#author").text(quotes[randomNumber].author);
	}

	/*THIS FUNCTION RETRIEVES THE TEXT DISPLAYED, GETS STORED AS A TWEET INTENT URL,
	 THEN SETS THE HREF ATTRIBUTE USING THIS URL*/
	function tweetQuote() {
		const quoteDisplayed = $("#text").text();
		const tweetUrl =
			"https://twitter.com/intent/tweet?text=" +
			encodeURI(quoteDisplayed);

		window.open(tweetUrl, "_blank");
	}

	getQuote();

	$("#new-quote").click(getQuote);

	$("#tweet-quote").click(tweetQuote);
}); // close document ready
