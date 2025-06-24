export function getExternalApiPromise<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
}