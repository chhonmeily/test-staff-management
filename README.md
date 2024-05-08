# Test-Staff-Management
A Simple CRUD API for create, update, delete, and read staff information.
First you need to install mongodb in your local environment. Go to mongodb website:
[Download MongoDB MSI File Here and Click Install](https://www.mongodb.com/try/download/community)
After you have finish install mongodb in your environment open mongodb compass window application.
And click on the connect button on mongodb compass application. Don't change anything in your mongodb compass application. Just click connect and you are ready to go.

Clone or Download this repository into your computer.
Then in your terminal run:

    cd test-staff-management
    npm install
    npm run start:dev
    npm run start

For endpoints to test are:
Get Method: 

    Get All Staff:
    Get Method
    localhost:3000/api/staff

Post Method:

    Post Method
	Create Staff:
	localhost:3000/api/staff
	Request Body:
	{"fullName":"test name", "gender": 1, dateOfBirth:"2000-01-01"}

Update Staff Method:

    Patch Method
	Update Staff:
	localhost:3000/api/staff/:id example: 6635e0366606b2bac146e84d
	Request Body:
	{"fullName":"test name", "gender": 1, dateOfBirth:"2000-01-01"}

Delete Staff Method:

    Delete Method
	Delete Staff:
	localhost:3000/api/staff/:id example: 6635e0366606b2bac146e84d
	Request Body: none no need to put anything just give id and use delete method

That's all I can do, I am just re-learning everything again, I finish expressjs course on Youtube. And I am trying to learn react-js. Day by day. If you can please give me an opportunity to work as a developer with knowledge of express js and while learning everything again. Thank you so much for your time on this test.
