# Bootstrap 5 CSS/JS Optimization R+D

## Bootstrap + Webpack

| Pricing Page (Bootstrap Example)                                                   | CSS     | JS      |
|------------------------------------------------------------------------------------|---------|---------|
| Base (No Optimizations)                                                            | 227 KB  | 80 KB   |
| SASS Optimization                                                                  | 130 KB  | 80 KB   |
| SASS Optimization + PurgeCSS                                                       | 22.5 KB | 80 KB   |
| SASS Optimization + PurgeCSS + JS Optimization                                     | 22.1 KB | 35.8 KB |
| SASS Optimization + PurgeCSS + JS Optimization + Minification                      | 21.5 KB | 35.9 KB |
| SASS Optimization + PurgeCSS + JS Optimization + Minification + Compression (gzip) | 5.6 KB  | 13.5 KB |

## Bootstrap + Parcel

|                                                | CSS       | JS       |
|------------------------------------------------|-----------|----------|
| Pricing Page                                   | 222.11 KB | 93.43 KB |
| Pricing Page (SASS Optimization)               | 128.04 KB | 93.43 KB |
| Pricing Page (SASS Optimization + PurgeCSS)    | 26 KB     | 93.43 KB |
| SASS Optimization + PurgeCSS + JS Optimization | 26 KB     | 42.93 KB |

## Bootstrap + Vite

|                                             | CSS       | JS       |
|---------------------------------------------|-----------|----------|
| Pricing Page                                | 225.78 KB | 83.95 KB |
| Pricing Page (SASS Optimization)            | 128.50 KB | 83.95 KB |
| Pricing Page (SASS Optimization + PurgeCSS) | 22.8 KB   | 83.95 KB |

## PRs to send

- Parcel Build Docs
- Vite Build Docs
- Bundler examples in Socs