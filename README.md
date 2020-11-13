1. Install mongo service. (At this step, remember your PORT number)
2. Cd into front end, npm install
3. Cd into back end, npm install (for both order-app and payment-app)
4. In the backend-folder, cd into backend/config.ts, change the PORT number of your mongoose database (for both order-app and payment-app)
5. Cd into backend, npm run start (order-app first because order-app has the scripts to seed your db. Then, start payment app)
6. Cd into frontend, npm run start.
7. Go into your web browser, use URL: localhost:4200. For swagger, use localhost:3000/api
Product Specs:
A. Purpose of the product: Online fruit orders platform.
B. User story: As a fruit buyer, he/she can manage order and payment and cart by checking 1 single page app.
C. Use case:
Actor 1 - user:
1. Create Order.
2. Cancel Order
2. Make payment.
3. Put product into cart.
4. Make the payment.
5. Check the order status.
Actor 2 - Payment App:
1. Confirm payment request from user.
Actor 3 - Order App:
1. Create Order to DB
2. Change Order Status to DB.
3. Delete Order in DB.
Actor 4 - Web App:
1. Change Confirmed to Delivered every 5 seconds and send request change order to Order App
2. Show Cart number
3. Show order information.
4. Change Order Status to Selected when user select.

