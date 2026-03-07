To receive all the logs:

`./receive_logs_topic.js "#"`

To receive all logs from the facility kern:

`./receive_logs_topic.js "kern.*"`

Or if you want to hear only about critical logs:

`./receive_logs_topic.js "*.critical"`

You can create multiple bindings:

`./receive_logs_topic.js "kern.*" "*.critical"`

And to emit a log with a routing key kern.critical type:

```
./emit_log_topic.js "kern.critical" "A critical kernel error"
```

Have fun playing with these programs. Note that the code doesn't make any assumption about the routing or binding keys, you may want to play with more than two routing key parameters.