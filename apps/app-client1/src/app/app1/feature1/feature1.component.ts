import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss']
})
export class Feature1Component {
  @Input() form: FormGroup | undefined;
  @Input() model: any;
  @Output() changed = new EventEmitter<any>();
}
