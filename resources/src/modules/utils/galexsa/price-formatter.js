import React from 'react'

export default function priceFormatter(p, f1 = 8, f2 = 2, d = ",") {
    if (!p) {
        return 0
    }
    p = parseInt(p) !== 0 ? parseFloat(p).toFixed(f2) : parseFloat(p).toFixed(f1)
    p = parseInt(p) !== 0 ? p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, d) : p
    return p
}
