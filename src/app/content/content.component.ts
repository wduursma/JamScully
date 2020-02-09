import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { EventEmitterService } from '../event-emitte.service';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  myContent: any;
  closeResult: string;
  categorieName: any;
  mySkills: any;

  constructor(
    private data: DataService,
    private eventEmitterService: EventEmitterService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getFirstContent(); 
    if (this.eventEmitterService.subsVarContent==undefined) {    
      this.eventEmitterService.subsVarContent = this.eventEmitterService.    
      invokeSelectContentFunction.subscribe((value:string) => {    
        this.getContent(value); 
      });    
    } 
  }
  getFirstContent(){
    this.data.getFirstContent().subscribe(data => {
      this.myContent = data[0];  
      }
    );
  }

  getContent(value){
    this.mySkills = [];
    this.data.getContent(value).subscribe(data => {
      this.myContent = data;  
        for (let i = 0; i < this.myContent.categories.length; i++) {
          this.getCategorieName(this.myContent.categories[i]);
        }
      }
    );
  }

  getCategorieName(catName) {
    this.data.getCategorieName(catName).subscribe(data => {
      this.categorieName = data; 
      const totalCat = this.mySkills.push(this.categorieName.name);
      console.log(this.mySkills);
      }
    );
  }

  open(modalContent) {
    this.modalService.open(modalContent, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  

  

}
