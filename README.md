1. Install mongo service. (At this step, remember your PORT number)
2. Cd into front end, npm install
3. Cd into back end, npm install (for both order-app and payment-app)
4. In the backend-folder, cd into backend/config.ts, change the PORT number of your mongoose database (for both order-app and payment-app)
5. Cd into backend, npm run start (order-app first because order-app has the scripts to seed your db. Then, start payment app)
6. Cd into frontend, npm run start.
7. Go into your web browser, use URL: localhost:4200. For swagger, use localhost:3000/api
