import { Routes } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { PageFourComponent } from './components/page-four/page-four.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' }, // Correct empty path
  { path: 'home', component: PageOneComponent },
  { path: 'page-one', component: PageOneComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: 'page-three', component: PageThreeComponent },
  { path: 'page', component: PageFourComponent },
];
