import { Component } from '@angular/core';

export interface IImageProp {
  title: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentPage: number = 0;
  handleClickOnPrevious() {
    if (this.currentPage !== 0) {
      this.currentPage -= 1;
    }
  }
  handleClickOnNext() {
    if (this.currentPage !== this.images.length - 1) {
      this.currentPage += 1;
    }
  }
  checkWindowIndex(i: number){
    return Math.abs(this.currentPage - i) < 5;
  }
  images = [
    {
      title: 'At the beach',
      url: 'https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'Turtles',
      url: 'https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'The tree',
      url: 'https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'The flowers',
      url: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'The snowy mountain with rainbow',
      url: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];
  constructor() {
    this.images = [
      ...this.images,
      ...this.images,
      ...this.images,
      ...this.images,
    ].sort(() => Math.random() - 0.5);
  }

  showAlert(){
    alert("clicked");
  }
}
