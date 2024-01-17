# ssr-benchmark

Benchmark for SSR (Server) TPS performance of popular SSR frameworks.

Environments:

- Macbook Air 2022, Apple M2, 24G

Tested:

- Next.js 14 SSR (pages router, getServerSideProps)
- Next.js 14 RSC SSR (app router, dynamic data fetching) [See](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering)
- Astro 4 (Node.js SSR adapter)

# Repreduction

First, you need to install `oha`. Follow [here](https://github.com/hatoo/oha#installation).

1. Move to the project.
2. `yarn build && yarn start`
3. `oha -c 10 -z 60s http://localhost:3000`

# Results

## Summary

| Framework          |       TPS | Avg. Latency(ms) |
| ------------------ | --------: | ---------------: |
| Astro 4 SSR        |       128 |               77 |
| Next.js 14 SSR     |  123(-4%) |               81 |
| Next.js 14 RSC SSR | 109(-15%) |               91 |

## Details

### Next.js 14 SSR (pages router, getServerSideProps)

```
Summary:
  Success rate: 100.00%
  Total:        60.0014 secs
  Slowest:      0.3137 secs
  Fastest:      0.0502 secs
  Average:      0.0811 secs
  Requests/sec: 123.1637

  Total data:   3.82 MiB
  Size/request: 54
  Size/sec:     65.19 KiB

Response time histogram:
  0.050 [1]    |
  0.077 [1926] |■■■■■■■■■■■
  0.103 [5396] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.129 [37]   |
  0.156 [8]    |
  0.182 [5]    |
  0.208 [4]    |
  0.235 [9]    |
  0.261 [0]    |
  0.287 [2]    |
  0.314 [2]    |

Response time distribution:
  10.00% in 0.0724 secs
  25.00% in 0.0764 secs
  50.00% in 0.0803 secs
  75.00% in 0.0848 secs
  90.00% in 0.0905 secs
  95.00% in 0.0939 secs
  99.00% in 0.1023 secs
  99.90% in 0.2194 secs
  99.99% in 0.3137 secs


Details (average, fastest, slowest):
  DNS+dialup:   0.0008 secs, 0.0005 secs, 0.0009 secs
  DNS-lookup:   0.0001 secs, 0.0000 secs, 0.0003 secs

Status code distribution:
  [200] 7390 responses
```

### Next.js 14 RSC SSR (app router, dynamic data fetching)

```
Summary:
  Success rate: 100.00%
  Total:        60.0016 secs
  Slowest:      0.4691 secs
  Fastest:      0.0585 secs
  Average:      0.0911 secs
  Requests/sec: 109.6638

  Total data:   11.03 MiB
  Size/request: 1.
  Size/sec:     188.31 KiB

Response time histogram:
  0.058 [1]    |
  0.100 [5696] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.141 [853]  |■■■■
  0.182 [8]    |
  0.223 [11]   |
  0.264 [0]    |
  0.305 [1]    |
  0.346 [0]    |
  0.387 [0]    |
  0.428 [1]    |
  0.469 [9]    |

Response time distribution:
  10.00% in 0.0800 secs
  25.00% in 0.0847 secs
  50.00% in 0.0894 secs
  75.00% in 0.0953 secs
  90.00% in 0.1018 secs
  95.00% in 0.1065 secs
  99.00% in 0.1216 secs
  99.90% in 0.4611 secs
  99.99% in 0.4691 secs


Details (average, fastest, slowest):
  DNS+dialup:   0.0007 secs, 0.0004 secs, 0.0009 secs
  DNS-lookup:   0.0001 secs, 0.0000 secs, 0.0002 secs

Status code distribution:
  [200] 6580 responses
```

### Astro 4 (Node.js SSR Adapter)

```
Summary:
  Success rate: 100.00%
  Total:        60.0014 secs
  Slowest:      0.3293 secs
  Fastest:      0.0500 secs
  Average:      0.0779 secs
  Requests/sec: 128.3137

  Total data:   2.14 MiB
  Size/request: 29
  Size/sec:     36.59 KiB

Response time histogram:
  0.050 [1]    |
  0.078 [3993] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.106 [3602] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.134 [76]   |
  0.162 [3]    |
  0.190 [11]   |
  0.218 [11]   |
  0.245 [0]    |
  0.273 [0]    |
  0.301 [0]    |
  0.329 [2]    |

Response time distribution:
  10.00% in 0.0677 secs
  25.00% in 0.0713 secs
  50.00% in 0.0775 secs
  75.00% in 0.0825 secs
  90.00% in 0.0876 secs
  95.00% in 0.0906 secs
  99.00% in 0.1104 secs
  99.90% in 0.2081 secs
  99.99% in 0.3293 secs


Details (average, fastest, slowest):
  DNS+dialup:   0.0009 secs, 0.0006 secs, 0.0012 secs
  DNS-lookup:   0.0001 secs, 0.0000 secs, 0.0002 secs

Status code distribution:
  [200] 7699 responses
```
