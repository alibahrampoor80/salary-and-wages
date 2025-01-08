export function ToLocalDateString(date: Date) {
//
    const option: {month: "short", day: "numeric", weekday: "long" } = {
        weekday: "long",
        // year: "numeric",
        month: "short",
        day: "numeric"
    };
    return new Date(date).toLocaleDateString('fa-ir', option)
}
