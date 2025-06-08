
import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const reportWebVitals = (metric: any) => {
      console.log(`${metric.name}: ${metric.value}`);
    };

    // Measure performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Largest Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            reportWebVitals({
              name: 'LCP',
              value: entry.startTime,
            });
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            reportWebVitals({
              name: 'FID',
              value: (entry as any).processingStart - entry.startTime,
            });
          }
        }
      });

      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cleanup
      return () => {
        observer.disconnect();
        fidObserver.disconnect();
      };
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
