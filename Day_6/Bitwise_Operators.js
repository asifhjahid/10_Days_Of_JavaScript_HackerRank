function getMaxLessThanK(n, k) {
    let largest = 0;
    let current = 0;
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b <= n; b++) {
            current = a & b;
            if (current < k && current < n && current > largest) {
                largest = current;
            }
        }
    }
    return largest;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}