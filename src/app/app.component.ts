import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  posts = [
    {
      _title: 'Mon premier post',
      _content: 'Utilité de connaître le secret de fabrication. Résistance est le mot profond d un sacrilège et que cette part est réduite au minimum possible par la charité, au nom vengeur de la conscience.',
      loveIts: 0,
      created_at: new Date(),
      point:0
    },
    {
      _title: 'Mon deuxième post',
      _content: 'Utilité de connaître le secret de fabrication. Résistance est le mot profond d un sacrilège et que cette part est réduite au minimum possible par la charité, au nom vengeur de la conscience.',
      loveIts: 0,
      created_at: new Date(),
      point:0
    },
    {
      _title: 'Encore un post',
      _content: 'Utilité de connaître le secret de fabrication. Résistance est le mot profond d un sacrilège et que cette part est réduite au minimum possible par la charité, au nom vengeur de la conscience.',
      loveIts: 0,
      created_at: new Date(),
      point:0
    }
  ] 
}
