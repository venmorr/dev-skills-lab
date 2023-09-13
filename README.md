## Part 1

Your objective in part 1 is to put in a rep doing everything that you did during the [Express Routers and Controllers](https://www.notion.so/Express-Routers-and-Controllers-d17c2a1e624e4d728d8501d46e861b80?pvs=21) lecture:

- Scaffold a new app named `express-dev-skills` using `e-gen-replacement` (don’t forget to run `npm i`).
- Create an array of “fake” data representing some of your awesome developer skills (or another resource of your choice). The specific properties describing a `skill` (or other) object are up to you!
- Implement **index** functionality for the `skills` resource or the resource you chose.

### Hints

- Keep the data resource name short and simple - something like `skills`.
- Following best-practice routing and MVC will result in the following modules for the `skills` resource:
    - **`routes/skills.js`**
    - **`data/skill-data.js`**
    - **`views/skills`**
    - **`controllers/skills.js`**
- Use [RESTful/Resourceful Routing Conventions](https://www.notion.so/RESTful-Resourceful-Routing-Conventions-f73dae18576b46c6ba0ef71b51190f11?pvs=21)

## Part 2

Your objective in part 2 is to put in a rep doing everything that you did during the [Intro to Mongoose](https://www.notion.so/Intro-to-Mongoose-4feaa37ca94f4dd18b0cea4e9c687677?pvs=21) lecture:

- Refactor our app to use Mongoose/MongoDB. No additional functionality is added in this step.

<aside>
🚨 You will NOT see any data in your app at this time. Continue on to part 3.

</aside>

<aside>
🚨 You will NOT see any data in your app at this time. Continue on to part 3.

</aside>

## Part 3

Your objective in part 3 is to put in a rep doing everything that you did during the [The Chart and URL/Route Parameters](https://www.notion.so/The-Chart-and-URL-Route-Parameters-7f906b5ae00343ccb437783b2e002535?pvs=21) lecture:

- Display an **Add Skill (or resource of your choice)** link on the **index** view that, when clicked, displays a **new** view with a form to enter a new skill (or another resource of your choice)
- Allow that form to be submitted, which should create a new document in your database. After submitting this form, redirect the user to the **index** view.
    
    <aside>
    🚨 You should see data on the index view after this step!
    
    </aside>
    
- Implement **show** functionality for your resource

## Part 4

In [Express Middleware](https://www.notion.so/Express-Middleware-d188f471db95426ca61be5c61d78fba8?pvs=21), you saw how to use Express middleware, such as:

- `express.urlencoded` (AKA body-parser middleware)
- `method-override`

The goal of the lab is to do put in a rep doing everything that you did during the [Express Middleware](https://www.notion.so/Express-Middleware-d188f471db95426ca61be5c61d78fba8?pvs=21) lesson by adding the following functionality to the `express-dev-skills` project:

- On the **show** view, display a *Delete Skill* link that deletes the selected document from the database and redirects to the **index** view when it is clicked.

<aside>
🧠 All routes should follow those described in the [RESTful/Resourceful Routing Conventions](https://www.notion.so/RESTful-Resourceful-Routing-Conventions-f73dae18576b46c6ba0ef71b51190f11?pvs=21) guide.

</aside>

### Hints

- Be sure to install, require & mount the `method-override` middleware.