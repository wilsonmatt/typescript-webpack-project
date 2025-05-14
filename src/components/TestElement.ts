
export class TestElement {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('div');
        this.element.id = 'testElement';
        this.element.className = 'container flex items-center justify-center m-3';
        this.element.innerHTML = `
            <div class="p-3">
                <h1 class="text-center">Global CSS Test</h1>
                <p class="text-center">This text should be styled by global.css</p>
                <div class="flex justify-between m-2">
                    <a href="#" class="m-2">This link should have hover effect</a>
                    <button class="m-2">This button should have cursor pointer</button>
                </div>
                <div class="flex flex-col items-center m-2">
                    <div class="m-1">Margin 1</div>
                    <div class="m-2">Margin 2</div>
                    <div class="m-3">Margin 3</div>
                </div>
            </div>
        `;
        document.body.prepend(this.element);
    }

    public remove(): void {
        this.element.remove();
    }
    public add(): void {
        document.body.prepend(this.element);
    }
}
