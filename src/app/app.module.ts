import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NoneEncapsulationComponent } from './none-encapsulation/none-encapsulation.component';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation/emulated-encapsulation.component';
import { ShadowEncapsulationComponent } from './shadow-encapsulation/shadow-encapsulation.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';
import { CountdownParentV2Component } from './countdown-parent-v2/countdown-parent-v2.component';
import { MissionControlComponent } from './mission-control/mission-control.component';
import { AstronautComponent } from './astronaut/astronaut.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ContainerDetailComponent } from './container-detail/container-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { ContainerOutputComponent } from './container-output/container-output.component';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component';
import { ZippyContainerComponent } from './zippy-container/zippy-container.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { ZippyMultislotContainerComponent } from './zippy-multislot-container/zippy-multislot-container.component';
import { ItemProjectedComponent } from './item-projected/item-projected.component';
import { ContainerProjectComponent } from './container-project/container-project.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { AttBindingComponent } from './att-binding/att-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NoneEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowEncapsulationComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VotetakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    CountdownParentV2Component,
    MissionControlComponent,
    AstronautComponent,
    ItemDetailComponent,
    ContainerDetailComponent,
    ItemOutputComponent,
    ContainerOutputComponent,
    ZippyBasicComponent,
    ZippyContainerComponent,
    ZippyMultislotComponent,
    ZippyMultislotContainerComponent,
    ItemProjectedComponent,
    ContainerProjectComponent,
    PropBindingComponent,
    AttBindingComponent,
    ClassBindingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
