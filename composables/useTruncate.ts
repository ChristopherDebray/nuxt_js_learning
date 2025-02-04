export function useTruncate(text: string, length = 25, suffix = "...") {
    return computed(() =>
        text.length > length ? text.slice(0, length) + suffix : text
    )
}