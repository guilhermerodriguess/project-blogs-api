# Blogs API project

Hello! Welcome to the repository of my Blogs API project. In this project, you will be responsible for developing an API and a database for producing content for a blog. You will use Node.js and the Sequelize package to create a CRUD of posts, following REST principles.

## Mandatory Requirements Developed

1. I created the migrations for the users, categories, blog_posts and posts_categories tables, following the test configuration of the `src/config/config.js` file. The migrations are in the correct directory and respecting the nomenclature and format of the entities.

2. I created the `User` model in `src/models/User.js` with the correct properties, following the Entity-Relationship diagram and entities format. The model was developed in a functional format and respecting column naming conventions.

3. Implemented the POST `/login` endpoint for user authentication. The endpoint is accessible via the URL `/login` and receives a request body containing the user's email and password.

4. Implemented the POST `/user` endpoint to add a new user to the table in the database. The endpoint is accessible via the URL `/user` and receives a request body containing the user's information, including name, email, password and an optional image.

5. Implemented the endpoint GET `/user` to fetch all users from the database. The endpoint is accessible via the `/user` URL and requires authentication.

6. Implemented the GET `/user/:id` endpoint to fetch a user based on their ID in the database. The endpoint is accessible via the URL `/user/:id` and requires authentication.

7. I created the `Category` model in `src/models/Category.js` with the correct properties, following the Entity-Relationship diagram and entities format. The model was developed in a functional format.

8. Implemented the POST `/categories` endpoint to add a new category to the table in the database. The endpoint is accessible via the `/categories` URL and requires authentication.

9. Implemented the GET `/categories` endpoint to fetch all categories from the database. The endpoint is accessible via the `/categories` URL and requires authentication.

10. I created the `BlogPost` model in `src/models/BlogPost.js` with the correct properties and associations, following the Entity-Relationship diagram and entities format. The model was developed in a functional format.

11. I created the `PostCategory` model in `src/models/PostCategory.js` with the correct properties and associations, following the Entity-Relationship diagram and entities format. The model was developed in a functional format.

12. Implemented the POST `/post` endpoint to add a new blog post and link it to categories in the database. The endpoint is accessible via the `/post` URL and requires authentication. The body of the request must contain the title, content, and category IDs of the post.

13. Implemented the GET `/post` endpoint to fetch all blog posts

, including user and category information, in the database. The endpoint is accessible via the `/post` URL and requires authentication.

14. Implemented the GET `/post/:id` endpoint to fetch a blog post based on its ID in the database. The endpoint is accessible via the URL `/post/:id` and requires authentication.

15. Implemented the PUT `/post/:id` endpoint to update a blog post in the database. The endpoint is accessible via the URL `/post/:id` and requires authentication. Only the post title and content can be updated.

Bonus Requirements

16. Implemented the DELETE `/post/:id` endpoint to delete a blog post based on its ID in the database. The endpoint is accessible via the URL `/post/:id` and requires authentication.

17. Implemented the DELETE `/user/me` endpoint to delete the authenticated user from the database. The endpoint is accessible via the URL `/user/me` and requires authentication.

18. Implemented the GET `/post/search?q=:searchTerm` endpoint to fetch blog posts that contain a search term in the title or content. The endpoint is accessible via the URL `/post/search?q=:searchTerm` and requires authentication.

Thanks for checking out my Blogs API project. Now you have an API to manage a blog's content, with support for users, categories and posts. Use endpoints to create, search, update and delete information in the database. If you have any questions or need help, I'm here to help.
