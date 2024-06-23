import React, { useState } from 'react';

function App1() {
  return (
    <div>
        <MyComponent />
        <MyComponent_ />
    </div>
  )
}

export default App1

function MyComponent() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>From Functional Components</h2>
            <p>{count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}
class MyComponent_ extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    decrementCount = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <h2>From Class Based Components</h2>
                <p>{this.state.count}</p>
                <button onClick={this.decrementCount}>Decrement</button>
            </div>
        );
    }
}