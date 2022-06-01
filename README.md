## Lessons
1. Introduction to the course
2. Install development tools
3. Create Angular App
   1. Create project's folder
   2. Install @angular/cli
   3. Create App as frontend
4. Add header
   1. Generate Component
   2. Add Html
   3. Add css

5. List Foods
   1. Create Food model
   2. Create data.ts
      1. Add sample foods
   3. Add images to assets
   4. Create Food Service
   5. Create Home component
      1. Add ts
      2. Add html
      3. Add css

6. Search
   1. Add method to food service
   2. Add search route
   3. Show search result in Home component
   4. Generate search component
      1. Add to home component
      2. Add ts
      3. Add html 
      4. Add css

7. Tags Bar
   1. Create Tag model
   2. Add sample tags to data.ts
   3. Food service
      1. Add get all tags methood
      2. Add get all foods by tags method
   4. Add tags route
   5. Show tag result in Home component
   6. Generate Tags component
      1. Add to home component
      2. Add ts
      3. Add html
      4. Add css

8. Food Page
   1. Add method to food service
   2. Generate Food Page component
      1. Add Route
      2. Add ts
      3. Add html
      4. Add css

9. Cart Page 
   1. Create CartItem Model
   2. Create Cart Model
   3. Generate Cart service
   4. Add to Cart Button in Food page 
   5. Generate Cart page component
       1. Add Route
       2. Add ts 
       3. Add html
       4. Add css

10. Not Found
   1. Generate Component
       1. Add ts 
       2. Add html
       3. Add css
   2. Add to Pages
       1. Home page
       2. Food page
       3. Cart page 

11. Connect To Beckend
   1. Create backend folder
   2. npm init
   3. npm install typescript
   4. Craete tsconfig.json
   5. Create .gitignore
   6. Copy data.ts to backend/src
   7. npm install express cors
   8. Craete server.ts
       1. install @types
       2. Add Apis
   9. npm install nodemon ts-node --save-dev
   10. Add urs.ts to frontend
   11. Add HttpClient module
   12. Update food service

12. Login Page
   1. Generate Component
       1. Add to routes
       2. Add ts 
       3. Add html
          1. Import Reactive Forms Module
       4. Add Css
   2. Add Login Api
       1. Use json
       2. Add jssonwebtoken
       3. Test using Postman
   3. Generate User Service
       1. Generate User model
       2. Add User Subject
       3. Add Login Method
           1. Add User Urls
           2. Generate IUserLogin interface
           3. Add styles in angular.json
       4. Add to Header
   1. Add Local Stroge method
   2. Add logout Method
       1. Add to  Header


13. Make Components For Login Page
   1. Input Container
   2. Input Validation
   3. Text Input
   4. Default Button


14. Connect Login API To MongoDB Atlas
   1. Moving Apis into routes
   2. Create MongoDB Atlas
   3. Create .env file
   4. Install
       1. mongoose
       2. dotenv
       3. bcryptjs
       4. jsonwebtoken
       5. express-async-handler
   5. Connect to MongoDB Atlas
   6. Use MongoDB instead of data.ts in apis 


15. Resister User
   1. Add Register Api
   2. Add Register service method
   3. Add Register link
   4. Add Register Component


16. Loding...!
   1. Add Image 
   2. Add Component
   3. Add Intercepter


17. Checkout Page 
   1. Create Order Model
   2. Create Checkout Page Component
       1. Add To Router
   3. Add User to User Service
   4. Add Cart To Cart Service
   5. Create Order Items List Component
   6. Adding Map To The Checkout Page
      1. Add Leaflet npm package
          1. Add @types/leaflet
          2. Add Css to angular.json
      2. Add AddressLatLan to Order Model
      3. Create Map component
          1. Add checkout page
          2. Add Ts
              1. Change app-map selector to map
          3. Add Html
          2. Add CSS
      4. Add Auth Guard
   7. Save Order
      1. Add Order Model
      2. Add Order Status Enum
      3. Add Auth Middleware
      4. Add Order Router
          1. Add create API
      5. Add Order Urls to urls.ts
      6. Add Order Service
          1. Add Create Method
      7. Add Auth Interceptor



18. Payment Page 
   1. Generate Component
   2. Add getOrderForCurrentUser api
   3. Add Order Service method
   4. Connect Component to Service
   5. Make the map component readonly