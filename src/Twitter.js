//# Looking for Tweets that are not Retweets from @sandboxpark,
# a phrase "sea turtles" or a hashtag #seaturtleweek.Returned data includes
# the original conversation Tweet ID, publicly shown metrics and annotated
# context from Twitter’s own machine learning models.

GET https://api.twitter.com/2/tweets/search/recent
query = (from: sandboxpark OR @attributeisland OR "sea turtles" OR #seaturtleweek)-is: retweet
tweet.fields = public_metrics, context_annotations, conversation_id