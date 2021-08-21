import {Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {faShoePrints} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OopsComponent implements OnInit, OnDestroy {

  gotoHome = faShoePrints;

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
    this._document.body.classList.add('body-color');
  }

  ngOnDestroy(): void {
    this._document.body.classList.add('body-color');
  }

}
