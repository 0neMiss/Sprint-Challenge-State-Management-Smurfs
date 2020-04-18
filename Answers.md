1. What problem does the context API help solve?

It allows you to handle data and pass it to your components without the need to use prop drilling. However it ties the context of the state to the component which makes it less malleable

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are functions that return a dispatch to the reducer
reducers are functions that combine all possible actions that could be made by the user into one function in order to handle state more succinctly

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that encompasses the entire application, whereas component state has a scope limited to the component it exists in.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is middleware and it allows us to handle asynchronous state easier. It changes our action creators by returning a function rather than an object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Personally I like context API a lot more because it seems to have a lot less setup needed and requires less file management than redux.
