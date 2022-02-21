import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FeatureComponent} from "../../IFeatureComponent";

@Component({
  selector: 'app-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.scss']
})
export class Feature3Component implements FeatureComponent{
  @Input() form: FormGroup | undefined;
  @Input() model: any;
  @Output() changed = new EventEmitter<any>();
}
