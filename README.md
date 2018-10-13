# Shared Module vs Core Module

I was going through the Angular Style Guide in order to know how to structure my **Angular** application. 
But I must admit that I did not get deep into the details earlier and as a result of it had a my `ApplicationModule` 
quite bloated. But it was still not late for me to correct my mistake and fix the structure.

In this blog I am sharing how a simple TODO application can be structured well using the concept of **Shared Module** 
and **Core Module**.

I generated a simple to-do application using **Angular CLI** and my src structure looked like this:


Ok, now it was time to add some functionality to this generated application. So basically, I needed two components initially 
and also a service for the data sharing purposes as given below:

1. CreateToDoComponent - For creating/adding a TODO
2. DisplayToDoComponent - The one that displays all the TODOs
3. ToDoService - This one was responsible for maintaining and sharing the TODOs

Ok after writing a few lines of code, I had a basic application like this up and running:



Now, it was time for me to add some custom validations to the `toDoForm` that I had created for adding TODOs. Now I wanted to add a validation on `todo` field
so that no one can enter words like eat, sleep, drink in the todo field. We have a custom validator `forbiddenTextValidator` in place.

Ok, before we add more functionality to the application it is time to beautify the app a little bit.




