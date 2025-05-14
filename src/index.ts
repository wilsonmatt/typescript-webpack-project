import './styles/global.css';
import './styles/core.css';
import { formatMessage, initializeWidgetData } from './apis';
import { Widget } from './interfaces';
import { renderTemplate, renderAllWidgets, renderAllWidgetsV2 } from './templates/template';
import { StickyNote } from './components/StickyNote';
import { Menu } from './components/Menu';
import { TestElement } from './components/TestElement';

function greet(name: string): string {
    return formatMessage(name);
}

// Mount the application
const root = document.getElementById('root');
if (root) {
   
    const testElement = new TestElement();

    initializeWidgetData();
    const widgets = JSON.parse(localStorage.getItem('widgets') || '[]');
    const widgetHtml = renderAllWidgetsV2(widgets);
    root.innerHTML = widgetHtml;

    // Create a sticky note instance
    const stickyNote = new StickyNote({
        position: 'fixed',
        content: 'Welcome to the application!'
    });

    // Create menu instance
    const menu = new Menu();
} 