import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: false,
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent implements OnInit {
  @Input()
  imgSrc: string = '/assets/pondicherry_french_hotel.jpg';

  @Input()
  altTxt?: string = 'Pondicherry French Hotel';

  @Input()
  figCaptionTxt?: string =
    'The French Quarter or White Town area in Pondicherry is filled with elegant colonial mansions in the midst of tree-lined boulevards named on French streets beginning with "rue", numerous parks and charming cafes';

  @Input()
  imgOpacity?: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
