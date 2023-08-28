## Lesson 1: Component LifeCycle

Component list: child, parent

Demo: 
    <app-parent></app-parent>

## Lesson 2: View Encapsulation

Component list: none-encapsulation, emulated-encapsulation, shadow-encapsulation

Demo: 
    <app-none-encapsulation></app-none-encapsulation>
    <p>-----------------</p>
    <app-emulated-encapsulation></app-emulated-encapsulation>
    <p>-----------------</p>
    <app-shadow-encapsulation></app-shadow-encapsulation>

## Lesson 3: Component Interaction

Demo 1: Pass data from parent to child with input binding
    Component list: hero-child, hero-parent
    <app-hero-parent></app-hero-parent>


Demo 2: Intercept input property changes with a setter
    Component list: name-child, name-parent
    <app-name-parent></app-name-parent>

Demo 3: Intercept input property changes with ngOnChanges()
    Component list: version-child, version-parent
    <app-version-parent></app-version-parent>

Demo 4: Parent listens for child event
    Component list: voter, votetaker
    <app-votetaker></app-votetaker>

Demo 5: Parent interacts with child using local variable
    Component list: countdown-timer, countdown-parent
    <app-countdown-parent></app-countdown-parent>