import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-key-details',
  templateUrl: 'key-details.component.html',
  styleUrls: ['key-details.component.css']
})
export class KeyDetailsComponent {
  key: string = '';
  rows: any[] = [];
  showTable = false;
  dataFetched= false;
  tableHeader= ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'];

  constructor(private http: HttpClient) {}

  submit() {
    this.http.get(`https://fakestoreapi.com/products/1?key=${this.key}`).subscribe(
      (response: any) => {
        // this.tableHeader = Object.keys(response.data[0]);
        this.rows = response.data;
        this.showTable = true;
        this.dataFetched = true;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  confirmReset() {
    if (confirm('Are you sure you want to reset?')) {
      this.http.post(`https://example.com/api/reset?key=${this.key}`, {}).subscribe(
        (response: any) => {
          // Update the details
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

}
