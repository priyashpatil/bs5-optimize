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

## Bootstrap + Parcel (Has minification by default)

| Pricing Page (Bootstrap Example)                                     | CSS       | JS       |
|----------------------------------------------------------------------|-----------|----------|
| Base (No Optimizations)                                              | 222.11 KB | 93.43 KB |
| SASS Optimization                                                    | 128.04 KB | 93.43 KB |
| SASS Optimization + PurgeCSS                                         | 22.7 KB   | 93.43 KB |
| SASS Optimization + PurgeCSS + JS Optimization                       | 22.7 KB   | 44.3 KB  |
| SASS Optimization + PurgeCSS + JS Optimization +  Compression (gzip) | 5.4 KB    | 16.2 KB  |

## Bootstrap + Vite (Has minification by default)

| Pricing Page (Bootstrap Example)                                     | CSS       | JS       |
|----------------------------------------------------------------------|-----------|----------|
| Base (No Optimizations)                                              | 225.78 KB | 83.95 KB |
| SASS Optimization                                                    | 128.50 KB | 83.95 KB |
| SASS Optimization + PurgeCSS                                         | 22.8 KB   | 83.95 KB |
| SASS Optimization + PurgeCSS + JS Optimization                       | 22.8 KB   | 38.1 KB  |
| SASS Optimization + PurgeCSS + JS Optimization +  Compression (gzip) | 5.6 KB    | 14.3 KB  |

## PRs to send

- Parcel Build Docs
- Vite Build Docs
- Bundler examples in Docs