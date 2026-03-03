RabbitMQ is a message broker: it accepts and forwards messages. You can think about it as a post office: when you put the mail that you want posting in a post box, you can be sure that the letter carrier will eventually deliver the mail to your recipient. In this analogy, RabbitMQ is a post box, a post office, and a letter carrier.

The major difference between RabbitMQ and the post office is that it doesn't deal with paper, instead it accepts, stores, and forwards binary blobs of data ‒ messages.

Library Used - `amqp.node client`


In this part of the tutorial we'll write two small programs in Javascript; a producer that sends a single message, and a consumer that receives messages and prints them out. We'll gloss over some of the detail in the amqp.node API, concentrating on this very simple thing just to get started.

In this tutorial, there are 6 sections:
1. Hello World
2. Work Queues
3. Publish/Subscribe
4. Routing
5. Topics
6. Remote Procedure Calls

