import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[app-dropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open')
    isOpen : boolean = false;

    // @HostListener('click') toggledropdown(){
    //     this.isOpen = !this.isOpen;
    // }

    @HostListener('document:click',['$event']) toggledropdown(event: Event){
        this.isOpen = this.elRef.nativeElement.contains(event.target);
    }

    constructor(private elRef : ElementRef){}

}