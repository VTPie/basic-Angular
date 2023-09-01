## Lesson 1: Components - Component LifeCycle

    Component list: child, parent
    Demo: 
        <app-parent></app-parent>
## Lesson 2: Components - View Encapsulation

    Component list: none-encapsulation, emulated-encapsulation, shadow-encapsulation
    Demo: 
        <app-none-encapsulation></app-none-encapsulation>
        <p>-----------------</p>
        <app-emulated-encapsulation></app-emulated-encapsulation>
        <p>-----------------</p>
        <app-shadow-encapsulation></app-shadow-encapsulation>
## Lesson 3: Components - Component Interaction

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

    Demo 6: Parent calls an @ViewChild()
        Component list: countdown-timer, countdown-parent-v2
        <app-countdown-parent-v2></app-countdown-parent-v2>

    Demo 7: Parent and children communicate using a service (not clear)
        Component list: astronaut, misson-control
        <app-mission-control></app-mission-control>
## Lesson 4: Components - Sharing data between child and parent directives and components
    
    Demo 1: Sending data to a child component
        Component list: item-detail, container-detail
        <app-container-detail></app-container-detail>

    Demo 2: Sending data to a parent component
        Component list: item-output, container-output
        <app-container-output></app-container-output>
## Lesson 5: Components - Content projection

    Demo 1: Single-slot content projection
        Component list: zippy-basic, zippy-container
        <app-zippy-container></app-zippy-container>

    Demo 2: Multi-slot content projection
        Component list: zippy-multislot, zippy-multislot-container
        <app-zippy-multislot-container></app-zippy-multislot-container>

    Demo 3: Conditional content projection
        Component list: item-projected, container-project
        <app-container-project></app-container-project>
## Lesson 6: Templates - Displaying values with interpolation
    
    Component list: child, parent
    Demo: 
        <app-parent></app-parent>
## Lesson 7: Templates - Template statements

    Component list: child, parent
    Demo: 
        <app-parent></app-parent>
## Lesson 8: Templates - Binding

    Demo 1: Property binding
        Component list: prop-binding
        <app-prop-binding></app-prop-binding>
    
    Demo 2: Attribute binding
        Component list: att-binding
        <app-att-binding></app-att-binding>