Q1. How would you describe the concept of 'state'?

MyAns1.
State is an value which is similar created in an function and is mutable

Ans1.
# A way for React to remember saved values from within a component. This is similar to declaring variables from within a component, with a few added bouuses (which we'll get to later)


Q2. When would you want to use props instead of state?

MyAns2.
Those data which come from database and doesn't want to be changed

Ans2.
# Anytime you want to pass data into a component so that component can determine what will get displayed on the screen.

# Props are like passing parameters into a function. The function then uses to help it determine the output what gets returned

Q3. When would you want to use state instead of props?

MyAns3.
When I want to deploy changeable data on UI

Ans.
# Anytime you want a component to maintain some values from within the component. (And 'remember' those values even when React re-renders the component)


Q4. What does 'immutable' mean? Are props immutable? Is state immutable?

MyAns4.
Immutable means can't be changed.
Props are immutable; State is mutable.