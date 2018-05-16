import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pre-inc',
  template: `
    <p>
      inc works!
    </p>
  `,
  styleUrls: ['./inc.component.scss']
})
export class IncComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
