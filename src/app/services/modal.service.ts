export class ModalService {
    private modals: any[] = [];
    private counter: number = 0;

    private getNextId(): number {
        this.counter++;
        return this.counter;
    }

    add(modal: any) {
        // add modal to array of active modals
        if (modal.modalId == "") {
            modal.modalId = this.getNextId();
        }
        console.log(`ModalService: adding model ${modal.modalId}`);
        this.modals.push(modal);
    }

    remove(modal: any) {
        // remove modal from array of active modals
        console.log(`ModalService: removing model ${modal.modalId}`);
        let modalToRemove = this.modals.findIndex(x => x.id == modal.modalId);
        this.modals.splice(modalToRemove, 1);     
    }

    open(modalId: string) {
        // open modal specified by id
        console.log(`ModalService: opening model ${modalId}`);
        let modal = this.modals.find(x => x.modalId == modalId);
        if (modal) {
            modal.open();
        }
    }

    close(modalId: string) {
        // close modal specified by id
        console.log(`ModalService: closing model ${modalId}`);
        let modal = this.modals.find(x => x.modalId == modalId);
        if (modal) {
            modal.close();
        }
    }
}