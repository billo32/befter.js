# Befter.js
jQuery плагин для сравнения картинок методом наложения по принципу было/стало

#### Использование
##### HTML

```
<div class="comparer">	
	<img src="http://placehold.it/500x500&text=1" alt="">
	<img src="http://placehold.it/500x500&text=2" alt="">
</div>
```

	
##### JS
```
<script>
	$(window).load(function () {
		$(".comparer").comparer();
	});
</script>
```
