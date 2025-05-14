import { StickyNote } from "./StickyNote";
import { TestElement } from "./TestElement";

interface MenuOptions {
    isVisible?: boolean;
}

export class Menu {
    private element: HTMLElement;
    private isVisible: boolean;

    constructor(options: MenuOptions = { isVisible: true }) {
        this.isVisible = options.isVisible ?? true;
        this.element = document.createElement('div');
        this.element.className = 'menu';
        this.initializeStyles();
        this.render();
        document.body.appendChild(this.element);
    }

    private initializeStyles(): void {
        const style = document.createElement('style');
        style.textContent = `
            .menu {
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: #ffffff;
                border-radius: 4px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                padding: 8px 0;
                z-index: 1000;
                display: none;
            }

            .menu.visible {
                display: block;
            }

            .menu ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .menu li {
                padding: 8px 16px;
                cursor: pointer;
            }

            .menu li:hover {
                background-color: #f5f5f5;
            }
        `;
        document.head.appendChild(style);
    }

    private render(): void {
        this.element.innerHTML = `
            <ul>
                <li id="clean-page">Clean page</li>
                <li id="restore-sticky-note">Restore StickyNote</li>
                <li id="toggle-global-css-test">Toggle Global CSS Test</li>
            </ul>
        `;

        if (this.isVisible) {
            this.element.classList.add('visible');
        }

        // Add click handler for clean page
        const cleanPageButton = this.element.querySelector('#clean-page');
        if (cleanPageButton) {
            cleanPageButton.addEventListener('click', () => {
                const stickyNotes = document.querySelectorAll('.sticky-note');
                stickyNotes.forEach(note => note.remove());


                const widgets = JSON.parse(localStorage.getItem('widgets') || '[]');
                const widgetElements = document.querySelectorAll('.widgets-container');
                widgetElements.forEach(widget => widget.remove());
                // localStorage.setItem('widgets', '[]');
            });
        }

        // Add click handler for restore sticky note
        const restoreStickyNoteButton = this.element.querySelector('#restore-sticky-note');
        if (restoreStickyNoteButton) {
            restoreStickyNoteButton.addEventListener('click', () => {
                // TODO: Implement restore functionality
                console.log('Restore StickyNote clicked');
                const stickyNote = new StickyNote({
                    position: 'fixed',
                    content: 'Welcome to the application!'
                });
            });
        }

        // Add click handler for toggle global CSS test
        const toggleGlobalCssTestButton = this.element.querySelector('#toggle-global-css-test');
        if (toggleGlobalCssTestButton) {
            toggleGlobalCssTestButton.addEventListener('click', () => {
                const testElement = document.querySelector('#testElement');
                if (testElement) {
                    testElement.remove();
                } else {
                    const testElement = new TestElement();
                }
            });
        }
    }
}

