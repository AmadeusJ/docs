# [Making queries](https://docs.djangoproject.com/en/3.1/topics/db/queries/)

model이 만들어져 있다면, django는 CRUD (create, retrieve, update, delete)를 위한 db-추상 API를 제공한다. 이들은 `django.db.models`에서 제공 되는
메소드들일 것...

다음은 예시 model인데, 이 예시를 사용_
``` python
from django.db import models

class Blog(models.Model):
    name = models.CharField(max_length=100)
    tagline = models.TextField()

    def __str__(self):
        return self.name

class Author(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()

    def __str__(self):
        return self.name

class Entry(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    headline = models.CharField(max_length=255)
    body_text = models.TextField()
    pub_date = models.DateField()
    mod_date = models.DateField()
    authors = models.ManyToManyField(Author)
    number_of_comments = models.IntegerField()
    number_of_pingbacks = models.IntegerField()
    rating = models.IntegerField()

    def __str__(self):
        return self.headline
```

## Creating objects
``` python
>>> from blog.models import Blog
>>> b = Blog(name='Beatles Blog', tagline='All the latest Beatles news.')
>>> b.save()

```

## Saving changes to objects
``` python
>>> b5.name = 'New name'
>>> b5.save()
```

## Saving ForeignKey and ManyToManyField fields


## Retrieving objects
``` python
>>> Blog.objects
<django.db.models.manager.Manager object at ...>
>>> b = Blog(name='Foo', tagline='Bar')
>>> b.objects
Traceback:
    ...
AttributeError: "Manager isn't accessible via Blog instances."
```

## Retrieving all objects 

SELECT ALL

``` python
>>> all_entries = Entry.objects.all()
```


## Retrieving specific objects with filters 

WHERE 조건


## Chaning filters 

여러 조건 연결하기

``` python
>>> Entery.objects.filter(
    headline__startswith='What'
).exclude(
    pub_date__gte=datetime.date.today()
).filter(
    pub_date__gte=datetime.date(2005, 1, 30)
)
```


> **QuerySets are lazy**<br/> 
django의 orm query들은 기본적으로 lazy하다...뭔 의민가?
``` python
>>> q = Entry.objects.filter(headline__startswith="What")
>>> q = q.filter(pub_date__lte=datetime.date.today())
>>> q = q.exclude(body_text__icontains="food")
>>> print(q)
```
위 코드상으로만 보면, db 쿼리 실행을 3번하는 것 처럼 보이지만, 그렇지 않다.
django orm은 오직 사용자가 쿼리에 대해서 ask할 때 db에 접근 한다.<br/>
[When QuerySets are evaluated.](https://docs.djangoproject.com/en/3.1/ref/models/querysets/#when-querysets-are-evaluated)






