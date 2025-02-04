import { useRoute } from 'vue-router'
import { computed } from 'vue'

export function useBreadcrumbs() {
    const route = useRoute();

    const breadcrumbs = computed(() => {
        const segments = route.path.split('/').filter(Boolean);

        return segments.map((segment, index) => ({
            label: segment.charAt(0).toUpperCase() + segment.slice(1),
            to: '/' + segments.slice(0, index + 1).join('/'),
        }));
    });

    return breadcrumbs;
}