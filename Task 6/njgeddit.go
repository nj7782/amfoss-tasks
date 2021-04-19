package main

import (
	"context"
	"fmt"
	"log"

	"github.com/vartanbeno/go-reddit/reddit"
)

var ctx = context.Background()

func main() {
	if err := run(); err != nil {
		log.Fatal(err)
	}
}
func run() (err error) {
	withCredentials := reddit.WithCredentials("ID", "sec", "user", "pass")
	client, _ := reddit.NewClient(withCredentials)
	posts, _, err := client.Subreddit.TopPosts(ctx, "memes", &reddit.ListPostOptions{
		ListOptions: reddit.ListOptions{
			Limit: 100,
		},
		Time: "week",
	})

	if err != nil {
		return
	}
	for _, post := range posts {
		_, err := client.Post.Upvote(ctx, "t3_"+post.ID)
		if err != nil {
			return err
		}
	}
	fmt.Println("Posts have been upvoted successfully")
	return
}
