---
date: 2022/3/21 10:46:25
layout: article
---

# Spring Data JPA 中 findById、getOne、findOne 三个方法的差异与使用场景

Spring Data JPA 中提供了 `findById`、`getOne`、`findOne` 三个方法。从字面上理解，他们都是根据 ID 、或根据指定的查询条件，获取单个实体对象。但他们的底层获取机制、返回值类型、以及抛异常的机制是不一样的，因此对应的使用场景也不一样。本文介绍这些差异，并举例说明。

## 接口介绍

它们主要的区别在于：是否使用了代理对象以支持延迟加载；以及在找不到对象时返回什么样类型的结果。

### `findById` 方法

该方法会立即（EAGER）访问数据库，并返回与指定 ID 关联的实体对象；如果没有找到，则返回 `Optional.empty()`。

```java
public interface CrudRepository<T, ID> extends Repository<T, ID> {	
	/**
	 * Retrieves an entity by its id.
	 *
	 * @param id must not be {@literal null}.
	 * @return the entity with the given id or {@literal Optional#empty()} if none found.
	 * @throws IllegalArgumentException if {@literal id} is {@literal null}.
	 */
	Optional<T> findById(ID id);
}
```

### `getOne` 方法

该方法会延迟加载，**它并不立即访问数据库**，而是返回一个代理（`proxy`）对象，这个代理对象是对实体对象的引用，仅在 **使用代理对象访问对象属性时才会去真正访问数据库** ，如果找不到，则抛出 `EntityNotFoundException`。

```java
public interface JpaRepository<T, ID> extends PagingAndSortingRepository<T, ID>, QueryByExampleExecutor<T> {
	/**
	 * Returns a reference to the entity with the given identifier. Depending on how the JPA persistence provider is
	 * implemented this is very likely to always return an instance and throw an
	 * {@link javax.persistence.EntityNotFoundException} on first access. Some of them will reject invalid identifiers
	 * immediately.
	 *
	 * @param id must not be {@literal null}.
	 * @return a reference to the entity with the given identifier.
	 * @see EntityManager#getReference(Class, Object) for details on when an exception is thrown.
	 */
	T getOne(ID id);
}
```

### `findOne` 方法

除了 `findById`、`getOne` 外，Spring Data JPA 还提供了两个不同签名的 `findOne` 方法：

- `Optional<T> findOne(@Nullable Specification<T> spec)`
- `<S extends T> Optional<S> findOne(Example<S> example)`

它们都是立即访问数据库的，用于需要动态构建多条件查询的场景。

```java
public interface QueryByExampleExecutor<T> {
/**
	 * Returns a single entity matching the given {@link Example} or {@literal null} if none was found.
	 *
	 * @param example must not be {@literal null}.
	 * @return a single entity matching the given {@link Example} or {@link Optional#empty()} if none was found.
	 * @throws org.springframework.dao.IncorrectResultSizeDataAccessException if the Example yields more than one result.
	 */
	<S extends T> Optional<S> findOne(Example<S> example);
}
```

```java
public interface JpaSpecificationExecutor<T> {
/**
	 * Returns a single entity matching the given {@link Specification} or {@link Optional#empty()} if none found.
	 *
	 * @param spec can be {@literal null}.
	 * @return never {@literal null}.
	 * @throws org.springframework.dao.IncorrectResultSizeDataAccessException if more than one entity found.
	 */
	Optional<T> findOne(@Nullable Specification<T> spec);
}
```

返回类型为 `Optional` ，如果没有检索到，返回 `Optional.empty()`，如果满足条件的记录条数超过一条，则抛出 `IncorrectResultSizeDataAccessException` 



## 如何选择

从上面的描述可以看出：它们主要的区别在于 **加载时期** 及 **是否支持动态构建查询条件** 的不同。

### 1. 多条件查询的场景中，可使用 findOne

例如，根据 `openId` 以及 `state` 查询指定的用户：

```java
Optional<User> user =
        postRepository.findOne(
            (root, query, cb) ->
                cb.and(cb.equal(root.get("openId"), "your-open-id"), cb.equal(root.get("state"), 1)));
```

或者使用 `findOne(Example<S> example)`：

```java
User u = new User();
u.setOpenId("xxx");
u.setState(1);
Example<User> example = Example.of(u);
Optional<User> user = postRepository.findOne(example);
```

以上两种写法是等效的，执行的 SQL 如下：

```
Hibernate: select user0_.id as id1_0_, user0_.created_at as created_2_0_, user0_.open_id as open_id3_0_, user0_.state as state4_0_ from t_users user0_ where user0_.open_id=? and user0_.state=1
```

### 2. 在按 ID 检索的场景中，使用 findById 或 getOne

前面已经描述过，`findById` 和 `getOne` 的最大的区别是加载时期的不同。

因此：

1、在需要延迟加载时，选择 `getOne`

2、不需要延迟加载时，选择 `findById`

当然了，`findOne` 也可以根据 ID 进行查询，但是写法累赘、且晦涩不易读。

```java
Optional<User> user = postRepository.findOne((root, query, cb) -> cb.equal(root.get("id"), 1));
```

下面，针对延迟加载的场景举个例子：

假如有一个 `Post` 对象和一个 `Comment` 对象，`Comment` 对象中有一个对 `Post` 对象的引用，`Post` 和 `Comment` 是一对多的关系。

Post：

```java
@Entity
@Table(name = "t_posts")
public class Post {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String title;
}
```

Comment：

```java
@Entity
@Table(name = "t_comments")
public class Comment {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String content;

    @ManyToOne  
    private Post post;
}
```

添加一条评论：

```java
public Comment addComment(long postId) {
  final Post p = postRepository.findById(postId); //（1）
  Comment c = new Comment();
  c.setContent("xxx");
  c.setPost(p);
  commentRepository.save(c);
}
```

上面代码中的 `(1)` 处，如果使用的是 `findById`，则 `SQL` 输出为：

```sql
select id, title from t_posts where id=? 
insert into t_comments (id, content, postId) values (?, ?, ?)
```

如果使用的是 `getOne`，则 `SQL` 输出为：

```sql
insert into t_comments (id, content, postId) values (?, ?, ?)
```

由于新建 `Comment` 对象时，需要设置它关联的 `Post` 对象，如果使用 `findById` 来获取 `Post` 对象，会多触发一次数据库加载，而如果利用 `getOne`  的延迟加载策略机制，可以减少一次不必要的数据库交互。



## 总结

- `getOne` 是延迟加载；而 `findById`、`findOne` 是立即加载。

- `getOne` 如果找不到记录会抛出`EntityNotFoundException`；而 `findById`、`findOne` 会返回 `Optional.empty()`。

- 在 `@ManyToOne` 的场景中使用 `findOne` ，可以获得延迟加载机制带来的性能优势。

- 根据非 `ID` 查询、或动态查询的场景中，使用 `findOne`。

- `findOne` 查询结果不能返回超过一条，否则会抛出 `IncorrectResultSizeDataAccessException`。
