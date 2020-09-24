import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from "@angular/common/http";
import { UserService } from "../../../app/services/user.service";


@Component({
  selector: 'app-loan-history',
  templateUrl: './loan-history.component.html',
  styleUrls: ['./loan-history.component.scss']
})
export class LoanHistoryComponent implements OnInit {

  /// this data used to display in products dropdown   
   
public ProductHeader = [{ name: 'Hp' }, { name: 'Dell'}, { name: 'Lenovo' }];  
   
   
/// this data used to display in products details in a html table   
   
public Products = [  
{Name:'Hp', title: 'HP ENVY Laptop - 15t touch', price: '1099', store: 'Best Buy', model: '15-BS013DX' },  
{ Name: 'Dell', title: 'Dell Laptop', price: '700', store: 'Amazon', model: 'I7378-3000SLV-PUS' },  
{ Name: 'Lenovo', title: 'Lenovo Touch-Screen Laptop', price: '670', store: 'Target', model: '81A40025US' },  
{ Name: 'Hp', title: 'HP OfficeJet Pro 6978 All-in-One Printer', price: '100', store: 'Target', model: 'T0F29A#B1H' },  
{ Name: 'Hp', title: 'HP Laptop - 17t touch ', price: '420', store: 'Target', model: '1EZ78AV_1' },  
{ Name: 'Dell', title: 'Dell - XPS 27" Touch-Screen All-In-One', price: '670', store: 'Target', model: 'BBY-311C3FX' },  
{ Name: 'Dell', title: 'Dell - Inspiron 21.5" Touch-Screen All-In-One', price: '469.90', store: 'Target', model: 'I3265-A067BLK-PUS' },  
{ Name: 'Lenovo', title: 'Lenovo - 520-24AST 23.8" Touch-Screen All-In-One', price: '679.99', store: 'Target', model: 'F0D3000EUS' },  
{ Name: 'Dell', title: 'Dell - XPS 2-in-1 13.3" Touch-Screen Laptop', price: '1199.99', store: 'Target', model: 'XPS9365-7086SLV-PUS' }  
];  

  userloanhistorylist=[]; 
  constructor(private router: Router,
              private user:UserService) { }

  ngOnInit() {
    this.getProducts();
    this.loadUserLoanList();
  }

  getProducts() {  
          
    return this.ProductHeader;  
 } 

 //Create a object for storing filter data and bind to html table.  
public ProductDetails: object = [];  
   
//filter product details on name and return productDetails object.
// SearchProduct(name: string) {  
// let obj = this.Products.filter(m => m.Name == name);  
// this.ProductDetails = obj;  
// return this.ProductDetails;  
// } 
SearchProduct(name: string) {  
  let obj = this.userloanhistorylist.filter(m => m.loan_type == name);  
  this.userloanhistorylist = obj;  
  return this.userloanhistorylist;  
  } 

  loadUserLoanList() {
    const formData: FormData = new FormData();
    var customer_id=localStorage.getItem('currentUserId')
    formData.append("customer_id", customer_id);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type','multipart/form-data');
    this.user.loanPaymentHistory(formData).subscribe((res:any) => {  
      console.log(res)
      this.userloanhistorylist=res.result;
      

    },
      (err)=>{
      console.log(err)
      }
      )  
    
  }

}
