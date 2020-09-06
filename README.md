# profile-info summary

Project for displaying and accessing different profiles.

This would be a simple project which would have just two pages. First landing page will be a list of all the users and their profile pictures. On clicking on each pictures you will be directed to their individual profile.

# Pre Requisites for this project to finish

- Javascript
  - Promises
  - Async/Await
  - loops
- CSS
  - grid layout

# Steps to follow

- Create a necessary folders for files separation/organization.
- Start with index.html
- [./assets](./assets) would have all the necessary mocks/design for the projects

# API information

- Use https://my-json-server.typicode.com/gruler05/project-info-test/profile to fetch all the users
  - Use this to loop over the users and put them in the table
  - User's name should be a link
  - When user's name is clicked
  - It should take them to their profile with all information
- Use https://my-json-server.typicode.com/gruler05/project-info-test/profileInfo/{profileId}
  - Use the above link to get the user's information append the userId in the profileId
  - So if you want to get the information of the user who's id is 1 then you should alter the URL like https://my-json-server.typicode.com/gruler05/project-info-test/profileInfo/1, this will give you information about the first user
