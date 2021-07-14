class App {
    constructor() {
        this.notes = []; 
       
        this.$placeholder = document;querySelector('#placeholder'); 
        this.$form = document.querySelector("#form"); 
        this.$notes = document;querySelector("#notes"); 
        this.addEventListeners(); 
        this.$noteTitle = document.querySelector('#note-title'); 
        this.$formButtons = document.querySelector('#form-buttons'); 
    }

    addEventListeners() {
        document.body.addEventListener('click', event => {
            this.handleFormClick(event)
        }); 
        this.$form.addEventListener('submit', event => {
            event.preventDefault(); 
            const title = this.$noteTitle.value; 
            const text = this.$noteText.value; 
            const hasNote = title || text; 
            if(hasNote) {
                this.addNote({title, text}); 
            }
        })
    }

    

    handleFormClick(event){
        const isFormClicked = this.$form.contains(event.target); 
        if(isFormClicked) {
            this.openForm(); 
        } else {
            this.closeForm(); 
        }
    }

    openForm() {
        this.$form.classList.add("form-open"); 
        this.$noteTitle.style.dsiplay = "block"; 
        this.$formButtons.style.display = "block"; 
    }

    closeForm() {
        this.$form.classList.remove("form-open"); 
        this.$noteTitle.style.dsiplay = "none"; 
        this.$formButtons.style.display = "none";
    }

    addNote(note) {
        const newNote = {
            title: note.title, 
            text: note.text, 
            color: white,
            id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1 

        }; 
        this.notes = [...this.notes, newNote]; 
        this.displayNotes(); 
    }

    displayNotes() {
        const hasNotes = this.notes.length > 0; 
        this.$placeholder.style.display =  hasNotes ? "none" : "flex"; 
        this.notes.map( note => `
        <div style="background: ${note.color};" class="note">
            <div class="${note.title && 'note-title'}">${note.title}</div>
            <div class="note-text">${note.text}</div>
            <div class="toolbar-container">
                <div class="toolbar">
                    <img class="toolbar-color" src="https://icon.now.sh/palette">
                    <img class="toolbar-delete" src="https://icon.now.sh/delete">
                </div>
            </div>
      </div>
        `).join(""); 
    }
    
}


new App()