# Winter Clothing Donation Website

Assignment Category: 002
GitHub Repo Link: https://github.com/mahmud-reza-rafsun/winter-donation-a9
Live Link:https://winter-cloth-donation.netlify.app/


Short description of the project ==> this project name is ColdCare Network.
key feature of this website

## User Authentication System
Login with Email and Password
Google Social Login
Registration with Name, Email, Photo URL, and Password
Password Validation (Must have Uppercase, Lowercase, and Minimum 6 Characters)
Forgot Password System (Reset link sent to Gmail)
Secure Private Routes (Users cannot access private pages without logging in)

## User Dashboard
Logged-in users can view their profile information (Name, Email, Profile Photo)
Option to Update Profile (Update Name and Photo URL)
Welcome message displaying the user’s name

## Donation Campaign Management
View all available donation campaigns
Each campaign card shows Image, Title, Description, Division, and a "Donate Now" button
Campaign Details Page (Protected route — only accessible after login)
Donation Form (Fields for Quantity of Items, Item Type, Pickup Location, Additional Notes)
After submitting the form, a Toast Message appears ("Thank you! We will reach your destination soon.")

## Home Page Features
Winter-themed Banner/Slider showcasing donation campaigns
About Section explaining the mission of the website
How It Works Section with instructions on how to donate
Two Extra Custom Sections (designed by you creatively)
Animations using an Animation Package (AOS or Animate.css)

## Navbar and Footer
Responsive Navbar with Logo and Navigation Links (Home, Donation Campaigns, How to Help, Dashboard)
Display user’s profile photo if logged in; otherwise, show a Login button
Footer with Contact Information, Social Media Links, and Copyright

## JSON Data Handling
Created at least 6 JSON data objects for campaigns
Each campaign includes ID, Title, Image, Description, Status, Contact Info, and Division

## Error Handling
Custom 404 Not Found Page with a button to navigate back to the Home page

## Other Small Features
Password show/hide toggle on the Registration page
Environment Variables used to secure Firebase configuration
Responsive Design (Mobile, Tablet, and Desktop friendly)
Hosted Application (Deployed on Netlify/Surge/Firebase without reload errors)