# RS-LANG

### Ссылка на деплой

 * https://rslang-team71-rgovin.netlify.app

### Описание технической работы приложения
Приложение представляет собой Single Page Application. В качестве прототипа использовалось приложение Lingvist. Особенность данного прототипа отсутствии скрола. Все приложении должны открываться на размер текущего экрана.

В качестве основы для построения проекта использовался архитектурный шаблон `MVC`. Ключевой особенностью этого подхода является разделение данных приложения, пользовательского интерфейса и управляющей логики на три отдельных компонента: модель, представление и контроллер — таким образом, что модификация каждого компонента может осуществляться независимо
Схема шаблона:

![MVC scheme](./src/assets/img/mvc-scheme.png)


* **Модель**
Логика приложения, предоставляет данные и реагирует на команды контроллера, изменяя своё состояние. В данной реализации логика приложения разбита на основную модель и локальные модели отдельных модулей. Общая модель отвечает за логику всего приложения и работу с бэкендом. Локальные модели получают доступ к основной модели через ссылку, переданную в качестве параметра, и отвечают только за логику данного модуля. Таким образом бизнес-логика всего приложения разделена на отдельные, независимые части.

* **Представление**
Визуализация приложения, отвечает за отображение данных модели пользователю, реагируя на изменения модели.  В данном приложении, представление, также как и модель разделена на основное представление и локальные представления отдельных модулей.

* **Контроллер**
Интерпретирует действия пользователя, оповещая модель о необходимости изменений. В данном проекте обеспечивает взаимодействие представления и модели.

Все приложение состоит из отдельных независимых модулей, разеделенных по функциональному назначению. Одна из задач контроллера - связать данные модули. Именно контроллер создает экземпляры класса каждого отдельного  модуля и обеспечивает его взаимодействие с общей логикой приложения.

*Основная цель* применения концепции MVC состоит в отделении бизнес-логики (модели) от её визуализации (представления, вида)

**Это позволяет**:
* максимально уменьшить количество повторяемого кода
* существенно уменьшить сложность взаимодействия отдельных элементов приложения между собой
* код получается более структурированным, что облегчает его поддержку и тестирование.
* в целом позволяет каждому участнику отдельно работать только над своей частью.

**Недостатки**:
* сложность на начальном этапе, обусловлена тем, что все три фундаментальных блока являются абсолютно независимыми и взаимодействуют между собой исключительно путем передачи данных.
* порог входа немного выше для начинающих разработчиков
* сложнее разбивать приложение на модули
* усложнен процесс расширения функционала. Проблема очень схожа с вышеописанной. Недостаточно просто написать функциональный модуль и подключить его в одном месте программы. Каждый функциональный модуль должен состоять из трех частей, и каждая из этих частей должна быть подключена в соответствующем блоке.

### Роутинг
Роутинг в приложении осуществляется через слушатель “hashchange”, вызов события в котором передает хэш в контроллер, который вызывает нужную часть приложения. Это позволило задействовать кнопку “Назад”, что удобно при навигации.

### Шаблонизатор
В проекте также применен принцип шаблонизатора, наподобие “Handlebars”, где есть возможность обозначить в html-разметке название свойства объекта, которое при рендеренге заменяется его значением. Данный принцип позволяет хранить html файлы отдельно от js файлов. Это делает структуру файлов прозрачнее, а также позволяет максимально избежать работу с html-разметкой непосредственно в javascript коде.