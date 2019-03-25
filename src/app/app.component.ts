import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'course-project';
  loadedFeature: string = 'recipe';
  showParagraph: boolean = false;
  value: number = 101;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
