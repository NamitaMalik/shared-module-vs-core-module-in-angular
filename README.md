# Shared Module vs Core Module

I was going through the Angular Style Guide in order to know how to structure my **Angular** application. 
But I must admit that I did not get deep into the details earlier and as a result of it had a my `ApplicationModule` 
quite bloated. But it was still not late for me to correct my mistake and fix the structure.

In this blog I am sharing how a simple TODO application can be structured well using the concept of **Shared Module** 
and **Core Module**.

I generated a simple to-do application using **Angular CLI** and my src structure looked like this:

![ToDoApp](https://raw.githubusercontent.com/NamitaMalik/shared-module-vs-core-module-in-angular/master/src/assets/images/Simple_To_Do_App_Angular_Cli.PNG)

Ok, now it was time to add some functionality to this generated application. So basically, I needed two components initially 
and also a service for the data sharing purposes as given below:

1. CreateToDoComponent - For creating/adding a TODO
2. DisplayToDoComponent - The one that displays all the TODOs
3. ToDoService - This one was responsible for maintaining and sharing the TODOs

Ok after writing a few lines of code, I had a basic application like this up and running:

![ToDoApp_Basic](https://raw.githubusercontent.com/NamitaMalik/shared-module-vs-core-module-in-angular/master/src/assets/images/ToDoApp_Basic.PNG)


Now, it was time for me to add some custom validations to the `toDoForm` that I had created for adding TODOs. Now I wanted to add a validation on `todo` field
so that no one can enter words like eat, sleep, drink in the todo field. We have a custom validator `forbiddenTextValidator` in place.

Ok, before we add more functionality to the application it is time to beautify the app a little bit. So we are using angular material for this purpose and now our app looks a bit better:


But now if we have look at our folder structure and **AppModule**, it seems it has grown a lot and this is when we just have a very basic **ToDo** app. So now its time to fix this tiny 
mess which will grow along with our application if not fixed. So let's do it.

We need to 3 modules to fix everything:

1. ToDoModule - This would be a feature module which means that our `CreateToDoComponent` and `DisplayToDoComponent` would be part of it.
2. SharedModule - Did you notice so many **angular material** imports and also other imports such as `ReactiveFormsModule` in `AppModule`. Its time to move them from `AppModule` to `SharedModule`.
3. CoreModule - We have a `HeaderComponent` as the part of `AppModule`. The `AppModule` is the **root** of an **angular application** which is basically responsible for bootstrapping the application. 
                Also as per **Angular6** onwards if you notice, the services generated through **Angular Cli** will have by default `providedIn` in `root`. Alternatively, one can inject
               `services` in `CoreModule`. Services are not be made part of `SharedModule` as this will lead to multiple instances of a service in case a module is lazy loaded. Therefore services should either be injected in 
                `CoreModule` or `AppModule`.
                
Now,after having these modules in place our folder structure and **AppModule** look as given below.

Below are the points to be noted:

1. `SharedModule` should export all the modules that needs to be **re-used** throughout the application. This includes various modules such as `FormsModules`, angular material modules such
as `MatTableModule` etc. One can also have a separate `MaterialModule` which includes all the angular material imports. `SharedModule` will also declare global components such as `SelectComponent`.
Everything **re-usable** should be in **SharedModule**.

2. `CoreModule` should have the services injected (or they can also be injected in the root module i.e. `AppModule`). Any one time use component such as `HeaderComponent`
deserves to be declared in **CoreModule**.

3. `FeatureModule` should be responsible for all the feature related stuff. In the sample application we have `ToDoModule` as our feature module.




