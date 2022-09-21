import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'I AM THE TITLE';
  public image = "/assets/images/Angular1.jpg" //Property Binding
  public random = "" //Two-way Binding
  onClick() {  //Event Binding
    console.log("I am Event Binding")
  }
  //ngFor
  title: string = "ngFor Example";

  movies: Movie[] = [

    { title: 'Zootopia', director: 'Byron Howard, Rich Moore', cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman', releaseDate: 'March 4, 2016' },
    { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder', cast: 'Ben Affleck, Henry Cavill, Amy Adams', releaseDate: 'March 25, 2016' },
    { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo', cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans', releaseDate: 'May 6, 2016' },
    { title: 'X-Men: Apocalypse', director: 'Bryan Singer', cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac', releaseDate: 'May 27, 2016' },
    { title: 'Warcraft', director: 'Duncan Jones', cast: 'Travis Fimmel, Robert Kazinsky, Ben Foster', releaseDate: 'June 10, 2016' },
  ]
  //ngSwitch
  num: number = 0;
  //ngClass
  //Using JavaScript object
  cssClass: CssClass = new CssClass();
  //ngClass using Array
  cssArray: string[] = ['blue', 'size20'];
  //ngClass using String
  cssStringVar: string = 'red size20';
  //ngStyle
  color: string = 'red';
  
  
}

class Movie {
  title: string | undefined;
  director: string | undefined;
  cast: string | undefined;
  releaseDate: string | undefined;
}
//ngClass Using JavaScript object
class CssClass {
  red: boolean = true;
  size20: boolean = true;
}

