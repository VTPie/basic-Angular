import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { SizerComponent } from './sizer/sizer.component';
import { SizerContComponent } from './sizer-cont/sizer-cont.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { AttrDrtBiComponent } from './attr-drt-bi/attr-drt-bi.component';
import { StrucDrtBiComponent } from './struc-drt-bi/struc-drt-bi.component';
import { HighlightDirective } from './_drt-highlight/highlight.directive';
import { AttrDrtComponent } from './attr-drt/attr-drt.component';
import { UnlessDirective } from './_drt-unless/unless.directive';
import { StrucDrtComponent } from './struc-drt/struc-drt.component';
import { AppRoutingModule } from './app-routing.module';
import { RoutingOneComponent } from './routing-one/routing-one.component';
import { RoutingTwoComponent } from './routing-two/routing-two.component';
import { SimpleNavComponent } from './simple-nav/simple-nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Child1RoutingComponent } from './child1-routing/child1-routing.component';
import { Child2RoutingComponent } from './child2-routing/child2-routing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
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
    StyleBindingComponent,
    EventBindingComponent,
    SizerComponent,
    SizerContComponent,
    PipesDemoComponent,
    AttrDrtBiComponent,
    StrucDrtBiComponent,
    HighlightDirective,
    AttrDrtComponent,
    UnlessDirective,
    StrucDrtComponent,
    RoutingOneComponent,
    RoutingTwoComponent,
    SimpleNavComponent,
    NotFoundComponent,
    Child1RoutingComponent,
    Child2RoutingComponent,
    NameEditorComponent,
    ProfileEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
