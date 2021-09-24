import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public constructor() {  }

  images = [
    { img: '../../../assets/gallery/5132170_424.jpg', thumb:
    '../../../assets/gallery/5132170_424.jpg', description: 'Image 1' }
    
    ,
    { img: '../../../assets/gallery/1399040715375998420673994.jpg', thumb:
    '../../../assets/gallery/', description: 'Image 2' }
    
    ,
    { img: '../../../assets/gallery/egg.jpg', thumb:
    '../../../assets/gallery/', description: 'Image 3' }
    
    ,
    { img: '../../../assets/gallery/leather.jpg', thumb:
    '../../../assets/gallery/', description: 'Image 4' }
    
    ,
    { img: '../../../assets/gallery/meat.jpeg', thumb:
    '../../../assets/gallery/', description: 'Image 5' }
    
    ,
    { img: '../../../assets/gallery/ostrich.png', thumb:
    '../../../assets/gallery/', description: 'Image 6' }
    
    ,
    { img: '../../../assets/gallery/ostrich-1.jpg', thumb:
    '../../../assets/gallery/', description: 'Image 7' }
    
    ,
    { img: '../../../assets/gallery/par.jpg', thumb:
    '../../../assets/gallery/', description: 'Image 8' }
    
    ,
    { img: '../../../assets/gallery/معرفی-نژاد-شترمرغ-گردن-آبی-v2.jpg', thumb:
    '../../../assets/gallery/', description: 'Image 9' }
  ];
  
  ngOnInit(): void {
  }

}
