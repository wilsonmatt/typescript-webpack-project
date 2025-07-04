import { Widget } from '../interfaces';
import { Observable } from 'rxjs';
import { getApiService } from '../apis';
import './template.css';

export function renderTemplate(data: Widget): string {
    return `
        <div class="block">
            <div class="block-content">
                <h2>${data.name}</h2>
            </div>
        </div>
    `;  
} 

export function renderAllWidgets(widgets: Widget[]): string {
    return `
        <div class="widgets-container">
            ${widgets.map(widget => renderTemplate(widget)).join('')}
        </div>
    `;
}
function checkBlockVisibility() {
    const aBlock = document.querySelector('.block > .block-content');
    if(aBlock) {
        const rect = aBlock.getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio === 1) {
                    requestAnimationFrame(() => {
                        console.log('a block visible and painted', aBlock);
                    });
                }
            });
        }, {
            threshold: 1.0 // Only trigger when 100% visible
        });
    }
    console.log('aBlock visible and painted');

}
function checkLastBlockVisibility() {
    const lastBlock = document.querySelector('.block:last-child > .block-content');
    if (lastBlock) {
        const rect = lastBlock.getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        
        // Use IntersectionObserver to check if element is fully visible and painted
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio === 1) {
                    // Wait for next paint to ensure element is rendered
                    requestAnimationFrame(() => {
                        console.log('last block visible and painted', lastBlock);
                    });
                }
            });
        }, {
            threshold: 1.0 // Only trigger when 100% visible
        });
        
        observer.observe(lastBlock);
    }
}

export function renderAllWidgetsV2(widgets: Widget[]): string {
    const html = `
        <div class="widgets-container">
            ${widgets.map(widget => renderTemplate(widget)).join('')}
        </div>
    `;

    // Add scroll event listener after rendering
    setTimeout(() => {
        if (document.querySelector('.block:last-child')) {
            window.addEventListener('scroll', checkLastBlockVisibility);
            window.addEventListener('resize', checkLastBlockVisibility);
        }
        if (document.querySelector('.block')) {
            window.addEventListener('scroll', checkBlockVisibility);
        }
    }, 0);

    return html;
}


export function renderAllWidgetsV3(widgets: Widget[]): string {
    const html = `
        <div class="widgets-scrollable-container">
            ${widgets.map(widget => `
                <div class="block">
                    <div class="block-content">
                        <h3>${widget.name}</h3>
                        <p>${widget.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    return html;
}


