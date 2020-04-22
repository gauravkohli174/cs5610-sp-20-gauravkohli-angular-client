import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import { QuizzesComponent } from './quizzes/quizzes.component';
import {QuizServiceClient} from './services/quiz.service.client';
import { QuizComponent } from './quiz/quiz.component';
import {QuestionServiceClient} from './services/question.service.client';
import { TrueFalseComponent } from './true-false/true-false.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    LessonTabsComponent,
    ModuleListComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseComponent,
    MultipleChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseServiceClient, ModuleServiceClient, LessonServiceClient, QuizServiceClient, QuestionServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
