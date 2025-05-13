interface StickyNoteOptions {
    position: 'fixed' | 'sticky';
    content?: string;
}

export class StickyNote {
    private element: HTMLElement;
    private position: 'fixed' | 'sticky';
    private checkScroll: () => void = () => {};

    constructor(options: StickyNoteOptions) {
        this.position = options.position;
        this.element = document.createElement('div');
        this.element.className = 'sticky-note';
        this.element.innerHTML = `
            <div class="sticky-note-content">
                <textarea readonly placeholder="Write your note here...">${options.content || ''}</textarea>
            </div>
        `;
        this.initializeStyles();
        document.body.appendChild(this.element);
        this.initializeScrollListener();
    }

    private initializeStyles(): void {
        const style = document.createElement('style');
        style.textContent = `
            .sticky-note {
                position: ${this.position};
                bottom: 20px;
                right: 20px;
                width: 200px;
                background-color: #ffeb3b;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                border-radius: 0;
                padding: 10px;
                z-index: 1000;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s ease, visibility 0.3s ease;
            }

            .sticky-note.visible {
                opacity: 1;
                visibility: visible;
            }

            .sticky-note-content textarea {
                width: 100%;
                height: 150px;
                border: none;
                background: transparent;
                resize: none;
                font-family: 'Arial', sans-serif;
                font-size: 14px;
                line-height: 1.4;
                outline: none;
                cursor: default;
                user-select: none;
            }

            .sticky-note:hover {
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            }
        `;
        document.head.appendChild(style);
    }

    private initializeScrollListener(): void {
        this.checkScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const totalHeight = document.documentElement.scrollHeight;
            const scrollPercentage = (scrollPosition / totalHeight) * 100;

            if (scrollPercentage >= 90) {
                this.element.classList.add('visible');
            } else {
                this.element.classList.remove('visible');
            }
        };

        // Check initial scroll position
        this.checkScroll();

        // Add scroll event listener
        window.addEventListener('scroll', this.checkScroll);
    }

    public setContent(content: string): void {
        const textarea = this.element.querySelector('textarea');
        if (textarea) {
            textarea.value = content;
        }
    }

    public getContent(): string {
        const textarea = this.element.querySelector('textarea');
        return textarea ? textarea.value : '';
    }

    public remove(): void {
        window.removeEventListener('scroll', this.checkScroll);
        this.element.remove();
    }
} 