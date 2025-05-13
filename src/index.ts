import { formatMessage, initializeWidgetData } from './apis';
import { Widget } from './interfaces';
import { renderTemplate, renderAllWidgets, renderAllWidgetsV2 } from './templates/template';
import { StickyNote } from './components/StickyNote';

function greet(name: string): string {
    return formatMessage(name);
}

// Mount the application
const root = document.getElementById('root');
if (root) {
    initializeWidgetData();
    const widgets = JSON.parse(localStorage.getItem('widgets') || '[]');
    const widgetHtml = renderAllWidgetsV2(widgets);
    root.innerHTML = widgetHtml;

    // Create a sticky note instance
    const stickyNote = new StickyNote({
        position: 'fixed',
        content: 'Welcome to the application!'
    });
} 