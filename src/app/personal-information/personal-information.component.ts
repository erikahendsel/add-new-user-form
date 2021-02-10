import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent  {
  languages: string[] = ['French', 'Dutch', 'German', 'English'];

  @Input() personalInfo: FormGroup;

  
  selectedLanguage(event): void {
  this.personalInfo.patchValue({
    prefferedLanguage: event.target.value
  })
}

}
