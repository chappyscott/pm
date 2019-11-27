import { Component, OnInit } from '@angular/core';
import { IRenter } from './renter'

@Component({
    selector: 'pm-renters',
    templateUrl: './renterapps-list.component.html',
    styleUrls: ['./renterapps-list.component.css']
}
)

export class RentersappsListComponent implements OnInit {
    pageTitle: string = 'Renter\'s Applications';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    _listFilter = '';
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredRenters = this.listFilter ? this.performFilter(this.listFilter) : this.renters;
    }
    
    filteredRenters: IRenter[] = [];
    
    renters: IRenter[] = [
        {
         'rentersName': 'Mark Bennett',
         'rentersEmail': 'joe@js.com',
         'rentersPhone': 5551234567,
         'rentersIncome': 2500,
         'rentersRating': 1.5,
         'imageURL': 'assets/male.png' 
        },
        {
            'rentersName': 'TJ VanDusen',
            'rentersEmail': 'tj@js.com',
            'rentersPhone': 5551234567,
            'rentersIncome': 4500,
            'rentersRating': 4.8,
            'imageURL': 'assets/male.png' 
        },
        {
            'rentersName': 'Scott Chapman',
            'rentersEmail': 'tj@js.com',
            'rentersPhone': 5551234567,
            'rentersIncome': 4500,
            'rentersRating': 2.8,
            'imageURL': 'assets/male.png' 
        }
    
      ]
    
      constructor(){
        this.filteredRenters = this.renters;
        this.listFilter = "TJ";
      }
      
      onRatingClicked(message: string): void {
        this.pageTitle = 'Renters Rating: ' + message;
      }
      
      performFilter(filterBy: string): IRenter[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.renters.filter((renter: IRenter) =>
          renter.rentersName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }

      ngOnInit(): void {
          console.log('Where we pull database - OnInit')
      }

      toggleImage(): void {
          this.showImage = !this.showImage;
      }
}