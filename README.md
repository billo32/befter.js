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
		$(".comparer").befter();
	});
</script>
```

#### Опции

```
$(".comparer").befter(/*{ опции }*/)  

{
	position : '50px',  // позиция делителя от левого края
	bold : '1px',	    // ширина делителя
	style : 'bold',     // стиль делителя
	color : 'red',      // цвет делителя
}

$(".comparer").befter({bold : '2px', color : 'blue' });

```