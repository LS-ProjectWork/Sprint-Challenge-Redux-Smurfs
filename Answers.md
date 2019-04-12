1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.map(), Array.filter(), and Array.reduce(). We use Object.assign to create a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that we associate with a `type` to handle an event. Reducers are functions that accept our actions as an argument and updates the state. The store is where we manage the state globally. It is the single source of truth because all state updates for components happen there.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, while component state is local to the component. It is best to use Application state when you have a large app and want to be able to keep things in one place.

1.  What is middleware?

Middleware is a function that dispatch async actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk turns our action creators from objects into functions and allows our actions to actually 'do' something.

1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect.