# MkDocs


## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.



```
> pip install mkdocs     # mkdocs --version로 확인할 때 현 버전은 1.1.2
> pip install pymdown-extensions
> pip install mkdocs-material
> pip install mkdocs-rtd-dropdown
```

```
> mkdocs new myProject   # myProject라는 프로젝트 생성
> cd myProject
> mkdocs serve   # 로컬 서버 띄우기  -> 브라우저에서  `http://localhost:8000/` 또는`http://127.0.0.1:8000/`로 확인 가능
> mkdocs build   # html 문서 만들기
```
