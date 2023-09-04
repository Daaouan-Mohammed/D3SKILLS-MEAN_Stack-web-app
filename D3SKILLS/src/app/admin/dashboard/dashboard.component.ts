import { Component, AfterViewInit, ViewChild, Inject, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceFormComponent } from '../service-form/service-form.component';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { GalerieFormComponent } from '../galerie-form/galerie-form.component';
import { ReferenceFormComponent } from '../reference-form/reference-form.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ReferencesService } from 'src/app/services/references.service';
import { GalerieService } from 'src/app/services/galerie.service';
import { DemandeDevisService } from 'src/app/services/demande-devis.service';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements AfterViewInit{
  constructor(
    public dialog: MatDialog, 
    public _login: LoginService, 
    private _router: Router, 
    private _services: ServicesService,
    private _references: ReferencesService,
    private _galerie: GalerieService,
    private _demandeDevis: DemandeDevisService,
    private _contact: DemandeDevisService,
    ) {}
    
  
  openServiceDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ServiceFormComponent, {
      width: '59.5%',
      height: '91.8%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false
    });
  }
  editServiceDialoge(data: any, enterAnimationDuration: string, exitAnimationDuration: string){
    this.dialog.open(ServiceFormComponent, {
      width: '59.5%',
      height: '91.8%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false,
      data: data,
    }); 
  }

  /*openSubServiceDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginFormComponent, {
      width: '59.5%',
      height: '91.8%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false
    });
  }*/

  openGalerieDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(GalerieFormComponent, {
      width: '59.5%',
      height: '91.8%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false
    });
  }
  editGalerieDialoge(data: any, enterAnimationDuration: string, exitAnimationDuration: string){
    this.dialog.open(GalerieFormComponent, {
      width: '59.5%',
      height: '91.8%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false,
      data: data,
    }); 
  }

  openReferenceDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ReferenceFormComponent, {
      width: '59.5%',
      height: '91.8%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false,
    });
  }
  editRefDialoge(data: any, enterAnimationDuration: string, exitAnimationDuration: string){
    this.dialog.open(ReferenceFormComponent, {
      width: '59.5%',
      height: '91.8%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false,
      data: data,
    }); 
  }

  logout() {
    this._login.logout();
    this._router.navigate(['/']);
  }

  //Sidebar toggle show hide function
  status = false;
  addToggle(){
    this.status = !this.status;
  }

  //services and references, galerie tables:
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  references!: MatTableDataSource<any>;
  galerie !: MatTableDataSource<any>;
  demandeDevis!: any[];
  contact!: any[];
  services!: any[];
  //subServices!: any[];

  ngOnInit(){ //display data
    this._services.getServices().subscribe((services: any) => {
      this.services = services;
      console.log(services);
    })

    this._references.getReferences().subscribe((references: any) =>{
    this.references =new MatTableDataSource(references);
    this.references.paginator = this.paginator;
    console.log(references);
  })
  
    this._galerie.getGalerie().subscribe((galerie: any) =>{
    this.galerie =new MatTableDataSource(galerie);
    this.galerie.paginator = this.paginator;
    console.log(galerie);
  })

    this._demandeDevis.getDemandeDevis().subscribe((demandeDevis: any) =>{
    this.demandeDevis = demandeDevis;
    console.log(demandeDevis);
  })

    this._contact.getDemandeDevis().subscribe((contact: any) =>{
    this.contact = contact;
    console.log(contact);
  })

  }

  /*getSubServices(serviceId: string){
    this._services.getSubServices(serviceId).subscribe((subServices: any) => {
      this.subServices = subServices;
      console.log(subServices);
      console.log(serviceId);
    });
  }*/

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    if (this.references) {
      this.references.paginator = this.paginator;
    }
  }

  //delete service:
  onDeleteService(ServiceId: string){
    this._services.deleteService(ServiceId)
    .subscribe(() => {
      this._router.navigate(['/auth']);
      console.log('Service deleted successfully');
    }, error => {
      console.error('Error deleting service:', error);
    });
  }

  //delete ref:
  onDeleteRef(RefId: string){
    this._references.deleteReference(RefId)
    .subscribe(() => {
      this._router.navigate(['/auth']);
      console.log('Reference deleted successfully');
    }, error => {
      console.error('Error deleting reference:', error);
    });
  }

  //delete galerie:
  onDeletegalerie(galerieId: string){
    this._galerie.deleteGalerie(galerieId)
    .subscribe(() => {
      this._router.navigate(['/auth']);
      console.log('Galerie deleted successfully');
    }, error => {
      console.error('Error deleting galerie:', error);
    });
  }

  onDeleteDevis(demandeDevisId: string){
    this._demandeDevis.deleteDemandeDevis(demandeDevisId)
    .subscribe(() => {
      this._router.navigate(['/auth']);
      console.log('demande devis deleted successfully');
    }, error => {
      console.error('Error deleting demande devis:', error);
    });
  }

  onDeleteContact(contactId: string){
    this._contact.deleteDemandeDevis(contactId)
    .subscribe(() => {
      this._router.navigate(['/auth']);
      console.log('contact deleted successfully');
    }, error => {
      console.error('Error deleting contact:', error);
    });
  }



}
