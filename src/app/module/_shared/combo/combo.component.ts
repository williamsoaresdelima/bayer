import {  Output, EventEmitter, Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { Item } from '../../_model/seguranca/Item';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit, AfterViewInit {

  @Input() items:  Item[];
  @Input() selected: string;
  @Input() titulo: string;
  @Output() itemSelecionado = new EventEmitter<string>();

  constructor() {
   }

   ngAfterViewInit(){
   }

  ngOnInit() {
  }

  selecionou(e){
    console.log(e);
    this.itemSelecionado.emit(e);
  }

}
