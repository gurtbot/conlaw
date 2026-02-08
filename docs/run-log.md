# Local run attempt log

## Commands and outputs

```bash
$ timeout 2 python3 -m http.server 8000 --directory /workspace/conlaw/app
```

Output (none before timeout).

```bash
$ curl -I http://127.0.0.1:8000/
```

Output:

```
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
curl: (7) Failed to connect to 127.0.0.1 port 8000 after 0 ms: Couldn't connect to server
```
