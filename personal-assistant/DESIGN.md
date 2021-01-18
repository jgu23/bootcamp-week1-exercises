1. Keep a list of todos (just a simple string description)
2. Add todos to a list
3. Delete todos once they have been added
4. Search through Todos by substring

Here are some more details:
- When there are no todos in the list (either because you haven't added any or the search has yielded no results), some special text should render instead of the list
- As soon as a todo has been added, it should immediately appear as a list element under your Todos. Next to the todo should be a button which deletes the todo from the list.
- The search bar updates the filtering whenever its text is changed - if a todo does not contain the text as a substring then it is not rendered in the list


- GOAL: Design todo app
    - GOAL: Conveniently display list of top-level todos
        - REQUIRE: todo title property with short description - limit 30 charas
    - GOAL: Divide tasks into subtasks
        - REQUIRE: every task have an id property, a parent property, a subtasks property
        - REQUIRE: id's are unique starting from 1, separate counter in database that counts number of subtasks so ids can be assigned
        - REQUIRE: parent property that is 0 if it is a top-level task and parent id otherwise
        - REQUIRE: subtasks property that is an array containing ids of all tasks that are subtasks. 
    - GOAL: Filter tasks by priority, due date, person assigned, required skills
        - REQUIRE: properties for each of these, that are allowed to be empty
        - REQUIRE: user profiles with name, avatar, title, skills