import { Component, OnInit, Output, ViewChild ,EventEmitter, Input} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { mainSideBar, SideBar } from 'src/app/class/side-bar';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  catalog:SideBar[] =[
    {
      name:'Products',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Categories',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Manufactirers',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Product Reviews',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Product tags',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Attributes',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    }
    
  ]
  sales:SideBar[] =[
    {
      name:'Orders',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Shipments',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Return requests',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Recurring payments',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Gift cards',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Shopping carts and wishlists',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    }
    
  ]
  customers:SideBar[] =[
    {
      name:'Customers',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Customer Roles',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Online customers',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Venders',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Activity log',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'GDPR requests (log)',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    }
    
  ]
  promotions:SideBar[] =[
    {
      name:'Discounts',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Affiliates',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Newsletter subscribers',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Campaigns',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    }
    
  ]
  contentManagement:SideBar[] =[
    {
      name:'Topics (pages)',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Message templates',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'News items',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'News comments',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Blog posts',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Blog comments',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Polls',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Forums',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    }
    
  ]
  system:SideBar[] =[
    {
      name:'System information',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Log',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Warnings',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Maintenance',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Message queue',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Schedule tasks',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Search engine friendly page names',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Templates',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    }
    
  ]
  configuration:SideBar[] =[
    {
      name:'Settings',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Email accounts',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Stores',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Countries',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Languages',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Currencies',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Payment methods',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Payment retrictions',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Tax providers',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Tax categories',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Shipping',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Access control list',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Widgets',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Authentication',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Local plugins',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'All plugins and themes',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    }
    
  ]
  settings:SideBar[] =[
    {
      name:'General settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Customer settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Order settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Shipping settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Tax settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Catalog settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Shopping cart settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Reward points',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'GDPR settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Vender settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Blog settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'News settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Forum settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Media settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'App settings',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'All settings (advanced)',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    }
    
  ]
  shipping:SideBar[] =[
    {
      name:'Shipping providers',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Warehouses',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Pickup points',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Dates and ranges',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Measures',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    }
  ]
  autentication:SideBar[] =[
    {
      name:'External autentication',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Multi-factor autentication',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    }
  ]
  reports:SideBar[] =[
    {
      name:'Sales summary',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Low stock',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Bestsellers',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Products never purchased',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Country sales',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Customer reports',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    }
    
  ]
  customerReports:SideBar[] =[
    {
      name:'Registered customers',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Customers by order total',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Customers by number of orders',
      icon:'radio_button_unchecked',
      isExpanded:true,
      isShow:false
    }
  ]
  help:SideBar[] =[

    {
      name:'Help topics',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Community forums',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Premium support services',
      icon:'radio_button_checked',
      isExpanded:true,
      isShow:false
    }
  ]
  mainMenu:mainSideBar[] =[
    {
      name:'Dashboard',
      subMenu:null,
      routing:'dashboard',
      icon:'dashboard',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Catalog',
      subMenu:this.catalog,
      routing:'',
      icon:'book',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Sales',
      subMenu:this.sales,
      routing:'',
      icon:'shopping_cart',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Customers',
      subMenu:this.customers,
      routing:'',
      icon:'perm_identity',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Promotions',
      subMenu:this.promotions,
      routing:'',
      icon:'shopping_cart',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Content management',
      subMenu:this.contentManagement,
      routing:'',
      icon:'supervised_user_circle',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Configuration',
      subMenu:this.configuration,
      routing:'',
      icon:'settings',
      isExpanded:true,
      isShow:false
    },
    {
      name:'System',
      subMenu:this.system,
      routing:'',
      icon:'settings_system_daydream',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Reports',
      subMenu:this.reports,
      routing:'',
      icon:'report',
      isExpanded:true,
      isShow:false
    },
    {
      name:'Help',
      subMenu:this.help,
      routing:'',
      icon:'help',
      isExpanded:true,
      isShow:false
    }
  ]

  subMenu:SideBar[]
  @Input()
  mainSideBar:mainSideBar

  @Output()
  Onselected:EventEmitter<mainSideBar> = new EventEmitter();


  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
    for(let i of this.mainMenu){
      i.isShow = false
    }
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  showSubMenuSideBar(name:String){
    for(let i of this.mainMenu){
      if(i.name == name){
        i.isShow = !i.isShow
        this.subMenu = i.subMenu
        this.Onselected.emit(i)
      }else{
        i.isShow = false
      }
    }
  }

  showSubSubMenuSideBar(name:String){
    for(let i of this.subMenu){
      if(i.name == name){
        i.isShow = !i.isShow
      }else{
        i.isShow = false
      }
    }
  }

}
