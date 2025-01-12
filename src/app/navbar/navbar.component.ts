import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   langSelectorCollapse=true
   menuItems:any=[]
   nyelvValasztek:any=[]
   search=""
   
   name=""  
   actLang="Magyar"

   langChange(lang:any){
    this.actLang=lang.text
    this.config.changeLanguage(lang.sign)
    this.langSelectorCollapse=true
   }

   constructor(private config:ConfigService){
    console.log(this.menuItems?"igaz":"hamis")
    this.menuItems={aa:"alma"}
    config.getContent().subscribe(
      (content)=>{
        this.name=content.name
        this.menuItems=content.menu
        this.nyelvValasztek=content.nyelv
        console.log("Menü Items:", content)
      }
    )
   }
}
