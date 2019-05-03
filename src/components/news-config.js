//news.js
const url =
   "https://newsapi.org/v2/everything?q=agriculture OR farm OR technology OR science OR digitial OR genetics OR biology OR loan OR schemes OR farmer OR government OR seeds OR tractors OR plants OR green Or vegetables OR fruits OR paddy OR wheat Or prices&sources=the-hindu,the-times-of-india,google-news-in&apiKey=c8fd3136674f4745afd40c213995bb8e";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}