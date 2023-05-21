import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {FormGroup, FormGroupDirective} from "@angular/forms";
import { ShortTextComponent } from "../short-text/short-text.component";
import { InputComponent } from "./input/input.component";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {

  supportedDynamicComponents = [
    {
      name: 'text',
      component: ShortTextComponent
    },
    // {
    //   name: 'number',
    //   component: DynamicInputComponent
    // },
    // {
    //   name: 'select',
    //   component: DynamicSelectComponent
    // },
    // {
    //   name: 'radio',
    //   component: DynamicRadioComponent
    // },
    // {
    //   name: 'date',
    //   component: DynamicInputComponent
    // },
    // {
    //   name: 'checkbox',
    //   component: DynamicCheckboxsComponent
    // }
  ]
  @ViewChild('InputContainer', { read: ViewContainerRef}) dynamicInputContainer!: ViewContainerRef;
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective, private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }

  private registerDynamicField() {
    this.dynamicInputContainer.clear();
    const componentInstance = this.getComponentByType(this.field.type)
    const dynamicComponent = this.dynamicInputContainer.createComponent(componentInstance)
    dynamicComponent.setInput('field', this.field);
    this.cd.detectChanges();
  }

  getComponentByType(type: string): any {
    let componentDynamic = this.supportedDynamicComponents.find(c => c.name === type);
    return componentDynamic.component || InputComponent;
  }

}
