import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { MyProfileService } from "../../services/my-profile.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: 'my-profile.component.html',
  styleUrls: ['my-profile.component.scss'],
})

export class MyProfileComponent {

  @Output() save = new EventEmitter();
  form: FormGroup;
  users: UserModel[] = [];

  constructor(private formBuilder: FormBuilder, private myProfileService: MyProfileService) {
  }


  initForm(edit: any = {}) {
    this.form = this.formBuilder.group({
      id: ['null'],
      name: ['{{user.name}}', Validators.compose([Validators.required, Validators.minLength(8)])],
      description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, amet quas. In enim impedit consequuntur sit eius quod quas numquam voluptas at veniam totam nulla officia, hic eveniet sunt reiciendis iure aperiam fugit aliquid quidem. Corporis doloremque molestiae quis odit, natus temporibus est at quasi inventore velit ad necessitatibus fuga tempora consectetur molestias delectus nesciunt placeat illum in atque non nisi? Nesciunt adipisci maxime esse reiciendis mollitia saepe repellat ipsum quas! Deleniti ratione quam corporis repudiandae expedita. Deserunt, dolor nulla possimus ex voluptatum quis eligendi maiores temporibus, obcaecati error ad laboriosam modi. Perspiciatis officia reiciendis eligendi cumque tempore obcaecati officiis autem sint cupiditate mollitia, blanditiis velit magni nam cum alias nisi molestiae voluptatum laborum et earum quisquam rerum deleniti error nesciunt? Non voluptate impedit accusamus distinctio. Excepturi rerum voluptatum libero ipsa illo quidem quae eligendi aperiam aliquid nemo iusto in quisquam, reiciendis minima minus perspiciatis, dignissimos obcaecati, distinctio doloremque dicta?', Validators.required],
      image: ['', Validators.required]
    })
  }

  getProfiles(user){
    this.myProfileService.getProfile(user).then((user: any)=> {
      this.users = user;
    });
  }

  ngOnInit() {
    this.getProfiles(this.users);
    this.initForm();
  }

  onSave(value) {
    this.save.emit(value);
    //this.form.reset();
  }
}
