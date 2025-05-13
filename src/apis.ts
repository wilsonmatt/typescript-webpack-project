import { Observable, of, delay } from "rxjs";
import widgetsData from './data/widgets.json';

// Mock API response data
interface Widget{
    id: number;
    name: string;
}

let apiService: WidgetApiService;

export function getApiService() {
    if (!apiService) {
        apiService = new WidgetApiService();
    }
    return apiService;
}

// Mock API service
class WidgetApiService {

    // Mock a GET request to fetch a widget
    getWidget(id: number): Observable<Widget> {
      // Using 'of' to create an Observable that emits a mock user object
      return of({
        id,
        name: 'Widget ' + id,
      }).pipe(
        // Add artificial delay to simulate network latency (500ms)
        delay(500)
      );
    }

    // Mock a GET request to fetch a widget from JSON data
    getWidgetsFromJson(): Observable<Widget[]> {
        // Import JSON data
        const widgets: Widget[] = widgetsData.widgets;

        // Return observable with all widgets and artificial delay
        return of(widgets).pipe(
            delay(500)
        );
    }
}

export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatMessage(name: string): string {
    return `Welcome, ${capitalize(name)}!`;
}

export function initializeWidgetData(): void {
    getApiService().getWidget(1).subscribe({
        next: (widget) => console.log('Widget received:', widget),
        error: (err) => console.error('Error:', err),
        complete: () => console.log('Widget fetch completed')
    });

    getApiService().getWidgetsFromJson().subscribe({
        next: (widgets) => {
            localStorage.setItem('widgets', JSON.stringify(widgets));
            console.log('Widgets received and stored:', widgets);
        },
        error: (err) => console.error('Error:', err),
        complete: () => console.log('Widgets fetch completed')
    });
}

export function checkLocalStorage(key: string): any {
    const data = localStorage.getItem(key);
    if (data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            console.error('Error parsing localStorage data:', e);
            return null;
        }
    }
    return null;
}
