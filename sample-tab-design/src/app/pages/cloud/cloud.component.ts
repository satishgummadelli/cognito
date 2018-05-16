import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pre-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent implements OnInit {

  menus:object = [
    {
      name : "Cloud Enablement",
      url : "cloud-enablement",
    },
    {
      name : "Cloud Analytics",
      url : "cloud-analytics"
    },
    {
      name : "Cloud Connectivity",
      url : "cloud-connectivity"
    },
    {
      name : "Security, Data & GDPR, Compliance",
      url : "security-data"
    },
    {
      name : "Cloud Managed Services",
      url : "cloud-managed-services"
    },
    {
      name : "INC, PBI, CHG",
      url : "inc-pbi-chg"
    }

    
  ];

  constructor( public router: ActivatedRoute) {
    this.router.params.subscribe( params => console.log(params));
  }

  ngOnInit() {
  }

}
