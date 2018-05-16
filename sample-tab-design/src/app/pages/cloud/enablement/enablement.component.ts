import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pre-enablement',
  template: `
    <p><b>{{ platform }}</b>
      enablement works!
    </p>
  `,
  styleUrls: ['./enablement.component.scss']
})
export class EnablementComponent implements OnInit {
  public platform:any;
  public sub:any;

  constructor(public router: ActivatedRoute) {
    this.sub = this.router.parent.params.subscribe(params => {
      this.platform = params.id; // (+) converts string 'id' to a number
   });

   let course$ = this.router.parent.params.subscribe(params => {
    console.log(params.id);
    this.platform = params.id; // (+) converts string 'id' to a number
    
  });

    console.log(this.platform);
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnInit() {
  }

}
