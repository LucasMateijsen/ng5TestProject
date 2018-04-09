import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from '../../services/modal.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'modal',
    template: '<ng-content></ng-content>'
})

export class ModalComponent implements OnInit, OnDestroy {
    private element: ElementRef;
    private modalId: number = -1;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el;
    }

    ngOnInit(): void {
        console.log(`Modal: Init`);
        let modal = this;
        // set the id
        this.modalId = this.element.nativeElement.id;

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        let body = document.getElementsByTagName('body')[0];
        body.appendChild(this.element.nativeElement);

        // close modal on background click
        this.element.nativeElement.addEventListener('click', function (event: any) {
            var modalBody = event.target.closest('.modal-body');
            if (modalBody == null || modalBody == undefined) {
                modal.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
        console.log(`Modal: Initialized ${this.modalId}`);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        console.log(`Modal: Destroying ${this.modalId}`);
        this.modalService.remove(this);
        this.element.nativeElement.remove();
    }

    // open modal
    open(): void {
        console.log(`Modal: Opening ${this.modalId}`);
        this.element.nativeElement.style.display = "block";
        let body = document.getElementsByTagName('body')[0];
        body.classList.add("modal-open");
    }

    // close modal
    close(): void {
        console.log(`Modal: Closing ${this.modalId}`);
        this.element.nativeElement.style.display = "none";
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove("modal-open");
    }
}