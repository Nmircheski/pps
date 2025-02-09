import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { ProductsRouteStatics } from '../static/route-statics';

@Component({
    selector: 'pps-products-page',
    templateUrl: './ProductsPage.component.html',
    styleUrl: './ProductsPage.component.scss',
    standalone: false
})
export class ProductsPageComponent implements OnInit {
  protected productType = '';
  productDetailsViewConfig: {
    //TODO load this from a products service.
    imageSrc: string;
    subTitle: string;
    mainTitle: string;
    paragraphContent: string;
  } = {
    imageSrc: '',
    subTitle: 'Продукти',
    mainTitle: 'Самоплепливи етикети',
    paragraphContent: `Канцеларијата за продажба на материјали се занимава со делот на самолепливи хартии и пластики во ролна, 
    со различни облици. Тоа овозможува, на оние кои веќе поседуваат принтери, индивидуално да се занимаваатсо производство етикети на веќе одредени (подготвени) форми етикети. 
      <br> Ќе најдете повеќе од 40 видови облици на етикети, подготвени за допечатување, во ролни со количина на етикети по ваша желба или специфика на принтерот. 
      <br> Термалната самолеплива хартија е најинтересна за купувачите, бидејки за печатење не е потребна боја или клише.`,
  };
  constructor(
    private readonly route: ActivatedRoute,
    private readonly productsService: ProductsService,
  ) {}

  ngOnInit() {
    this.productType =
      this.route.snapshot.params[ProductsRouteStatics.ProductId];

    this.route.params
      .pipe(map((p) => p[ProductsRouteStatics.ProductId]))
      .subscribe((productId) => {
        this.productType = productId;
        const product = this.productsService.getProduct(this.productType);

        this.productDetailsViewConfig = {
          ...this.productDetailsViewConfig,
          imageSrc: product?.imageSrc ?? this.productDetailsViewConfig.imageSrc,
        };
      });
  }
}
