import { PrettyPrintPipe } from './pipes/pretty-print.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { RatingModule } from 'primeng/rating';
import { CalendarModule as ACM } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ChipsModule } from 'primeng/chips';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TreeSelectModule } from 'primeng/treeselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { StepsModule } from 'primeng/steps';
import { TreeTableModule } from 'primeng/treetable';
import { SpeedDialModule } from 'primeng/speeddial';
import { FieldsetModule } from 'primeng/fieldset';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContentLayoutComponent } from './components/layout/content-layout/content-layout.component';
import { DynamicTableComponent } from './components/lib/tables/dynamic-table/dynamic-table.component';
import { Page404Component } from './components/page404/page404.component';
import { ReadDataTablePipe } from './pipes/read-data-table.pipe';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb.component';
import { GenericPipe } from './pipes/generic.pipe';
import { DynamicTableCellColorPipe } from './pipes/dynamic-table-cell-color.pipe';
import { DynamicTableCellColorPipeStyle } from './pipes/dynamic-table-cell-color-style.pipe';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SDynamicTableComponent } from './components/lib/tables/s-dynamic-table/s-dynamic-table.component';
import { MDynamicCardComponent } from './components/lib/cards/generique/m-dynamic-card/m-dynamic-card.component';
import { DCardComponent } from './components/lib/cards/unic/d-card/d-card.component';
import { MCardComponent } from './components/lib/cards/unic/m-card/m-card.component';
import { SCardContentComponent } from './components/lib/cards/unic/s-card-content/s-card-content.component';
import { SCardSIfnoComponent } from './components/lib/cards/unic/s-card-s-ifno/s-card-s-ifno.component';
import { STableCardComponent } from './components/lib/cards/unic/s-table-card/s-table-card.component';
import { SCalendarComponent } from './components/lib/containers/calendars/dinamic-calindar/calendar.component';
import { GridContianerComponent } from './components/lib/containers/card-container/grid-contianer.component';
import { CardContianerComponent } from './components/lib/containers/contianer/card-contianer.component';
import { ScectionContainersComponent } from './components/lib/containers/scection-containers/scection-container.component';
import { TableContianerComponent } from './components/lib/containers/table-contianer/table-contianer.component';
import { AccordionComponent } from './components/lib/others/accordion/accordion.component';
import { ConfigeUiComponent } from './components/lib/others/confige-ui/confige-ui.component';
import { MapComponent } from './components/lib/others/map/map.component';
import { DinamicColComponent } from './components/lib/sections/dinamic-col/dinamic-col.component';
import { ScrollerModule } from 'primeng/scroller';
import { SplitterModule } from 'primeng/splitter';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HeaderSteperComponent } from './components/lib/others/header-steper/header-steper.component';
import { MainSteperComponent } from './components/lib/others/main-steper/main-steper.component';
import { SelfCloseSectionComponent } from './components/lib/sections/self-close-section/self-close-section.component';
import { DTableComponent } from './components/lib/tables/d-table/d-table.component';
import { FilterByTextComponent } from './components/lib/others/filter-by-text/filter-by-text.component';
@NgModule({
  declarations: [
    FilterByTextComponent,
    DTableComponent,
    DinamicColComponent,
    AccordionComponent,
    ConfigeUiComponent,
    MapComponent,
    ScectionContainersComponent,
    TableContianerComponent,
    GridContianerComponent,
    CardContianerComponent,
    MDynamicCardComponent,
    DCardComponent,
    MCardComponent,
    SCardContentComponent,
    SCardSIfnoComponent,
    STableCardComponent,
    SCalendarComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ContentLayoutComponent,
    DynamicTableComponent,
    Page404Component,
    ReadDataTablePipe,
    PrettyPrintPipe,
    BreadcrumbComponent,
    GenericPipe,
    DynamicTableCellColorPipe,
    DynamicTableCellColorPipeStyle,
    SDynamicTableComponent,
    HeaderSteperComponent,
    MainSteperComponent,
    SelfCloseSectionComponent,

  ],
  imports: [
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ScrollerModule,
    SplitterModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DialogModule,
    DynamicDialogModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    MultiSelectModule,
    PasswordModule,
    AvatarModule,
    DropzoneModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    InputNumberModule,
    DropdownModule,
    ToggleButtonModule,
    CheckboxModule,
    TabViewModule,
    InputTextareaModule,
    KeyFilterModule,
    RatingModule,
    ACM,
    InputMaskModule,
    ChipsModule,
    AutoCompleteModule,
    TreeSelectModule,
    InputSwitchModule,
    RadioButtonModule,
    SliderModule,
    SelectButtonModule,
    ToastModule,
    SelectButtonModule,
    TooltipModule,
    StepsModule,
    PanelMenuModule,
    ToolbarModule,
    TreeTableModule,
    SpeedDialModule,
    FieldsetModule,
    DividerModule,
    OverlayPanelModule,
    CardModule,
    VirtualScrollerModule,
    ProgressBarModule,
    LazyLoadImageModule,
    NgbModule,
    NgApexchartsModule,
    TieredMenuModule,

  ],
  exports: [
    DTableComponent,
    FilterByTextComponent,
    SelfCloseSectionComponent,
    MainSteperComponent,
    HeaderSteperComponent,
    DinamicColComponent,
    AccordionComponent,
    ConfigeUiComponent,
    MapComponent,
    ScectionContainersComponent,
    TableContianerComponent,
    GridContianerComponent,
    CardContianerComponent,
    MDynamicCardComponent,
    DCardComponent,
    MCardComponent,
    STableCardComponent,
    SCardContentComponent,
    SCardSIfnoComponent,
    SCalendarComponent,
    SDynamicTableComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ContentLayoutComponent,
    DynamicTableComponent,
    ReadDataTablePipe,
    PrettyPrintPipe,
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    DynamicDialogModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    MultiSelectModule,
    PasswordModule,
    AvatarModule,
    DropzoneModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    InputNumberModule,
    DropdownModule,
    ToggleButtonModule,
    CheckboxModule,
    TabViewModule,
    InputTextareaModule,
    KeyFilterModule,
    RatingModule,
    ACM,
    InputMaskModule,
    ChipsModule,
    AutoCompleteModule,
    TreeSelectModule,
    InputSwitchModule,
    RadioButtonModule,
    SliderModule,
    SelectButtonModule,
    ToastModule,
    SelectButtonModule,
    TooltipModule,
    StepsModule,
    PanelMenuModule,
    ToolbarModule,
    TreeTableModule,
    SpeedDialModule,
    FieldsetModule,
    DividerModule,
    OverlayPanelModule,
    CardModule,
    VirtualScrollerModule,
    ProgressBarModule,
    LazyLoadImageModule,
    NgbModule,
    NgApexchartsModule,
    TieredMenuModule,
    GenericPipe,
    DynamicTableCellColorPipe,
    DynamicTableCellColorPipeStyle,
  ],
  providers: [ConfirmationService, MessageService],
})
export class SharedModule { }
