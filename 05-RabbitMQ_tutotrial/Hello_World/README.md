Now we can run both scripts. In a terminal:

`node /send.js`

then, run the consumer:

`node receive.js`

The consumer will print the message it gets from the publisher via RabbitMQ. The consumer will keep running, waiting for messages (Use Ctrl-C to stop it), so try running the publisher from another terminal.

