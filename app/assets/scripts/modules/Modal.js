class Modal {
    constructor() {
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeIcon = document.querySelector(".modal__close")
        this.openModalButtons = document.querySelectorAll(".open-modal")
        this.events()
    }
    events() {
        this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))
        this.closeIcon.addEventListener("click", () => this.closeTheModal())
        this.modal.addEventListener("click", () => this.closeTheModal())
    }

    openTheModal(e) {
        e.preventDefault()
        this.modal.classList.add("modal--is-visible")
    }

    closeTheModal() {
        this.modal.classList.remove("modal--is-visible")
    }

    // injectHTML() {
    //     document.body.insertAdjacentHTML('beforeend', `
    //       <section class="modal">
    //           <div class="modal__inner">
    //           <h3 class="modal__title">Contact</h3><p class="modal__description">If you would like to find out more about the
    //       services we provide, please email us: <br> <a href="mailto:AP@AP.ASSOCIATES" class="btn">ap@ap.associates</a></p>
    //       <span class="border-bottom"></span>
    //           </div>
    //           <div class="modal__close">X</div>
    //         </section>
    //     `)
    // }
}

export default Modal