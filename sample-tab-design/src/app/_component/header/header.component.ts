import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  platforms = [
    {
      img : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/2000px-AmazonWebservices_Logo.svg.png",
      url : "aws",
    },
    {
      url : "google-cloud-platform",
      img : "https://www.internetsociety.org/wp-content/uploads/2017/03/Google-Cloud-Platform.png",
    },
    {
      url : "microsoft-azure",
      img : "https://cache.logicworks.com/wp-content/uploads/2017/06/19103204/microsoft-azure-logo.jpg",
    },
    {
      url : "digitalocean",
      img : "http://www.nikola-breznjak.com/blog/wp-content/uploads/2015/07/digitalOceanSubdomains.png",
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailPage(url) {
    this.router.navigate(['cloud-details', url]);
  };

}
