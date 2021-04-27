```
+-- Addresses
  --- Login
  --- Drop down menu
  --- Modal add address
+-- Address
  +-- Events
    --- Owner Info
    +-- Events
      +-- Add/edit event
        +-- Info
        +-- Tags
```

### Initial thoughts
One of the main things I'd like to avoid(along with past problems) in this new app is the way I did the components. I used the routes to render the components but I did it by flexing a component to do more than one thing. It should be the same component used in multiple screens and inside the screens is what flexes the component behavior. The screens are based on routes still.

I'll have to look at the old ToDo lists/problems I noted in the repo

### 04/25/2021
Slow progress... took up a new side job... will start to get going, hard starting from scratch.

Can't render SVGs directly in RN that's great

### 03/30/2021
Started the basic structure up. Primarily focusing on developing all the screens at the moment/following with basic routing. Then will do local state/data storage with sqlite and finally interface with the Node API.

Left on building out the navbars pretty much have to match the screenshots of existing app

### 03/27/2021

So I think I'll first work on the navbar, this changes based on route, I will get routing down too.
