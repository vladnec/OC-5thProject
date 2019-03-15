## Fifth Project for OpenClassRooms "Junior Web Dev" path. 



My role was to build the front end using JavaScript - no frameworks allowed. 

----> Scenario <-----


Sheila, a friend of yours from school, called you last week, telling you she has managed to secure investment for her new online sales business, Orinoco. As opposed to following an Amazon-style, one site-sells-all web app, Sheila wants to set up specific, themed apps which only sell one group of products each. She knows that you work in web development, so of course she thought of you first.

Sheila's investors are asking her to set up an initial MVP to demonstrate how her businesses will function. She has a back-end developer working on the APIs, but she needs someone to build the front end.

Initially, the front end will require only four pages:

    >A list view page, showing all items available for sale
    >A single product page, which will dynamically show the item selected by the user and allow them to personalize the product and add it to their cart
    >A cart page, showing a summary of products in the cart, the total price, and a form with which to submit an order
    >An order confirmation page, thanking the user for their order, showing the total price and the order ID returned by the server




Each API contains three endpoints:

| Verb | Endpoint | Expected request body      | Response						   |
| -----| :--------| :--------------------------| :---------------------------------|
| GET  | /        | -                          | Returns an array of all items     |
| GET  | /id      | -                          | Returns item corresponding to     |
| 	   |		  |						       |  given _id                        |
| POST | /order   | JSON request containing a  | Returns contact object, products  | 
| 	   |		  |	    contact object and a   | array and orderId (string)        |
|	   |		  |	    products array         | 								   |


For POST routes, the contact object sent to the backend must contain firstName, lastName, address, city and email fields (all required). The products array sent to the backend must be an array of product _id strings.

For the MVP, product personalization will not be functional: the single item page will have a dropdown menu allowing the user to choose a personalization option, but this will not be sent to the server or reflected in the server response.

DATA TYPES

The back-end developer has informed you that all products have the following attributes:

| Field         | Type          |
| ------------- |:--------------|
| _id           | string        |
| Name          | string        |
| Price         | Number        |
| description   | string        |
| imageURL      | string        |







### Because the API is hosted locally i could not deploy my work on the internet.
Here are some pictures with the final result


![TeddyStore - main page](https://user-images.githubusercontent.com/46979043/54190307-ded75700-44b3-11e9-9e0f-b9889c59f32d.jpg)

![TeddyStore - Product Page](https://user-images.githubusercontent.com/46979043/54190309-df6fed80-44b3-11e9-9eef-551d774aad2f.png)

![TeddyStore - Cart Page](https://user-images.githubusercontent.com/46979043/54190305-ded75700-44b3-11e9-92be-b074f3282db8.png)

![TeddyStore - Order Confirmation Page](https://user-images.githubusercontent.com/46979043/54190308-ded75700-44b3-11e9-9936-122486ffde3d.png)
