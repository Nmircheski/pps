import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pps-products-page',
  templateUrl: './ProductsPage.component.html',
  styleUrl: './ProductsPage.component.scss',
})
export class ProductsPageComponent implements OnInit {
  protected productType = '';
  detailsViewConfig: {
    subTitle: string;
    mainTitle: string;
    paragraphContent: string;
  } = {
    subTitle: 'За нас',
    mainTitle:
      'Семеен бизнис со стремеж за создавање наследство на извонредност',
    paragraphContent:
      'Канцеларијата за продажба на материјали се занимава со делот на самолепливи хартии и пластики во ролна, со различни облици. Тоа овозможува, на оние кои веќе поседуваат принтери, индивидуално да се занимаваатсо производство етикети на веќе одредени (подготвени) форми етикети. Ќе најдете повеќе од 40 видови облици на етикети, подготвени за допечатување, во ролни со количина на етикети по ваша желба или специфика на принтерот. Термалната самолеплива хартија е најинтересна за купувачите, бидејки за печатење не е потребна боја или клише.',
  };
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.productType = this.route.snapshot.params['productsId'];
  }
}
