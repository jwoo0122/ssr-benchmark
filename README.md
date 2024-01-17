# ssr-benchmark

Benchmark for SSR (Server) TPS performance of popular SSR frameworks.

Tested:

- Next.js 14 SSR (pages router, getServerSideProps)
- Next.js 14 RSC SSR (app router, dynamic data fetching) [See](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering)
- Astro 4 (Node.js SSR adapter)

# Results

## Next.js 14 SSR (pages router, getServerSideProps)

```
Summary:
  Success rate: 100.00%
  Total:        10.0017 secs
  Slowest:      0.3283 secs
  Fastest:      0.0537 secs
  Average:      0.0858 secs
  Requests/sec: 116.1807

  Total data:   618.45 KiB
  Size/request: 54
  Size/sec:     61.83 KiB

Response time histogram:
  0.054 [1]   |
  0.081 [316] |■■■■■■■■■■■■
  0.109 [835] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.136 [7]   |
  0.164 [1]   |
  0.191 [0]   |
  0.218 [0]   |
  0.246 [1]   |
  0.273 [0]   |
  0.301 [0]   |
  0.328 [1]   |

Response time distribution:
  10.00% in 0.0749 secs
  25.00% in 0.0804 secs
  50.00% in 0.0859 secs
  75.00% in 0.0899 secs
  90.00% in 0.0965 secs
  95.00% in 0.0993 secs
  99.00% in 0.1082 secs
  99.90% in 0.2351 secs
  99.99% in 0.3283 secs


Details (average, fastest, slowest):
  DNS+dialup:   0.0007 secs, 0.0005 secs, 0.0009 secs
  DNS-lookup:   0.0001 secs, 0.0000 secs, 0.0002 secs

Status code distribution:
  [200] 1162 responses
```

## Next.js 14 RSC SSR (app router, dynamic data fetching)

```
Summary:
  Success rate: 100.00%
  Total:        10.0019 secs
  Slowest:      0.3617 secs
  Fastest:      0.0658 secs
  Average:      0.0973 secs
  Requests/sec: 102.1805

  Total data:   1.71 MiB
  Size/request: 1.
  Size/sec:     175.15 KiB

Response time histogram:
  0.066 [1]   |
  0.095 [477] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.125 [527] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.155 [9]   |
  0.184 [7]   |
  0.214 [0]   |
  0.243 [0]   |
  0.273 [0]   |
  0.303 [0]   |
  0.332 [0]   |
  0.362 [1]   |

Response time distribution:
  10.00% in 0.0858 secs
  25.00% in 0.0910 secs
  50.00% in 0.0960 secs
  75.00% in 0.1024 secs
  90.00% in 0.1084 secs
  95.00% in 0.1124 secs
  99.00% in 0.1293 secs
  99.90% in 0.1624 secs
  99.99% in 0.3617 secs


Details (average, fastest, slowest):
  DNS+dialup:   0.0007 secs, 0.0005 secs, 0.0010 secs
  DNS-lookup:   0.0001 secs, 0.0000 secs, 0.0003 secs

Status code distribution:
  [200] 1022 responses
```

## Astro 4 (Node.js SSR Adapter)

```
Summary:
  Success rate: 100.00%
  Total:        60.0010 secs
  Slowest:      0.7878 secs
  Fastest:      0.0535 secs
  Average:      0.0792 secs
  Requests/sec: 126.2312

  Total data:   2.11 MiB
  Size/request: 29
  Size/sec:     36.00 KiB

Response time histogram:
  0.053 [1]    |
  0.127 [7532] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.200 [25]   |
  0.274 [7]    |
  0.347 [5]    |
  0.421 [2]    |
  0.494 [0]    |
  0.567 [0]    |
  0.641 [1]    |
  0.714 [0]    |
  0.788 [1]    |

Response time distribution:
  10.00% in 0.0682 secs
  25.00% in 0.0720 secs
  50.00% in 0.0792 secs
  75.00% in 0.0845 secs
  90.00% in 0.0879 secs
  95.00% in 0.0902 secs
  99.00% in 0.1063 secs
  99.90% in 0.3082 secs
  99.99% in 0.7878 secs


Details (average, fastest, slowest):
  DNS+dialup:   0.0010 secs, 0.0007 secs, 0.0013 secs
  DNS-lookup:   0.0002 secs, 0.0000 secs, 0.0003 secs

Status code distribution:
  [200] 7574 responses
```
