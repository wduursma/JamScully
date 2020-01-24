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
      console.log(this.myContent)
      }
    );
  }

  getContent(value){
    this.data.getContent(value).subscribe(data => {
      this.myContent = data;  
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
