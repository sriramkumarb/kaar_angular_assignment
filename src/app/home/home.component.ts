import { Component, OnInit, Input } from '@angular/core';
import { ActorsService } from '../service/actors.service'
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  text = '';
  apiUrl: String = '';
  actor: any = [];

  constructor(private actorserv: ActorsService) {

    this.actorserv.getactors().subscribe((res: any) => {
      this.actor = res;
      console.log(this.actor);

    })

  }

  ngOnInit(): void {
  }

  submit() {
    this.text = 'Welcome!'
  }


}
